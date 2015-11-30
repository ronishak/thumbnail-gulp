var gulp = require('gulp'); // Build process
var gutil = require('gulp-util'); // Console logging build process
var source = require('vinyl-source-stream'); // For handling touch??
var browserify = require('browserify'); // Load order management
var watchify = require('watchify'); // gulp automatically
var reactify = require('reactify'); // converting JSX to JS

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build()
  bundler.on('update', build)
});
