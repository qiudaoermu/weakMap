// 自定义路由
const express = require( 'express' )
const fs = require( 'fs' )

const app = new express()

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}
 */
function render( page ) {
	return new Promise( ( resolve, reject ) => {
		const viewUrl = `./view/${page}`
		console.log( viewUrl )
		fs.readFile( viewUrl, 'binary', ( err, data ) => {
			if ( err ) {
				reject( err )
			} else {
				resolve( data )
			}
		} )
	} )
}

/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
async function route( url ) {
	let view = '404.html'
	switch ( url ) {
	case '/':
		view = 'index.html'
		break
	case '/index':
		view = 'index.html'
		break
	case '/todo':
		view = 'todo.html'
		break
	case '/404':
		view = '404.html'
		break
	default:
		break
	}
	const html = await render( view )
	console.log( html )
	return html
}

app.get( '*', async ( req, res ) => {
	console.log(req.url)
	const html = await route( req.url )
	console.log(html)
	res.sendFile( __dirname + html );
} );
app.listen( 3001 )
console.log( '[demo] route-simple is starting at port 3001' )
