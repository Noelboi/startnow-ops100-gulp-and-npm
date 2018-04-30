// write your code here
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');

module.exports = gulp;

gulp.task('build:js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('build:css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'))
});

gulp.task('copy', function() {
    return gulp.src('src/assets/*.png')
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('watch', function() {
    gulp.watch('./src/css/*.css', ['build:css']);
    gulp.watch('./src/js/*.js', ['build:js']);
    gulp.watch('./src/assets/*.png', ['copy']);
});

gulp.task('serve', function() {
    return nodemon({
        script: 'server/index.js',
        env: {
        NODE_ENV: 'development'
        }
    });
});

gulp.task('default', ['build:js', 'build:css', 'copy', 'watch', 'serve']);