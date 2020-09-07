let adm_zip = require("adm-zip");
let zip = new adm_zip();
var colors = require('colors');
colors.setTheme({
	custom: ['black', 'bgYellow'],
	error: ['red', 'bgWhite']
});
class DistZipWebpackPlugin {
	constructor(options) {

		this.options = options;
		console.log('begin use distPlugin'.error)
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
			console.log('register hook'.error)
			let pathout = process.cwd() + this.options.targetPath
			let outPath = process.cwd() + '/' + this.options.outPut
			zip.addLocalFolder(pathout);
			zip.writeZip(outPath);

			cb();
		})
	}
}
module.exports = DistZipWebpackPlugin;
