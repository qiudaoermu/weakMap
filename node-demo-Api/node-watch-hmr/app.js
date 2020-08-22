const express = require('express')
const app = express()
var path = require('path');
const fsdisk = require('fs');
app.use(express.static(path.join(__dirname, '/public')));
let root = __dirname
const port = 3001

var MemoryFileSystem = require("memory-fs");
// var MemoryFileSystem = require("memory-fs");
var fsMemoryFileSystem = new MemoryFileSystem();
//
// fs.mkdirpSync(""+__dirname+"/assets");
// fs.writeFileSync(""+__dirname+"/assets/main.js", "Hello World1");
// let mem = fs.readFileSync(""+__dirname+"/assets/main.js");
// 内存里生成，硬盘读不到
// 热加载必须在内存里
// import { parse } from 'url';

// import querystring from 'querystring';
var url = require('url')
let parse = url.parse
	// var querystring = require('querystring').default;
const memfs = require('memfs')
let {
	fs,
	vol,
	writeFileSync,
	readFileSync
} = memfs;
const config = {
	path: root,
	file: 'main.js',
	content: "console.log('hello world1')"
};

// '/Users/chen/github/weakMap/node-demo-Api/node-watch-hmr'
console.log(fsMemoryFileSystem)
fsMemoryFileSystem.mkdirpSync(config.path)
console.log(fsMemoryFileSystem.statSync(config.path).isDirectory())
fsMemoryFileSystem.writeFileSync(config.path+'/'+config.file, config.content);
fsMemoryFileSystem.readFileSync('/Users/chen/github/weakMap/webpack-theory/webpack-pr/dist/bundle.js')
let content = fsMemoryFileSystem.readFileSync(config.path+'/'+ config.file)
// console.log(content)
	// let publicPathObject = memoizedParse('/text.txt', false, true);
	// console.log(publicPathObject)
	// let memFilePath =process.cwd() + publicPathObject.path
	// console.log(memFilePath)

function handleRangeHeaders(content, req, res) {
	//assumes express API. For other servers, need to add logic to access alternative header APIs
	// 设置响应头：首部字段 Accept-Ranges 是用来告知客户端服务器是否能处理范围请求，以指定获取服务器某个部分资源。 可指定的字段值有两种，可处理范围请求时指定其为 bytes ，反之则指定为 none。
	res.setHeader("Accept-Ranges", "bytes");
	// 判断是否有请求范围头
	if (req.headers.range) {
		var ranges = parseRange(content.length, req.headers.range);

		// unsatisfiable
		if (-1 == ranges) {
			res.setHeader("Content-Range", "bytes */" + content.length);
			res.statusCode = 416;
		}

		// valid (syntactically invalid/multiple ranges are treated as a regular response)
		if (-2 != ranges && ranges.length === 1) {
			// Content-Range
			res.statusCode = 206;
			var length = content.length;
			res.setHeader(
				"Content-Range",
				"bytes " + ranges[0].start + "-" + ranges[0].end + "/" + length
			);

			content = content.slice(ranges[0].start, ranges[0].end + 1);
		}
	}
	return content;
}
// let result = fsMemoryFileSystem.readFileSync('/assets/main.js'); // 1
// console.log(result)

// console.log(readFileSync('/text.txt', 'utf8'));
// console.log(vol.toJSON());
// fsdisk.watch("/assets/main.js", (event, filename) => {
// 	console.log(ilename)
// });

app.get('/', (req, res) => {
	// content = handleRangeHeaders(content, req, res);
	res.render('index')
})
app.get('/main.js', (req, res) => {
	res.send(content)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
