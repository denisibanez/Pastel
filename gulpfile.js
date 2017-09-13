var gulp = require('gulp'),

//concatena e minifica
usemin = require('gulp-usemin'),
uglify = require('gulp-uglify');
htmlmin = require('gulp-htmlmin');
cleanCss = require('gulp-clean-css');
rev = require('gulp-rev');
autoprefixer = require('gulp-autoprefixer'),

//imagem e svg sprites
imagemin = require('gulp-imagemin'),
svgSprite = require("gulp-svg-sprites"),

//sass, server e validador de código
sass = require('gulp-sass'),
csslint = require('gulp-csslint'),
jshint = require('gulp-jshint'),
jshintStylish = require('jshint-stylish'),
clean = require('gulp-clean'),
browserSync = require ('browser-sync').create();

//default
gulp.task('default', ['copy'], function() {
  gulp.start('build-img' , 'usemin', 'sprites', 'server');
});

//build copy
gulp.task('copy', ['clean'], function() {
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

//build clean
gulp.task('clean', function() {
	return gulp.src('dist')
		.pipe(clean());
});

//otimizar img
gulp.task('build-img', function() {
  return gulp.src('dist/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
});

//svgsprites
gulp.task('sprites', function () {
    return gulp.src('src/assets/svg/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest('src/assets/images/icons'));
});

//minificar verificanso mas
gulp.task('usemin', function() {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      css: [ cleanCss(), rev(), autoprefixer() ],
      html: [ function () {return htmlmin({ collapseWhitespace: true });} ],
      js: [ uglify(), rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest('dist'));
});

//server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch("src/assets/sass/**/*.scss", ['sass']);
    gulp.watch('src/**/*').on('change', browserSync.reload);

    // Compile sass into CSS & auto-inject into browsers
    gulp.task('sass', function() {
      return gulp.src("src/assets/sass/**/*.scss")
          .pipe(sass())
          .pipe(gulp.dest("src/assets/css"))
          .pipe(browserSync.stream());
    });

    //jshint
    gulp.watch('src/assets/js/**/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });

    //css lint
    gulp.watch('src/assets/css/**/*.css').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.reporter());
    });
});
