const express = require( 'express' );

const app = express();

const swig = require('swig');

app.set('view engine', 'html');

app.engine('html', swig.renderFile)

app.use(express.static('public'))

app.get( '/', ( req, res ) => {
	res.render('index', {
    title: '首页test',
    data: 'hello express',
  })
} );
app.listen( 8088, () => {
  console.log('已经启动8088')
} );
