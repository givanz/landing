/*
npm run gulp watch

//generate sections
npm run gulp sections 

//generate blocks
npm run gulp blocks

//take screenshots for all sections
npm run gulp screenshots 

//take screenshots for all blocks
npm run gulp screenshots-blocks

//take screenshots for specified section groups
npm run gulp screenshots -hero -features 
*/ 

const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
//const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('node-sass'));
const sassGlob = require('gulp-sass-glob');
const { formatHTML } = require('gulp-format-html');
//const gutil = require('gulp-util');
const rename = require("gulp-rename");
const imageResize = require('gulp-image-resize');
const through2 = require( 'through2' );    
const connect = require('gulp-connect');
const puppeteer = require('puppeteer');
const fs = require('fs')
const path = require('path');
let baseHref = '';
let blockPrefix = "landing";
let themeName = "landing";

//get command line parameters after some specified parameter
function parameters() {
	return process.argv.slice(3);
}

const touch = () => through2.obj( function( file, enc, cb ) {
    if ( file.stat ) {
        file.stat.atime = file.stat.mtime = file.stat.ctime = new Date();
    }
    cb( null, file );
});


let dir = process.env.npm_config_path;
if (dir) {
	console.log('Starting directory: ' + process.cwd());
	try {
	  process.chdir(dir);
	  console.log('New directory: ' + process.cwd());
	}
	catch (err) {
	  console.log('chdir: ' + err);
	}
}

themeName = path.basename(process.cwd());

gulp.task('fileinclude', function() {
  return gulp.src(['./src/*.html', './src/**/*.html', '!**/-*/**', '!**/_*/**'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(formatHTML())
    .pipe( touch() )
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  return gulp.src(['./scss/*.scss', './scss/**/*.scss', '!**/_*/**'])
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});


gulp.task('watch', function () {
    gulp.watch(['./src/*.html', './src/**/*.html'], gulp.series('fileinclude'));
    gulp.watch(['./scss/*.scss', './scss/**/*.scss', './scss/**/**/*.scss'], gulp.series('sass'));
});

var current_section = "posts";
async function screenshots(type = "sections", dirs = []) {
	let sectionsDir = path.resolve("./" + type);
	let screenshotDir = path.resolve("./screenshots/" + type + "/");
	let styleCss = path.resolve("./css/style.css");
	let selector = "body > section";
	let sections = [];
	let baseDir = path.resolve(".");

	if (!dirs.length) {
		dirs = fs.readdirSync(sectionsDir).map(fileName => {
		  let filePath = `${sectionsDir}/${fileName}`;
		  let stat = fs.statSync(filePath)

			if (stat.isDirectory()) {
				let files = fs.readdirSync(filePath).map(sectionFile => {
					//if (filePath.indexOf(current_section) > 0) 
					{
						sections.push(`${filePath}/${sectionFile}`);
					}
					
				});
			}
				
		});	 	
	}

	const browser = await puppeteer.launch({
		args: [
		  '--start-maximized'
		],
		headless: true,
		//slowMo: 250,
		//devtools: true, 
	});
	const page = await browser.newPage();
	//await page.setRequestInterception(true);
	await page.setViewport({
		width: 1500,
		height: 800,
		//deviceScaleFactor: 2
	});

	page.on('console', (msg) => console.log('PAGE LOG:', msg.text));

	await page.evaluate(() => console.log(`url is ${location.href}`));
	/*
	page.on('request', (request) => {
	if (request.resourceType() === 'image') request.abort();
	else request.continue();
	});
	*/ 

	let tempFiles = [];
	
	for (i in sections) {
		section = sections[i];
		screenshot = section.replace(sectionsDir, screenshotDir).replace('.html', '.webp');
		tempFiles.push(screenshot);
		sectionScreenshot = section.replace('.html', '-screenshot.html');;
		tempFiles.push(sectionScreenshot);
		
		//gutil.log(`Start screenshot for '${gutil.colors.cyan(section)}' to '${gutil.colors.magenta(screenshot)}'`);
		console.log(`Start screenshot for '${section}' to '${screenshot}'`);
		
		folderName = path.dirname(screenshot);
		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName)
		}			

		let content = fs.readFileSync(section,'utf8');
		let html = `<html><head><base href="../../"><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&amp;family=Inter:wght@400;700&amp;" rel="stylesheet"><link href="/css/style.bundle.css" rel="stylesheet"><link href="/css/screenshots.css" rel="stylesheet"></head><body>${content}</body></html>`;
		fs.writeFileSync(sectionScreenshot, html);
		
		//await page.setContent(html, {"waitUntil":"networkidle0"});

		url = "http://127.0.0.1:8008" + sectionScreenshot.replace(baseDir, '');
		/*	
		await Promise.all([ page.goto(url, { waitUntil: "load", timeout: 10000 }).catch(e => {
		  if (e.message.includes('net::ERR_ABORTED')) { console.log('PAGE LOG:', e.message) }
		}), page.waitForNavigation() ]);
		*/ 
		
		await page.goto(url, { waitUntil: "load", timeout: 10000 }).catch(e => {
		  console.log('PAGE LOG:', e.message);
		  //if (e.message.includes('net::ERR_ABORTED')) { console.log('PAGE LOG:', e.message) }
		});
		//await page.goto("file://" + section);
		/*
		await page.addStyleTag({url: `file://${styleCss}`})
		const result = await page.evaluate((baseHref) => {
			let head = document.querySelector('head');
			let base = document.createElement("base");
			base.href= `file://${baseHref}/`;
			head.append(base);
		}, baseHref);
		*/
		
		const element = await page.$$("body > div, body > section, body > header, body > footer, body > *");
		//await page.screenshot({ path: screenshot, fullPage: false, type: 'png' });
		await element[0].screenshot({ path: screenshot, type: 'webp' });
		
		gulp.src(screenshot)
		.pipe(imageResize({
		  width : 480,
		  format: "webp",
		  quality:0,
		}))
		.pipe(rename(function (path) { path.basename += "-thumb"; }))
		.pipe(gulp.dest(folderName)).on('end', () => {
			//remove original screenshot and keep only thumb
			 
		});
		
		
	}

	await browser.close();

	tempFiles.map(screenshot => {
		
		fs.stat(screenshot, function (err, stats) {

			   if (err) {
				   return console.error(err);
			   }

			   fs.unlink(screenshot,function(err){
					if(err) {
						return console.log(err);
					}
					//console.log('file deleted successfully');
			   });  
			})
	});

	return true;
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
}};

function template(template, data) {
	return template.replace(/{{(.+?)}}/gm, function(match,  p1) {
		return data[p1];
	})
}

function prettify(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/[-_]/g,' ');
}

let sectionsSortOrder = [ "hero", "features",  "banner", "services"];

//generate sections for VvvebJs
function sections(type = "section", dirs = []) {
	let sectionsDir = path.resolve(`./${type}s/`);
	let styleCss = path.resolve("./css/style.css");
	let baseDir = path.resolve(".");
	let dir = [];
	let sectionsJs = '';

	if (!dirs.length) {
		dirs = fs.readdirSync(sectionsDir).map(fileName => {
			let stat = fs.statSync(`${sectionsDir}/${fileName}`);

			if (stat.isDirectory()) {
				dir.push(fileName);
			}
		});
	}
	//console.dir(dir);
	sectionsSortOrder.reverse();
	//sort sections
	dir.sort((a, b) => sectionsSortOrder.indexOf(b) - sectionsSortOrder.indexOf(a));
	
	//set theme sections first if available
	const index = dir.indexOf(themeName);
	if (index > -1) {
	  dir.splice(index, 1);
	  dir.unshift(themeName);
	  
	}	

	for (i in dir) {
	  let fileName =  dir[i];		
	  let filePath = `${sectionsDir}/${fileName}`;


		let group = fileName;
		let name;
		let id;
		let html;
		let sectionsHtml = '<html><head><base src="../"><link href="../css/style.bundle.css" rel="stylesheet"><link href="../css/screenshots.css" rel="stylesheet"></head><body>';
		let image = '';
		
		let sections = [];
		let files = fs.readdirSync(filePath).
		sort((a, b) => parseInt(a.replace( /^\D+/g, '')) - parseInt(b.replace( /^\D+/g, ''))).
		map(sectionFile => {
			
			name = sectionFile.replace(".html","");
			id = `${group}/${name}`;
			name = prettify(name);
			image = `screenshots/${type}s/${group}/` + sectionFile.replace(".html", "-thumb.webp");
			html = fs.readFileSync(`${filePath}/${sectionFile}`,'utf8');
			sections.push(id);
			
			sectionsJs += template(templates[type]['section'], {id, name, image, html});
			sectionsHtml += html.replace('<section', '<section title="' + name + '"');
		});
		
		fs.writeFileSync(filePath + ".html", sectionsHtml + "</body></html>");
		
		let groupList = '"' + sections.join('","') + '"';
		group = prettify(group);
		sectionsJs += template(templates[type]['group'], {group, groupList});
	}
	
	return fs.writeFileSync(/*path.resolve(".") + *//*`${sectionsDir}/${type}s.js`*/path.resolve(".") + `/${type}s/${type}s.js`, sectionsJs);
}

gulp.task('connect', async function (done) {
    await connect.server({
        port: 8008,
		//root: './',
    });
});

gulp.task('disconnect', async function (done) {
    await connect.serverClose();
});

gulp.task('take-screenshots',  async function (done) {
	 return await screenshots('sections');
});

gulp.task('take-screenshots-blocks',  async function (done) {
	 return await screenshots("blocks");
});

gulp.task('sections', async function () {
	 return sections("section", parameters());
});

gulp.task('blocks', async function () {
	 return sections("block", parameters());
});


// Default Task
gulp.task('default', gulp.series('fileinclude', 'sass'));
gulp.task('screenshots', gulp.series('connect', 'take-screenshots', 'disconnect'));
gulp.task('screenshots-blocks', gulp.series('connect', 'take-screenshots-blocks', 'disconnect'));
gulp.task('sections', gulp.series('sections'));
gulp.task('blocks', gulp.series('blocks'));
