const express = require( 'express' );

const app = express();
const jquery = require( 'jquery' );

app.get( '*', ( req, res ) => {
	res.sendFile( `${__dirname}/index.html` );
} );
console.log(2)
app.use( express.static( 'public' ) )
	.listen( 8080 );
