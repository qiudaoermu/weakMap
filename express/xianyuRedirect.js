const express = require( 'express' );

const router = express.Router()
const bodyParser = require('body-parser')

const urlencodedParse = bodyParser.urlencoded({
  extended: false,
});
const app = express();
app.use(express.static('public'))// 唯一保持的中间件
app.get( '/index', ( req, res ) => {
	res.sendFile( `${__dirname}/view/index.html` );
} );
app.post('/index', urlencodedParse, (req, res, next) => {
    const name = req.body.username
    req.data = 3
    res.redirect(`https://s.2.taobao.com/list/list.htm?_input_charset=utf8&q=${name}`)
    next(name)
}, (req, res, next) => {
    console.log(req.data)
});

app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something broke!');
});
app.listen( 8081, () => {
    console.log('8081接口启动')
});
