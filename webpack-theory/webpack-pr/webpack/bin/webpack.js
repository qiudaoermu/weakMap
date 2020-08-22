const Compiler = require('../lib/compiler.js')
const webpack = (options, callback) => {
  return new Compiler(options)
}
module.exports = webpack
