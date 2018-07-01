// 获取http模块
const http = require( 'http' );
// 文件 模块
const fs = require( 'fs' );

// 404文件
const error = './view/404.html';
// 实现文件 相应函数以及404错误相应函数
var Response = function ( res, filePath ) {
	// 读取 文件，然后给客户端 相应
	fs.readFile( filePath, ( err, data ) => {
		if ( err ) {
			if ( filePath != error ) // 如果出错输出404页面
				{ Response( res, error ); }
		} else {
			res.writeHead( 200, {
				'Content-Type': 'text/html',
			} );
			res.end( data );
		}
	} );
}

// 创建和启动服务器
const server = http.createServer( ( req, res ) => {
	console.info( req.url );
	// 判断 URL，提供 不同的路由
	const url = req.url;
	if ( url == '/index' || url == '/' ) {
		// 主页
		const index = require( './view/index' );
		index.write( res );
	} else {
		// 制定文件输出view下的文件内容
		Response( res, `./view${url}` );
	}
} );
// 启动服务器
server.listen( '3000', () => {
	const address = server.address();
	console.info( address );
	console.info( '服务器启动成功：http://localhost:%s', address.port );
} );
