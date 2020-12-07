const express = require( 'express' );

const app = express();
const jquery = require( 'jquery' );

app.get( '/', ( req, res ) => {
	res.sendFile( `${__dirname}/index.html` );
} );
app.use( express.static( 'public' ) )
	.listen( 8080 );
