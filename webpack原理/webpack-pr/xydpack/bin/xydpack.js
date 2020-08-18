#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const Compiler = require('../lib/compiler.js')
const config = require('../../webpack.config.js')

const compiler = new Compiler(config)

// plugins
let plugins = config.plugins;
plugins.forEach((item, i) => {
  item.apply(compiler)
});
compiler.run()
//watch model
// let file = Object.keys(compiler.modules)
// file.forEach((item, i) => {
//   fs.watchFile(item, (curr, prev) => {
//     compiler.run()
//   })
// });
