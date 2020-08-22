const {
  SyncHook
} = require("tapable");
let queue = new SyncHook(["name",'name2']);

queue.call("webpack", "webpack-cli")
