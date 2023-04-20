var colors = require("colors");
const {exec} = require("child_process");
colors.setTheme({
  custom: ["black", "bgYellow"],
  error: ["red", "bgWhite"]
});
class YalcPushWatchPlugin {
  constructor(options) {
    this.options = options || {};
  }
  watchPushAction(cb) {
    if (this.options.watchPushAction) {
      exec(`yalc push`, (err, stdout, stderr) => {
        err && console.log(err, "err".error);

        if (err) {
          // exce是子线程 需要  throw new Error阻断
          throw new Error("Please Install yalce first!!".error);
        }
        cb();
      });
    }
  }
  apply(compiler) {
    compiler.hooks.watchRun.tapAsync(
      "YalcPushWatchPlugin",
      (compilation, cb) => {
        exec(
          `yalc installations show ${this.options.linkName}`,
          (err, stdout, stderr) => {
            err && console.log(err, "err".error);
            const installs = stdout;
            if (!installs) {
              // exce是子线程 需要  throw new Error阻断
              throw new Error(
                `Please input "yalc publish ${this.options.linkName}" And "yalc link" it to your main project.`.error
              );
            }
            if (installs) {
              this.watchPushAction(cb);
            } else {
              cb();
            }
          }
        );
      }
    );
  }
}
module.exports = YalcPushWatchPlugin;
