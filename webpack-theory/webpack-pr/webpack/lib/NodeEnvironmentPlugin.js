/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
*/
// "use strict";
require('./log.js')
class NodeEnvironmentPlugin {
	constructor(options) {
    this.options = options || {};
    console.log('begin use distPlugin'.error)
	}
	apply(compiler) {
      console.log('emitTap');
      compiler.hooks.afterEmit.tapAsync("NodeEnvironmentPlugin", (compilation, cb) => {
        console.log('emit-done')
        for(var i in compilation.modules) {
          let afterNodeE = compilation.modules[i].replace('process.env.NODE_ENV', compilation.NODE_ENV)
          console.log(afterNodeE)
        }
        cb(afterNodeE);
    });
	}
}
module.exports = NodeEnvironmentPlugin;
