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
var lint          = require('gulp-jshint');
var uglify 				= require('gulp-uglify');
var notify        = require('gulp-notify');
var browserify 		= require('browserify');
var reactify 			= require('reactify');
var watchify 			= require('watchify');

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

var ALL_JS				= './app/*.js';
var DIST_JS				= './public/';

// *************************************
//
//	Tasks
//
// *************************************

// convert sass to css
gulp.task('sass', function(){
	gulp.src(ALL_SCSS)
		.pipe(sourcemaps.init())
  	.pipe(sass())
		.pipe(sourcemaps.write(DEST_SOURCEMAP))
  	.pipe(gulp.dest(DEST_CSS))
  	.pipe(notify({ message: 'sass complete' }));
});

// concat & min css, pipe to dist/css
gulp.task('style', ['sass'],  function(){
	gulp.src(ALL_CSS)
  	.pipe(concatCSS('bundle.min.css'))
  	.pipe(min())
  	.pipe(gulp.dest(DIST_CSS))
  	.pipe(notify({ message: 'styles complete' }));
});

// browserify js
gulp.task('browserify', function () {
	var bundler = browserify({
		entries: [REACT], 
		transform: [reactify], 
		debug: true, 
		fullPaths: true
  });
	var watcher = watchify(bundler);
	return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Up dating');
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

gulp.task('default', ['style']);