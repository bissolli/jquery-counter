'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

var paths = {
    scripts: {
        src: 'src/*.js',
        dest: 'dist/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del([ 'dist' ]);
}

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.scripts = scripts;
exports.watch = watch;

var build = gulp.series(clean, scripts);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);

/*
 * Define custom tasks
 */
gulp.task('watch', watch);
