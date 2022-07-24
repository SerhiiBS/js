// const gulp = require('gulp');
// gulp.task()
const { task, src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));

const patch = {
    js: {
        src: 'src/**/*.js',
        dist: 'dist',
    },
    css: {
        src: 'src/**/*.css',
        dist: 'dist',
    },
    scss: {
        src: 'src/**/*.scss',
        dist: 'dist',
    }
}


task('js', ()=> {
    return src(patch.js.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify())
        .pipe(dest('dist'))
})
task('css', () => {
    return src(patch.css.src)
        .pipe(cleanCSS())
        .pipe(dest('dist'));
});

task('scss', () => {
    return src(patch.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest('dist'));
});

task('watch', ()=> {
    watch('src/**/*.js', series('js'))
    watch('src/**/*.css', series('css'))
    watch('src/**/*.scss', series('scss'))
})

task('default', series('js', 'css', 'scss'))