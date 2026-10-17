"use strict";

const path = require('path');
const fs = require('fs');
const net = require('net');
const gconnect = require('gulp-connect');
const puppeteer = require('puppeteer');
const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const rename = require("gulp-rename");

const PORT = process.env.PORT || 8008;
const themeName = path.basename(process.cwd());

async function connect() {
	await gconnect.server({
		port: PORT,
		root: './',
	});
	// wait until the server accepts connections before screenshotting
	const start = Date.now();
	for (;;) {
		try {
			await new Promise((resolve, reject) => {
				const socket = net.connect(PORT, '127.0.0.1');
				socket.once('connect', () => { socket.end(); resolve(); });
				socket.once('error', reject);
			});
			return;
		} catch (err) {
			if (Date.now() - start > 10000) {
				throw new Error(`dev server did not start on port ${PORT}`);
			}
			await new Promise(resolve => setTimeout(resolve, 200));
		}
	}
}

async function disconnect() {
	await gconnect.serverClose();
}

function getThemeColor() {
	try {
		const data = fs.readFileSync(path.resolve('./theme.json'), 'utf8')
			.replace(/\/\*(.*)\*\//gs, '').replace(/(\/\/[^\n\r]*[\n\r]+)/gs, '').trim();
		return JSON.parse(data).dark ? "dark" : "light";
	} catch (err) {
		return "light";
	}
}

// escape raw html for embedding inside JS template literals
function escapeTemplateLiteral(html) {
	return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

// keep only the requested groups (e.g. `gulp screenshots -hero`); empty = all
function matchGroups(dirs, groups) {
	const only = (dirs || []).map(dir => String(dir).replace(/^-+/, '').toLowerCase()).filter(Boolean);
	if (!only.length) return groups;
	return groups.filter(group => only.some(name => {
		const slug = group.toLowerCase();
		return slug === name || slug.startsWith(name);
	}));
}

function listGroupDirs(baseDir) {
	return fs.readdirSync(baseDir).filter(fileName => fs.statSync(`${baseDir}/${fileName}`).isDirectory());
}

async function screenshots(type = "sections", dirs = []) {
	const sectionsDir = path.resolve("./" + type);
	const screenshotDir = path.resolve("./screenshots/" + type + "/");
	const baseDir = path.resolve(".");
	const themeColor = getThemeColor();
	const sections = [];

	for (const group of matchGroups(dirs, listGroupDirs(sectionsDir))) {
		for (const sectionFile of fs.readdirSync(`${sectionsDir}/${group}`)) {
			if (!sectionFile.endsWith('.html') || sectionFile.endsWith('-screenshot.html')) continue;
			sections.push(`${sectionsDir}/${group}/${sectionFile}`);
		}
	}

	if (!sections.length) {
		console.log(`No ${type} matched, nothing to screenshot.`);
		return true;
	}

	const browser = await puppeteer.launch({
		args: [
		  '--start-maximized',
		  '--no-sandbox',
		],
	});
	try {
		const page = await browser.newPage();
		await page.setUserAgent(
		  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
		);

		if (type == "styles") {
			// large enough that the 480px thumb is a downscale, not an upscale
			await page.setViewport({ width: 320, height: 240 });
		} else {
			await page.setViewport({ width: 1500, height: 800 });
		}

		page.on('console', (msg) => console.log('PAGE LOG:', msg.text));

		for (const section of sections) {
			try {
				await screenshotSection(page, type, section, sectionsDir, screenshotDir, baseDir, themeColor);
			} catch (err) {
				console.log(`FAILED ${section}: ${err.message}`);
			}
		}

	} finally {
		await browser.close();
	}

	// remove working files, keep only thumbnails
	for (const section of sections) {
		const screenshot = section.replace(sectionsDir, screenshotDir).replace('.html', '.webp');
		const thumb = screenshot.replace('.webp', '-thumb.webp');
		try {
			if (fs.existsSync(thumb)) {
				await fs.promises.unlink(screenshot);
			} else {
				console.log(`Keeping ${screenshot}, thumbnail was not generated.`);
			}
		} catch (err) {
			console.log(`Could not remove ${screenshot}: ${err.message}`);
		}
		try {
			await fs.promises.unlink(section.replace('.html', '-screenshot.html'));
		} catch (err) {
			console.log(`Could not remove temp file: ${err.message}`);
		}
	}

	return true;
}


async function captureSection(page, url, outPath, label) {
	const section = label;
	await page.goto(url, { waitUntil: "load", timeout: 15000 });

	await page.waitForSelector("body > div, body > section, body > header, body > footer, body > *", { timeout: 15000 });
	const elements = await page.$$("body > div, body > section, body > header, body > footer, body > *");
	if (!elements.length) {
		throw new Error("no screenshottable element found");
	}

	// bring the shot into view so lazy images/iframes start loading,
	// then wait for everything visual: fonts, images, same-origin
	// iframes, plus a grace period for cross-origin embeds (maps)
	// whose load state cannot be inspected from outside
	await elements[0].evaluate(element => element.scrollIntoView({ block: "start" }));
	await page.evaluate(() => {
		const waitForImages = [...document.images].map(img => {
			if (img.complete && img.naturalWidth !== 0) return Promise.resolve();
			return new Promise(resolve => {
				img.addEventListener("load", resolve, { once: true });
				img.addEventListener("error", resolve, { once: true });
				setTimeout(resolve, 8000);
			});
		});
		const waitForFrames = [...document.querySelectorAll("iframe")].map(frame => {
			try {
				if (frame.contentDocument && frame.contentDocument.readyState === "complete") return Promise.resolve();
			} catch (err) {
				// cross-origin: state is unreadable, fall through to timed wait
			}
			return new Promise(resolve => {
				frame.addEventListener("load", resolve, { once: true });
				setTimeout(resolve, 8000);
			});
		});
		return Promise.all([
			document.fonts.ready.catch(() => {}),
			...waitForImages,
			...waitForFrames,
			// map tiles keep streaming after iframe load settles
			new Promise(resolve => setTimeout(resolve, 2500)),
		]);
	});
	try {
		await page.waitForNetworkIdle({ idleTime: 1000, timeout: 10000 });
	} catch (err) {
		// prefetch/speculation traffic may never idle; visuals already waited above
	}
	const iframeCount = (await page.$$("iframe")).length;
	if (!iframeCount) {
		await elements[0].screenshot({ path: outPath, type: 'webp' });
		return;
	}
	// some embeds cycle paint/blank every few seconds (tile abort/retry):
	// alternate canary sampling with immediate captures and keep the
	// largest file (painted captures dwarf blank ones)
	let bestBytes = 0;
	let bestShot = null;
	for (let cycle = 0; cycle < 8; cycle++) {
		let painted = false;
		try {
			const frame = (await page.$$("iframe"))[0];
			await frame.evaluate(iframe => iframe.scrollIntoView({ block: "center" }));
			const box = await frame.boundingBox();
			const area = box ? box.width * box.height : 0;
			if (area >= 1000) {
				const canary = {
					x: box.x + (box.width * 2) / 3,
					y: Math.max(box.y, 0),
					width: Math.min(box.width / 3, 1200),
					height: Math.min(box.height, 900),
				};
				const canaryArea = canary.width * canary.height;
				const bytes = (await page.screenshot({ type: "png", clip: canary, captureBeyondViewport: true })).length;
				painted = bytes / canaryArea > 0.3;
			}
		} catch (err) {}
		console.log(`cycle ${label}: ${cycle} painted=${painted}`);
		if (painted) {
			await elements[0].screenshot({ path: outPath, type: 'webp' });
			try {
				const bytes = fs.statSync(outPath).size;
				console.log(`cycle ${label}: ${cycle} captured ${bytes} bytes (best ${bestBytes})`);
				if (bytes > bestBytes) {
					bestBytes = bytes;
					bestShot = fs.readFileSync(outPath);
				}
			} catch (err) {}
		} else {
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	if (bestShot) {
		fs.writeFileSync(outPath, bestShot);
	} else {
		await elements[0].screenshot({ path: outPath, type: 'webp' });
	}

}

async function screenshotSection(page, type, section, sectionsDir, screenshotDir, baseDir, themeColor) {
	console.log(`Start screenshot for '${section}'`);

	const screenshot = section.replace(sectionsDir, screenshotDir).replace('.html', '.webp');
	const sectionScreenshot = section.replace('.html', '-screenshot.html');
	const folderName = path.dirname(screenshot);
	fs.mkdirSync(folderName, { recursive: true });

	const content = fs.readFileSync(section, 'utf8');
	let html;
	if (type == "styles") {
		html = content;
	} else {
		html = `<html data-vvvebjs-editor data-bs-theme="${themeColor}"><head><base href="../../"><link href="/css/style.bundle.css" rel="stylesheet"><link href="/css/screenshots.css" rel="stylesheet"><style>[data-reveal], [data-section] > * {
    opacity: 1;
    transform: translate(0);
}</style></head><body>${content}</body></html>`;
	}
	fs.writeFileSync(sectionScreenshot, html);

	const url = "http://127.0.0.1:" + PORT + sectionScreenshot.replace(baseDir, '');
	const hasIframes = /<iframe[\s>]/.test(content);
	// flaky embeds (maps) sometimes collapse after painting; reload for a
	// fresh paint window and keep the largest capture (paint >> blank)
	const rounds = hasIframes ? 3 : 1;
	let bestShot = null;
	let bestBytes = 0;
	for (let round = 0; round < rounds; round++) {
		if (round > 0) console.log(`retry ${section} (round ${round + 1})`);
		try {
			await captureSection(page, url, screenshot, section);
		} catch (err) {
			console.log(`round ${round + 1} ${section} failed: ${err.message.slice(0, 80)}`);
			continue;
		}
		let bytes = 0;
		try {
			bytes = fs.statSync(screenshot).size;
		} catch (err) {}
		if (bytes > bestBytes) {
			bestBytes = bytes;
			try {
				bestShot = fs.readFileSync(screenshot);
			} catch (err) {
				bestShot = null;
			}
		}

	}
	if (bestShot) fs.writeFileSync(screenshot, bestShot);

	if (!bestShot && !fs.existsSync(screenshot)) {
		console.log(`WARNING ${section}: no screenshot captured, skipping thumbnail`);
		return;
	}
	await new Promise((resolve, reject) => {
		gulp.src(screenshot)
		.pipe(imageResize({
		  width : 480,
		  format: "webp",
		}))
		.pipe(rename(screenshotPath => { screenshotPath.basename += "-thumb"; }))
		.pipe(gulp.dest(folderName))
		.on('end', resolve)
		.on('error', reject);
	});
}

let templates = {
'section':{
	'group':`
	Vvveb.SectionsGroup["{{group}}"] = [{{groupList}}];
`,
	'section':
`Vvveb.Sections.add("{{id}}", {
    name: "{{name}}",
    image: Vvveb.themeBaseUrl + "/{{image}}",
    html: \`{{html}}\`
});`
},
'block': {
	'group':`
	Vvveb.BlocksGroup['{{group}}'] = [{{groupList}}];
`,
	'section':
`Vvveb.Blocks.add("{{id}}", {
    name: "{{name}}",
    image: Vvveb.themeBaseUrl + "/{{image}}",
    html: \`{{html}}\`
});`
},
'style': {
	'group':`
	Vvveb.StylesGroup['{{group}}'] = [{{groupList}}];
`,
	'style':
`Vvveb.Styles.add("{{id}}", {
    name: "{{name}}",
    image: Vvveb.themeBaseUrl + "/{{image}}",
    html: "",
    style: \`{{style}}\`
});`
}};

function template(template, data) {
	return template.replace(/{{(.+?)}}/gm, function(match,  p1) {
		return data[p1];
	})
}

function prettify(str) {
  return str.replace(/[-_]/g, ' ').replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.slice(1));
}

const sectionsSortOrder = [ "hero", "features",  "banner", "services"];

//generate sections for VvvebJs
function sections(type = "section", dirs = []) {
	const sectionsDir = path.resolve(`./${type}s/`);
	let sectionsJs = '';

	const dir = matchGroups(dirs, listGroupDirs(sectionsDir));
	// theme sections first, then preferred order, then alphabetical
	dir.sort((a, b) => {
		if (a === themeName) return -1;
		if (b === themeName) return 1;
		const preferred = [...sectionsSortOrder];
		const ia = preferred.indexOf(a), ib = preferred.indexOf(b);
		if (ia !== -1 || ib !== -1) {
			if (ia === -1) return 1;
			if (ib === -1) return -1;
			return ia - ib;
		}
		return a.localeCompare(b);
	});

	for (const fileName of dir) {
		const filePath = `${sectionsDir}/${fileName}`;

		const group = fileName;
		let sectionsHtml = `<html data-vvvebjs-editor><head><base src="../"><link href="../css/style.bundle.css" rel="stylesheet"><link href="../css/screenshots.css" rel="stylesheet"><style>[data-reveal], [data-section] > * {
    opacity: 1;
    transform: translate(0);
}</style><link href="../css/screenshots.css" rel="stylesheet"></head><body>`;

		const sections = [];
		const files = fs.readdirSync(filePath).
		filter(sectionFile => sectionFile.endsWith('.html') && !sectionFile.endsWith('-screenshot.html')).
		sort((a, b) => {
			const na = parseInt(a.replace( /^\D+/g, ''), 10), nb = parseInt(b.replace( /^\D+/g, ''), 10);
			if (!isNaN(na) && !isNaN(nb) && na !== nb) return na - nb;
			return a.localeCompare(b);
		});
		for (const sectionFile of files) {
			let name = sectionFile.replace(".html","");
			const id = `${group}/${name}`;
			name = prettify(name);
			const image = `screenshots/${type}s/${group}/` + sectionFile.replace(".html", "-thumb.webp");
			const html = escapeTemplateLiteral(fs.readFileSync(`${filePath}/${sectionFile}`,'utf8'));
			sections.push(id);

			sectionsJs += template(templates[type]['section'], {id, name, image, html});
			sectionsHtml += html.replace(/<(section|header|footer)(\s|>)/, '<$1 title="' + name + '"$2');
		}

		fs.writeFileSync(filePath + ".html", sectionsHtml + "</body></html>");

		const groupList = '"' + sections.join('","') + '"';
		sectionsJs += template(templates[type]['group'], {group: prettify(group), groupList});
	}

	return fs.writeFileSync(path.resolve(".") + `/${type}s/${type}s.js`, sectionsJs);
}

//generate styles for VvvebJs
function styles(dirs = []) {
	const stylesDir = path.resolve(`./css/styles`);
	const previewDir = path.resolve(`./styles`);
	const htmlPreview = path.resolve("./src/style-preview.html");
	let stylesJs = '';

	const dir = matchGroups(dirs, listGroupDirs(stylesDir));

	for (const group of dir) {
		const filePath = `${stylesDir}/${group}/`;
		const stylesHtml = fs.readFileSync(htmlPreview,'utf8');;

		if (!fs.existsSync(previewDir + "/" + group)) {
			fs.mkdirSync(previewDir + "/" + group, { recursive: true })
		}

		const styles = [];
		const files = fs.readdirSync(filePath).
		filter(styleFile => styleFile.endsWith('.css')).
		sort((a, b) => parseInt(a.replace( /^\D+/g, '')) - parseInt(b.replace( /^\D+/g, ''))).
		map(styleFile => {

			const name = styleFile.replace(".css","");
			const darkTheme = name.endsWith("-dark");
			const style = `css/styles/${group}/${styleFile}`;
			const id = `${group}/${name}`;
			const image = `screenshots/styles/${group}/` + styleFile.replace(".css", "-thumb.webp");
			const previewHtml = stylesHtml.replace('id="style-css" href=""', `id="style-css" href="../../${style}"`);
			const themedPreviewHtml = darkTheme ? previewHtml.replace('<html lang="en">', '<html lang="en" data-bs-theme="dark">') : previewHtml;

			styles.push(id);

			stylesJs += template(templates['style']['style'], {id, name:prettify(name), image, style});
			fs.writeFileSync(previewDir + "/" +  group + "/" + styleFile.replace(".css", ".html"), themedPreviewHtml);
		});


		const groupList = '"' + styles.join('","') + '"';
		stylesJs += template(templates['style']['group'], {group: prettify(group), groupList});
	}

	return fs.writeFileSync(path.resolve(".") + `/styles/styles.js`, stylesJs);
}


module.exports = { screenshots, sections, styles, connect, disconnect };
