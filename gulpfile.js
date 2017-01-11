var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('minify-css', function() {
    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-to-docs', ['minify-css'], function() {
    return gulp.src('./dist/*.css')
        .pipe(gulp.dest('docs'));
});



gulp.task('default', ['minify-css']);
