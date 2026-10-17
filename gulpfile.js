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

//take screenshots for all styles
npm run gulp screenshots-styles

//take screenshots for specified section groups only
npx gulp screenshots -hero -features
*/
"use strict";

const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const formatHTML = require('gulp-format-html');
const fs = require('fs');
const path = require('path');
const { screenshots, sections, styles, connect, disconnect } = require('./vvveb.js');

// single-dash cli tokens select section/block/style groups, e.g. `npx gulp screenshots -hero`
// (via npm: `npm run gulp -- screenshots -map`). `--group X` works too.
function parameters() {
	const argv = process.argv.slice(2);
	const groups = [];
	for (let i = 0; i < argv.length; i++) {
		if (argv[i] === '--group' && argv[i + 1]) {
			groups.push(argv[++i].replace(/^-+/, ''));
		} else if (/^-[^-][a-z0-9-]*$/i.test(argv[i])) {
			groups.push(argv[i].replace(/^-+/, ''));
		}
	}
	return groups;
}

const sassSources = ['./scss/*.scss', './scss/**/*.scss', '!**/_*/**'];

gulp.task('fileinclude', function() {
  return gulp.src(['./src/*.html', './src/**/*.html', '!**/-*/**', '!**/_*/**'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(formatHTML())
    .pipe(gulp.dest('./'));
});

function compileSass(options) {
  return gulp.src(sassSources)
    .pipe(sassGlob())
    .pipe(sass(options).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

gulp.task('sass', function() {
  return compileSass();
});

// minified production build (overwrites ./css, run before release)
gulp.task('sass-prod', function() {
  return compileSass({ outputStyle: 'compressed' });
});


gulp.task('watch', function () {
    gulp.watch(['./src/*.html', './src/**/*.html'], gulp.series('fileinclude'));
    gulp.watch(['./scss/*.scss', './scss/**/*.scss'], gulp.series('sass'));
});

// remove screenshot working files (*-screenshot.html); full-size shots are
// removed by the screenshots task itself once their thumbnail exists
gulp.task('clean', function (done) {
	function walk(dir) {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				walk(full);
			} else if (entry.name.endsWith('-screenshot.html')) {
				fs.unlinkSync(full);
			}
		}
	}
	for (const base of ['sections', 'blocks']) {
		if (fs.existsSync(base)) walk(base);
	}
	done();
});


gulp.task('gconnect', async function (done) {
    await connect();
    done();
});

gulp.task('gdisconnect', async function (done) {
    await disconnect();
    done();
});

gulp.task('take-screenshots', async function () {
	 return await screenshots('sections', parameters());
});

gulp.task('take-screenshots-blocks', async function () {
	 return await screenshots("blocks", parameters());
});

gulp.task('take-screenshots-styles', async function () {
	 return await screenshots("styles", parameters());
});

gulp.task('sections', async function () {
	 return sections("section", parameters());
});

gulp.task('blocks', async function () {
	 return sections("block", parameters());
});

gulp.task('styles', async function () {
	 return styles(parameters());
});


// Default Task
gulp.task('default', gulp.series('fileinclude', 'sass'));
gulp.task('build', gulp.series('fileinclude', 'sass-prod'));
gulp.task('screenshots', gulp.series('gconnect', 'take-screenshots', 'gdisconnect'));
gulp.task('screenshots-blocks', gulp.series('gconnect', 'take-screenshots-blocks', 'gdisconnect'));
gulp.task('screenshots-styles', gulp.series('gconnect', 'take-screenshots-styles', 'gdisconnect'));
