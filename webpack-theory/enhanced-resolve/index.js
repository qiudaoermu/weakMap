const resolve = require("enhanced-resolve");

resolve("./node_modules/vue/dist", "../vue.runtime.common.dev.js", (err, result) => {
  console.log(err)
  console.log(result)
	result; // === "/some/path/node_modules/module/dir/index.js"
});
resolve("./", "element-ui", (err, result) => {
  console.log(err)
  console.log(result)
	result; // === "/some/path/node_modules/module/dir/index.js"
});
resolve("./", "filep", (err, result) => {
  console.log(err)
  console.log(result)
	result; // === "/some/path/node_modules/module/dir/index.js"
});