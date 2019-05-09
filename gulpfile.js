"use strict";

var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    precss = require('precss'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync').create();

// gulp.task('fileinclude', function() {
//     // content
//     gulp.src('templates/**')
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('./'));
// });

// gulp.task('precss', function () {
//   return gulp.src('./src/*.css').pipe(
//     postcss([
//       precss(/* options */)
//     ])
//   ).pipe(
//     gulp.dest('.')
//   );
// });

gulp.task('imagemin', function() {
    return gulp.src('img/**')
       .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
       }))
       .pipe(gulp.dest('img'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // gulp.watch('templates/**', ['fileinclude']);
    // gulp.watch('partials/**', ['fileinclude']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
    gulp.watch('js/*.js').on('change', browserSync.reload);
});
