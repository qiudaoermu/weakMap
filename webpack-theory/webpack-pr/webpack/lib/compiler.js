const path = require('path')
const fs = require('fs')
const parser = require('@babel/parser') // 把源码生成AST
const t = require('@babel/types') // 替换AST的内容
const traverse = require('@babel/traverse').default //遍历AST的结点
const ejs = require('ejs') //替换AST的内容
const babel = require('@babel/core')
const generator = require('@babel/generator').default // 根据AST生成新的源码
const root = path.join(__dirname)
const OutSystem = require('./outfileSystem');
const CreateHash = require('./createHash')
const resolve = require("enhanced-resolve");
const myResolve = resolve.create({
	// or resolve.create.sync
	extensions: [".ts", ".js"]
	// see more options below
});
process.env.NODE_ENV = 'development'
let a = 1;
const {
	SyncHook,
	SyncBailHook,
	AsyncParallelHook,
	AsyncSeriesHook
} = require("tapable");

class Compiler {
	constructor(config) {
		console.log(config)
		this.fileSystem = new OutSystem();
		this.config = config;
		this.modules = {};
		this.entryPath = '';
		this.root = process.cwd();
		console.log(this.root,'root---')
		this.hashModel = new CreateHash()
		this.hash = ''
			// 定义钩子
		this.hooks = {
			/** @type {SyncHook<[]>} */
			initialize: new SyncHook([]),

			/** @type {SyncBailHook<[Compilation], boolean>} */
			shouldEmit: new SyncBailHook(["compilation"]),
			/** @type {AsyncSeriesHook<[Stats]>} */
			done: new AsyncSeriesHook(["stats"]),
			/** @type {SyncHook<[Stats]>} */
			afterDone: new SyncHook(["stats"]),
			/** @type {AsyncSeriesHook<[]>} */
			additionalPass: new AsyncSeriesHook([]),
			/** @type {AsyncSeriesHook<[Compiler]>} */
			beforeRun: new AsyncSeriesHook(["compiler"]),
			/** @type {AsyncSeriesHook<[Compiler]>} */
			run: new AsyncSeriesHook(["compiler"]),
			/** @type {AsyncSeriesHook<[Compilation]>} */
			emit: new AsyncSeriesHook(["compilation"]),
			/** @type {AsyncSeriesHook<[string, AssetEmittedInfo]>} */
			assetEmitted: new AsyncSeriesHook(["file", "info"]),
			/** @type {AsyncSeriesHook<[Compilation]>} */
			afterEmit: new AsyncSeriesHook(["compilation"]),

			/** @type {SyncHook<[Compilation, CompilationParams]>} */
			thisCompilation: new SyncHook(["compilation", "params"]),
			/** @type {SyncHook<[Compilation, CompilationParams]>} */
			compilation: new SyncHook(["compilation", "params"]),
			/** @type {SyncHook<[NormalModuleFactory]>} */
			normalModuleFactory: new SyncHook(["normalModuleFactory"]),
			/** @type {SyncHook<[ContextModuleFactory]>}  */
			contextModuleFactory: new SyncHook(["contextModuleFactory"]),

			/** @type {AsyncSeriesHook<[CompilationParams]>} */
			beforeCompile: new AsyncSeriesHook(["params"]),
			/** @type {SyncHook<[CompilationParams]>} */
			compile: new SyncHook(["params"]),
			/** @type {AsyncParallelHook<[Compilation], Module>} */
			make: new AsyncParallelHook(["compilation"]),
			/** @type {AsyncParallelHook<[Compilation], Module>} */
			finishMake: new AsyncSeriesHook(["compilation"]),
			/** @type {AsyncSeriesHook<[Compilation]>} */
			afterCompile: new AsyncSeriesHook(["compilation"]),

			/** @type {AsyncSeriesHook<[Compiler]>} */
			watchRun: new AsyncSeriesHook(["compiler"]),
			/** @type {SyncHook<[Error]>} */
			failed: new SyncHook(["error"]),
			/** @type {SyncHook<[string | null, number]>} */
			invalid: new SyncHook(["filename", "changeTime"]),
			/** @type {SyncHook<[]>} */
			watchClose: new SyncHook([]),

			/** @type {SyncBailHook<[string, string, any[]], true>} */
			infrastructureLog: new SyncBailHook(["origin", "type", "args"]),

			// TODO the following hooks are weirdly located here
			// TODO move them for webpack 5
			/** @type {SyncHook<[]>} */
			environment: new SyncHook([]),
			/** @type {SyncHook<[]>} */
			afterEnvironment: new SyncHook([]),
			/** @type {SyncHook<[Compiler]>} */
			afterPlugins: new SyncHook(["compiler"]),
			/** @type {SyncHook<[Compiler]>} */
			afterResolvers: new SyncHook(["compiler"]),
			/** @type {SyncBailHook<[string, Entry], boolean>} */
			entryOption: new SyncBailHook(["context", "entry"])
		};
		// 注册钩子
		// this.registerPlugin();
		this.hooks.initialize.call(err => {
			if (err) return this.finalCallback(err);
			return this.callback();
		});
	}

	getSource(modulePath) {
		let rules = this.config.module.rules;
		let resovePath = this.config.resolveLoader.modules
		let resoveP = 'src'
		let content
		console.log(modulePath,125)
		content = fs.readFileSync(modulePath, 'utf-8')
		for (let i = 0; i < rules.length; i++) {
			let {
				test, use
			} = rules[i]
			let len = use.length - 1

			if (test.test(modulePath)) {
				console.log('--------------beforeLoader--------------', test)
					// 递归处理所有loader
				let loader

				function loopLoader() {
					let lenNum = len--;
					// resovePath.forEach((item, i) => {
					//   let loaderPath = path.join(item, use[lenNum].loader);
					//   console.log(loaderPath)
					//   fs.exists(loaderPath, (exist) => {
					//     console.log(exist, 'exist');
					//     if (exist) {
					//       loader = require(loaderPath)
					//     }
					//   })
					// });
					let laoderPath = resovePath[0] + '/' + use[lenNum].loader;
					loader = require(laoderPath)
					let options = use[lenNum]['options'] ? use[lenNum]['options'] : ''
					content = loader(content, options)
					if (len >= 0) {
						loopLoader()
					}
				}
				loopLoader()
				console.log('--------------afterLoader----------', test)
			}
		}

		return  {resoveP, content}

	}
	parse(source, dirname) {
		let c = a++
		console.log('--------------beforeParse--------------')

		let dependencies = []
		let ast = parser.parse(source.content)
		let self = this;
			// 模块依赖项列表
			// 遍历AST结点
		traverse(ast, {
			CallExpression(p) {
				const node = p.node
				if (node.callee.name === 'require') {
					let originPath =  ''
					// 函数名替换
					node.callee.name = '__webpack_require__'
						// 路径替换
					console.log(node)
					let modulePath =  node.arguments[0].value
					if (!path.extname(modulePath)) {
						modulePath = resolve.sync(self.root, modulePath);
						console.log(dirname,'dirname--------')
						console.log(modulePath, 176)
					} else 
					{
						console.log(source.resoveP,'source.resoveP')
						// console.log(dirname,'dirname')
						console.log(modulePath,'modulePath')
						console.log(modulePath,194)
						modulePath = './' + path.join(dirname, modulePath).replace(/\\/g, '/')
						// modulePath = path.join(self.root, modulePath)
						console.log(modulePath,196)
						console.log(modulePath,'replaceAfter')
					}
					console.log(modulePath,'modulePath200')
					originPath = './' + path.relative(self.root, modulePath).replace(/\\/g, '/')
					console.log(originPath,'originPath')
					node.arguments = [t.stringLiteral(originPath)]
					dependencies.push(modulePath)
				}
			}
		})
		// 保存模块依赖项
		let sourceCode = generator(ast).code
		console.log('--------------afterParse--------------')
		// console.log(ast)
		console.log(dependencies, 'dependencies')
			// 生成新的代码
		fs.writeFile(c+'.json',sourceCode,err=>{
			console.log(err)
		})	
		return {
			sourceCode,
			dependencies
		}
	}
	buildModule(modulePath, isEntry) {
		let source = this.getSource(modulePath)
			// if (!source) return
		console.log(modulePath, 'before----------------------')

		let moduleName = './' + path.relative(this.root, modulePath).replace(/\\/g, '/')

		console.log(moduleName, 'after----------------------')
		if (isEntry) this.entryPath = moduleName

		let {
			sourceCode,
			dependencies
		} = this.parse(source, path.dirname(moduleName))

		this.modules[moduleName] = JSON.stringify(sourceCode)
		dependencies.forEach(d => {
			this.buildModule(d, false)
		})
	}
	emit() {
		const {
			modules,
			entryPath
		} = this
		for(var i in modules ){
			// console.log(modules[i],'-----------------------')
		}
		const outputPath = path.resolve(this.root, this.config.output.path)
		const filePath = path.resolve(outputPath, this.config.output.filename)
		ejs.renderFile(path.join(__dirname, 'template.ejs'), {
				modules,
				entryPath
			})
			.then(code => {
				this.emitAssets(code);
			})
	}
	emitAssets(code) {
		this.fileSystem.mkdirpSync(this.config.output.path);
		let outpath = this.config.output.path + '/' + this.config.output.filename;

		this.writeOut(outpath, code, () => {
			this.fileSystem.writeFileSync(outpath, code);
			this.hash = this.hashModel.createHash(code)
			console.log('Emit ❤️  ❤️‍   success')
			this.hooks.afterEmit.callAsync(code, err => {
				if (err) return this.finalCallback(err);
				return this.afterEmitted(code);
			});

		})
	}
	writeOut(path, code, callback) {
		path && code && callback()
	}
	callback() {}
		// 输出
	afterEmitted(code) {
		let info = 'info'
		let stats = {
			code,
			hash: this.hash
		}
		this.hooks.done.callAsync(stats, err => {
			if (err) return this.finalCallback(err);
		})
	}
	finalCallback(err, stats) {
		if (err) {
			this.hooks.failed.call(err);
		}
	}
	run() {
		const {
			entry
		} = this.config
		this.hooks.run.callAsync(entry, err => {
			if (err) return this.finalCallback(err);
			return this.callback();
		});
		this.buildModule(path.resolve(this.root, entry), true)
		this.emit()
	}
	watch() {
		//watch model
		this.run();
		let file = Object.keys(this.modules)
		file.forEach((item, i) => {
			fs.watchFile(item, (curr, prev) => {
				console.log(curr)
				this.run()
			});
		});
	}
}
module.exports = Compiler
