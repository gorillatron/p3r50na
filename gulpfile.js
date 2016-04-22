var gulp = require("gulp")
var sourcemaps = require("gulp-sourcemaps")
var browserify = require("browserify")
var babelify = require("babelify")
var postcss = require('gulp-postcss')
var cssnesting = require('postcss-nesting')
var cssnano = require('cssnano')
var rucksack = require("rucksack-css")
var concat = require("gulp-concat")
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify')
var assign = require('lodash/assign')



const paths = {
  src: {
    js: {
      all: "src/**/*.js*"
    },
    css: {
      all: "src/client/style/**/*.css"
    },
  }
}


gulp.task("build:client", ["build:js", "build:css"])


gulp.task("build:js", function () {

  var opts = assign({}, watchify.args, {
    entries: "src/client/index.js",
    transform: [babelify]
  })

  var bundler = watchify(browserify(opts))

  return bundler.bundle()
    .pipe(source("src/client/index.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.')) // writes .map file
    .pipe(gulp.dest("assets/js"))
})


gulp.task("build:css", function() {

  var processors = [
    cssnesting(),
    rucksack(),
    cssnano()
  ]

  return gulp.src('src/client/style/index.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
})
