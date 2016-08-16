var gulp = require('gulp'),
 wiredep = require('wiredep').stream,
 inject = require('gulp-inject');
var print = require('gulp-print');



gulp.task('inject',['build'], function () {
	var target = gulp.src('./client/index.html');

	var sources = gulp.src(['./client/**/*.js', '!./client/**/*test.js', './client/**/*.css'],{
		read: false,
		relative: true})
		.pipe(print());

	var options = {
        directory:  './bower_components/',
        ignorePath: '../',
        devDependencies: true,
        relative: false
        };

	return target
	.pipe(wiredep(options))
	.pipe(inject(sources,
		{ignorePath:"client",
		addRootSlash : false,}
	))
	.pipe(gulp.dest('./public'));
});