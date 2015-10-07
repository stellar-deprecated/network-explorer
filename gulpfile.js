'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function () {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['app']
        }
    });

    gulp.watch('app/**/*').on('change', reload);
});

gulp.task('default', function() {
    gulp.start('serve');
});
