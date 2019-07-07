const gulp = require('gulp'),
  watch = require("gulp-watch");
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');

gulp.task('builddev', () => {
  return watch('./src/nodeuii/**/*.js', {
      ignoreInitial: false
    }, () => {
      gulp.src('./src/nodeuii/**/*.js')
        .pipe(babel({
          //关闭外侧的.babelrc
          babelrc: false,
          "plugins": ["babel-plugin-transform-es2015-modules-commonjs"]
        }))
        .pipe(gulp.dest('dist'));
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('buildprod', () => {
  gulp.src('./src/nodeuii/**/*.js')
    .pipe(babel({
      //关闭外侧的.babelrc
      babelrc: false,
      ignore: ["./src/nodeuii/config/*.js"],
      "plugins": ["babel-plugin-transform-es2015-modules-commonjs"]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('configclean', function () {
  gulp.src('./src/nodeuii/**/*.js')
    // transform the files here.
    .pipe(rollup({
      // any option supported by Rollup can be set here.
      input: "./src/nodeuii/config/*.js"
    }))
    .pipe(gulp.dest('./dist'));
});
//ss
let _task = ["builddev"]
if (process.env.NODE_ENV == "production") {
  _task = ["buildprod"]
}
gulp.task("default", _task);