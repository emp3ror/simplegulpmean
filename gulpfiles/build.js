var gulp = require('gulp');

gulp.task('build',function () {
  return gulp.src('client/**/*.*', { base: './client/' })
    .pipe(gulp.dest('public'));
});