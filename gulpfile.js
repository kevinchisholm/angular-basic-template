(function(){
    'use strict';

    /*global require: false */

    var gulp = require('gulp'),
        serve = require('gulp-serve');


    gulp.task('serve', serve('web/src'));
})();