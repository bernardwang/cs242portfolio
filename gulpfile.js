// *************************************
//
//	gulpfile.js
//
//	tasks:
//  	`gulp`
//   	`gulp sass`
//   	`gulp css`
//
// *************************************

// *************************************
//
//	Modules
//
// *************************************

var gulp					= require('gulp');
var sass					= require('gulp-sass');
var sourcemaps		= require('gulp-sourcemaps');
var min						= require('gulp-minify-css');
var concatCSS 		= require('gulp-concat-css');
var notify        = require('gulp-notify');
var sync 					= require('browser-sync').create();

// *************************************
//
//	File constants
//
// *************************************

var	ALL_SCSS 			= './app/stylesheets/scss/**/*.scss'; 
var ALL_CSS				= './app/stylesheets/css/*.css'; 
var DEST_CSS			= './app/stylesheets/css/';
var	DIST_CSS			= './public/css/';
var DEST_SOURCEMAP= '../../../public/css/';

var ALL_JS				= './public/*.js';
var DIST_JS				= './public/';

// *************************************
//
//	Tasks
//
// *************************************

// convert scss to css
gulp.task('scss', function(){
	gulp.src(ALL_SCSS)
		.pipe(sourcemaps.init())
  	.pipe(sass())
		.pipe(sourcemaps.write('../../../'+DIST_CSS))
  	.pipe(gulp.dest(DEST_CSS))
  	.pipe(notify({ message: 'scss complete' }));
});

// concat & min css, pipe to dist
gulp.task('css', ['scss'],  function(){
	gulp.src(ALL_CSS)
  	.pipe(concatCSS('bundle.min.css'))
  	.pipe(min())
  	.pipe(gulp.dest(DIST_CSS))
  	.pipe(notify({ message: 'css complete' }));
});

// setup browser sync
gulp.task('sync', ['css'], function() {
	sync.init({
		proxy: 'http://localhost:3000'
	});
	gulp.watch(ALL_SCSS, ['css']).on('change', sync.reload);
});

gulp.task('style', ['css']); 
gulp.task('serve', ['sync']);