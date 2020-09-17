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
      compiler.hooks.emit.tapAsync("NodeEnvironmentPlugin", (compilation, cb) => {
        console.log('NODE_ENV')
        console.log(compilation.NODE_ENV)
        console.log('emit-done')
        for(var i in compilation.modules) {
          console.log(i)
          let afterNodeE = compilation.modules[i].replace('process.env.NODE_ENV', compilation.NODE_ENV)
          if(i === './node_modules/_vue@2.6.12@vue/dist/vue.runtime.common.js') {
            console.log(afterNodeE)
         }
         compilation.modules[i] = afterNodeE
        }
        cb();
    });
	}
}
module.exports = NodeEnvironmentPlugin;
