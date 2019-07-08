const gulp = require('gulp'),
  watch = require("gulp-watch");
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace')
const gulpSequence = require('gulp-sequence')
const eslint = require('gulp-eslint');
var logLine = require('gulp-log-line');
gulp.task('builddev', () => {
  return watch('./src/nodeuii/**/*.js', {
      ignoreInitial: false
    }, () => {
      gulp.src('./src/nodeuii/**/*.js')
        .pipe(babel({
          //关闭外侧的.babelrc
          babelrc: false,
          "plugins": [
            "babel-plugin-transform-es2015-modules-commonjs", 
            "transform-decorators-legacy"
          ]
        }))
        .pipe(logLine(['console.log', 'winston.info']))
        .pipe(gulp.dest('dist'));
    })
});

gulp.task('buildprod', () => {
  gulp.src('./src/nodeuii/**/*.js')
    .pipe(babel({
      //关闭外侧的.babelrc
      babelrc: false,
      ignore: ["./src/nodeuii/config/*.js"],
      "plugins": [
        "babel-plugin-transform-es2015-modules-commonjs", 
        "transform-decorators-legacy"
      ]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('configclean', function () {
  gulp.src('./src/nodeuii/**/*.js')
    // transform the files here.
    .pipe(rollup({
      output: {
        format: 'cjs'
      },
      // any option supported by Rollup can be set here.
      input: "./src/nodeuii/config/index.js",
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function () {
  gulp.src('./src/nodeuii/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});
//ss
let _task = ["builddev"]
if (process.env.NODE_ENV == "production") {
  console.log('*********62')
  _task = gulpSequence("buildprod", "configclean")
}
if (process.env.NODE_ENV == "lint") {
  console.log('*********66')
  _task = gulpSequence("buildprod", "lint")
}
console.error(_task)
gulp.task("default", _task);