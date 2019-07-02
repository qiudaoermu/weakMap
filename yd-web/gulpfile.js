const gulp = require('gulp'),
    watch = require("gulp-watch");
const babel = require('gulp-babel');

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
let _task = ["builddev"]
if (process.env.NODE_ENV == "production") {
    _task = []
}
gulp.task("default", _task);