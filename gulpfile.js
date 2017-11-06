var gulp = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		changed = require('gulp-changed'),
		cssnano = require('gulp-cssnano'),
		scss = require('gulp-sass'),
		scsslint = require('gulp-scss-lint');

var path_src = './src/',
		path_dist = './dist/';

gulp.task('css', function() {
	gulp.src(path_src + 'scss/main.scss')
		.pipe(changed(path_dist), {extension: 'css'})
		.pipe(concat('gridotg.min.css'))
		.pipe(scss())
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(gulp.dest(path_dist));
});

gulp.task('css-linter', function() {
	gulp.src(path_src + 'scss/**/*.scss')
		.pipe(
			scsslint({
				'config': __dirname + '/.scsslint.yml',
				'reporterOutput': 'scsslintReport.json'
			})
		);
});

// Global task
gulp.task('build', ['css', 'css-linter']);