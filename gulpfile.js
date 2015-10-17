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
//	modules
//
// *************************************

var gulp					= require('gulp');
var sass					= require('gulp-sass');
var min						= require('gulp-minify-css');
var concatCSS 		= require('gulp-concat-css');
var lint          = require('gulp-jshint');
var concat				= require('gulp-concat');
var uglify 				= require('gulp-uglify');
var html_replace	= require('gulp-html-replace');
var watch 				= require('gulp-watch')
var source 				= require('vinyl-source-stream');
var browserify 		= require('browserify');
var reactify 			= require('reactify');
var watchify 			= require('watchify');
var notify        = require('gulp-notify');
var del 					= require('del');
var sync          = require('browser-sync').create();

// *************************************
//
//	file constants
//
// *************************************

var DIST_CSS			= './dist/styles/css/';
var DIST_JS				= './dist/js/';
var DIST_JS_LIB		= './dist/js/lib';
var DIST_IMG			= './dist/img/';

var	ALL_SCSS 			= './public/styles/sass/**/*.scss'; 
var ALL_CSS 			= './public/styles/css/*.css';
var	DEST_CSS 			= './public/styles/css/';

var REACT					= './app/*.js';
var DEST_REACT		= './public/';

var ALL_JS_CORE		= './public/js/*.js';
var ALL_JS_LIB		= './public/js/lib/*.js';
var DEST_REACT		= './public/';
var DEST_JS_CORE	= './public/js/';
var DEST_JS_LIB		= './public/js/lib/';

// *************************************
//
//	tasks
//
// *************************************

// convert sass to css
gulp.task('sass', function(){
	gulp.src(ALL_SCSS)
  	.pipe(sass())
  	.pipe(gulp.dest(DEST_CSS))
  	.pipe(notify({ message: 'sass complete' }));
});

// concat & min css, pipe to dist/css
gulp.task('css', ['sass'],  function(){
	gulp.src(ALL_CSS)
  	.pipe(concatCSS('bundle.min.css'))
  	.pipe(min())
  	.pipe(gulp.dest(DIST_CSS))
  	.pipe(notify({ message: 'dist/css complete' }));
});

// browserify js
gulp.task('browserify', function () {
	var bundler = browserify({
		entries: [REACT], 
		transform: [reactify], 
		debug: true, 
		fullPaths: true
  });
	var watcher  = watchify(bundler);
	return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source(REACT))
				.pipe(uglify())
        .pipe(gulp.dest(DEST_REACT));
        console.log('Update Done');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source(REACT))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['sass']);