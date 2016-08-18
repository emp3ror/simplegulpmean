var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('watch-folder', function() {  
  gulp.watch('./client/**/*', ['inject']);
});