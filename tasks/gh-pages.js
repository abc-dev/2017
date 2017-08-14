'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let ghPages = require('gulp-gh-pages');

gulp.task('deploy', deploy);

function deploy() {
  return gulp
    .src('./build/**/*')
    .pipe(plumber())
    .pipe(ghPages());
};
