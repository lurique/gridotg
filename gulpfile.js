var gulp = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		changed = require('gulp-changed'),
		cssnano = require('gulp-cssnano'),
		jade = require('gulp-jade'),
		sass = require('gulp-sass');

var browsersync = require('browser-sync'),
		path_src = './src/',
		path_dist = './dist/';

// Swallow error preventing browserSync from shutting down
function swallowError (error) {
	console.log(error.toString())
	this.emit('end')
}

// Custom tasks
gulp.task('html', function() {
	gulp.src(path_src + 'index.jade')
		.pipe(changed(path_dist), {extension: 'html'})
   	.pipe(jade())
   	.on('error', swallowError)
   	.pipe(gulp.dest(path_dist));
});

gulp.task('css', function() {
	gulp.src(path_src + 'scss/main.scss')
		.pipe(changed(path_dist + 'css'), {extension: 'css'})
		.pipe(concat('gridotg.min.css'))
		.pipe(sass())
		.on('error', swallowError)
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(gulp.dest(path_dist + 'css'));
});

gulp.task('watch', function() {
	var html = gulp.watch([path_src + 'index.jade', path_src + 'includes/**/*.jade'], ['html']);
  var css = gulp.watch([path_src + 'scss/**/*.scss'], ['css']);
});

gulp.task('browser-sync', function() {
	browsersync.init([path_dist], {
    proxy: 'http://localhost/',
    browser: 'firefox',
    port: 3000,
    notify: false
  });
});

// Global task
gulp.task('default', ['html', 'css', 'browser-sync', 'watch']);