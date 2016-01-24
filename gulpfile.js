var gulp      = require('gulp'),
    cssnano   = require('gulp-cssnano'),
    uglify    = require('gulp-uglify'),
    imagemin  = require('gulp-imagemin');


//minify task for CSS
gulp.task('minify', function() {
    return gulp.src(['src/css/*.css','src/views/css/*.css'])
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

//minify task for JS
gulp.task('compress', function() {
  return gulp.src(['src/js/*.js', 'views/js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//minify task for JS
gulp.task('image', function(){
	gulp.src(['src/img/*', 'src/views/images/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default',['minify', 'compress']);