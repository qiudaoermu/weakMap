const Compiler = require('../lib/compiler.js')
const NodeEnvironmentPlugin = require('../lib/compiler.js')
function registerPlugin(compiler) {
  // 注册plugins
  let plugins = compiler.config.plugins;
  console.log(plugins)
  plugins.forEach((item, i) => {
    item.apply(compiler)
  });
}
// new NodeEnvironmentPlugin(Compiler)
const webpack = (options, callback) => {
  registerPlugin(new Compiler(options))
  return new Compiler(options)
}
module.exports = webpack
