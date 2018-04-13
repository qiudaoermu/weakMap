var express = require("express");  
var http = require("http");  
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Headers", "X-Custom-Header,Access-Token");
    next();
});

var router = express.Router();  
var testRouter =  require('./routes/test/test');  
  
 //---------------------------------------------
//   配置应用模板                            //
//  第一个参数模板引擎,第二内容               //
//---------------------------------------------
var swig = require("swig");
app.engine("html", swig.renderFile);
/*配置视图文件路径*/
app.set("views", "./");
/*注册所使用的模板引擎*/
app.set('view engine', 'html');


//-----------------------------------
//   设置静态文件托管               //
//----------------------------------
app.use('/public', express.static(__dirname + '/public'))


//-----------------------------------
//   防止缓存                      //
//----------------------------------
swig.setDefaults({cache: false})
app.disable('view cache');

//-----------------------------------
//   模板渲染                       //
//----------------------------------
app.get("/", function (req, res, next) {

    res.render('index');
});
app.get("/detial", function (req, res, next) {

    res.render('detial');
});


//-----------------------------------
//   配置前台ajax解析模板            //
//----------------------------------
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


//----------------------------
//   设置路由模块            //
//--------------------------- 
app.use('/test', testRouter);  
http.createServer(app).listen(3000); 