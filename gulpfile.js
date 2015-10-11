// *************************************
//
//	gulpfile
//
// *************************************
//
//	tasks:
//  	`gulp`
//   	`gulp sass`
//   	`gulp css`
//   	`gulp lint`
//   	`gulp js`
//   	`gulp img`
//   	`gulp imports`
//   	`gulp sync`
//   	`gulp serve`
//   	`gulp prod`
//
// *************************************

// *************************************
//
//	modules:
//  	gulp-sass
//   	gulp-concat
//		gulp-concat-css
//		gulp-minify-css
//		gulp-jshint
//		gulp-uglify
//		gulp-html-replace
//		gulp-watch
//		gulp-notify
//		browser-sync
//
// *************************************

var gulp					= require('gulp');
var browserify		= require('gulp-browserify');
var sass					= require('gulp-sass');
var min						= require('gulp-minify-css');
var concatCSS 		= require('gulp-concat-css');
var lint          = require('gulp-jshint');
var concat				= require('gulp-concat');
var uglify 				= require('gulp-uglify');
var html_replace	= require('gulp-html-replace');
var watch 				= require('gulp-watch')
var notify        = require('gulp-notify');
var sync          = require('browser-sync').create();

// -------------------------------------
//   task: scripts
// -------------------------------------
gulp.task('scripts', function () {
	gulp.src(['app/main.js'])
		.pipe(browserify({
    	debug: true,
      transform: [ 'reactify' ]
    }))
	.pipe(gulp.dest('./public/'));
});

gulp.task('default', ['scripts']);