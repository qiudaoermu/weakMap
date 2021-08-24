/**
 * 主页内容响应处理
 */
module.exports = {
	write: function ( res ) {
		res.writeHead( 200, {
			'Content-Type': 'text/html'
		} );
		res.write( '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' );
		res.write( '<h1>主页内容2</h1>' );
		res.end();
	}
}
