'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let uglify = require('gulp-uglify');
// let notify = require('gulp-notify');
let babel = require('gulp-babel');

gulp.task('js', jsTask);

function jsTask() {
  return gulp
    .src(['src/js/*.js'])
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('build/js'))
    // .pipe(notify('JS nice!'));
};
