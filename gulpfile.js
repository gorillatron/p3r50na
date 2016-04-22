var gulp = require("gulp")
var sourcemaps = require("gulp-sourcemaps")
var browserify = require("gulp-browserify")
var babelify = require("babelify")
var concat = require("gulp-concat")

gulp.task("build:client", function () {
  return gulp.src("src/client/index.js")
    .pipe(sourcemaps.init())
    .pipe(browserify({
      transform: [babelify]
    }))
    .pipe(concat("client.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/js"))
})
