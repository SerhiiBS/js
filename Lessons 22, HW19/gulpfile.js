// const gulp = require('gulp');
// gulp.task()
const { gulp, src, dest } = require('gulp');
task('src', ()=> {
    return src('src/*.js').pipe(dest('dist'))
})