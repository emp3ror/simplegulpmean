var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('watch-folder', function() {  
  gulp.watch('./client/**/*', ['inject']);
});


/*
err: Waiting…Fatal error: watch ENOSPC 
solution :
http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc
*/