#! /usr/bin/env node

const Compiler = require('../lib/compiler.js')
const config = require('../../webpack.config.js')
const NodeEnvironmentPlugin = require('../lib/NodeEnvironmentPlugin.js')
const compiler = new Compiler(config)

function registerPlugin(compiler) {
  // 注册plugins
  let plugins = compiler.config.plugins;
  console.log(plugins)
  plugins.forEach((item, i) => {
    item.apply(compiler)
  });
};
// new NodeEnvironmentPlugin().apply(compiler);
registerPlugin(compiler);
compiler.run()
