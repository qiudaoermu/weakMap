#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const Compiler = require('../lib/compiler.js')
const config = require('../../webpack.config.js')

const compiler = new Compiler(config)

function registerPlugin(compiler) {
  // 注册plugins
  let plugins = compiler.config.plugins;
  console.log(plugins)
  plugins.forEach((item, i) => {
    item.apply(compiler)
  });
}
registerPlugin(compiler)

compiler.run()
