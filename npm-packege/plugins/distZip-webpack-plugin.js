var colors = require('colors');
var compressing = require("compressing");
let fs  = require('fs');
colors.setTheme({
	custom: ['black', 'bgYellow'],
	error: ['red', 'bgWhite']
});
class DistZipWebpackPlugin {
	constructor(options) {
		this.options = options;
		console.log('Begin Use DistPlugin'.custom)
	}
	apply(compiler) {
		compiler.hooks.afterEmit.tapAsync('distZipWebpackPlugin', (compilation, cb) => {
			if (!this.options.targetPath) {
				console.log('error'.error)
				console.log('targetPath is not defined'.custom)
				return;
			}
			if (!this.options.outPut) {
				console.log('error'.error)
				console.error('outpath is not defined'.custom)
				return
			}
			// copy:'/dist/index.html', copyTo:'/dist；
			let copy = process.cwd() + this.options.copy;
			let copyTo = process.cwd() + this.options.copyTo;
			if (copy && copyTo) {
				fs.copyFile(copy, copyTo, function(err){
					if(err) console.log(err)
					else console.log('copy file succeed');
				});
			}
			let pathout = process.cwd() + this.options.targetPath
			let outPath = process.cwd() + '/' + this.options.outPut
		
			compressing.zip.compressDir(pathout, outPath)
			.then(() => {
					console.log('zip','success');
			})
			.catch(err => {
					console.error('unzip',err);
			});
			console.log('rename ok');
			cb();
		})
	}
}
module.exports = DistZipWebpackPlugin;
