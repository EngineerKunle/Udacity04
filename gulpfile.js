var gulp      = require('gulp'),
    cssnano   = require('gulp-cssnano');


//minify task for CSS
gulp.task('minify', function() {
    return gulp.src(['src/css/*.css','src/views/css/*.css'])
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

//minify task for JS


gulp.task('default',['minify']);