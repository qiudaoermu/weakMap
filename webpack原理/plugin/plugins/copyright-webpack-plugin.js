class CopyrightWebpackPlugin {　　
	constructor() {　　　　
		console.log('插件被使用了')　　
	}　　
	apply(compiler) {　
		compiler.hooks.entryOption.tap('CopyrightWebpackPlugin', (context, entry) => {
		});
		compiler.hooks.afterEmit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {　
			console.log(compilation.outputOptions.path);
			// ready for zip
			var adm_zip = require("adm-zip");
			//creating archives
			var zip = new adm_zip();
			zip.addLocalFolder(compilation.outputOptions.path);
			console.log(__dirname)
			zip.writeZip("dist.zip");
     		// console.log(filelist)
			// compilation.assets['copyright.txt'] = {　　　　　　
			// 	source: function() {　　　　　　　　
			// 		return 'copyright by' + new Date().getFullYear() + new Date().getMonth() +
			// 			new Date().getDate()　　　　
			// 	},
			// 	size: function() {　　　　　　　　
			// 		return 15　　　　　　
			// 	}　　　　
			// };　　　　
			// 最后一定要调用cb
			cb();　　　　
		})
		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {　　　　　　
		})　　
	}
}
module.exports = CopyrightWebpackPlugin;
