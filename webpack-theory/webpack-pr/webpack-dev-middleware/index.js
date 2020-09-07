const memfs = require('memfs')
const express = require('express');
const app = express();
const path = require('path')

const MemoryFileSystem = require("memory-fs");
const fsMemoryFileSystem = new MemoryFileSystem();

const middleware = function (compiler,options) {
  compiler.fileSystem = fsMemoryFileSystem;
	compiler.watch();
  compiler.hooks.done.tapAsync('webpack-dev-middle', (stats) => {
    console.log(stats.hash,'hash')
  })
  return function(req, res, next){
		let outFile = compiler.config.output.path + '/' + compiler.config.output.filename;
		let content = compiler.fileSystem.readFileSync(outFile)
		res.send(content)
    next();
  }
}
module.exports = middleware
