const Compiler = require('../lib/compiler.js')
const NodeEnvironmentPlugin = require('../lib/NodeEnvironmentPlugin.js')
function registerPlugin(compiler) {
  // 注册plugins
  new NodeEnvironmentPlugin().apply(compiler)
  let plugins = compiler.config.plugins;
  plugins.forEach((item, i) => {
    item.apply(compiler)
  });
}
const webpack = (options, callback) => {
  let compiler = new Compiler(options)
  registerPlugin(compiler)
  return compiler
}
module.exports = webpack
