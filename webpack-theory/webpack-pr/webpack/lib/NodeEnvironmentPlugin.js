/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// "use strict";
class NodeEnvironmentPlugin {
	constructor(options) {
		this.options = options || {};
	}
	apply(compiler) {
    console.log(compiler)
    compiler.hooks.done.tap("NodeEnvironmentPlugin", compiler => {
      console.log(compiler,'compiler********************')
		});
	}
}
module.exports = NodeEnvironmentPlugin;
