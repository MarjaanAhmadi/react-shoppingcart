var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
// New Plugin
var notify = require('gulp-notify');
var util = require('gulp-util');
var watchify = require('watchify')
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');


gulp.task('browserify' , function(){
  return browserify('./scripts/main.js')
        .transform(babelify , {presets: ["es2015", "react"]})
        .bundle()
        .on('error' , function(e) {
          console.log(e.message);

          this.emit('end');
        })
        .pipe(source('bundle.js'))
        // .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('./build'));
});


gulp.task('watch' , ['browserify'],  function() {
  gulp.watch('./scripts/**/*/*.js' , ['browserify']);
});
