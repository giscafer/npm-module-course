var gulp = require('gulp');
var watch = require('gulp-watch');
var mocha = require('gulp-mocha');

gulp.task('watch', function () {
    gulp.watch(['test/**/*.js', 'lib/*.js', 'index.js'], ['mocha']);
});

gulp.task('mocha', function () {
    return gulp.src('test/**/*.js', { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({ reporter: 'spec' }));
});
gulp.task('default', ['mocha', 'watch']);