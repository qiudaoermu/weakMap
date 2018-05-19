var express = require('express');  
var router = express.Router();  
  
/* GET home page. */  
router.get('/', function(req, res, next) {  
  res.render('index', { name: 'Express 路由1' });  
});  
  
/* GET home page. */  
router.get('/cors', function(req, res, next) {  
  res.render('test/index', { name: 'Express 路由1' });  
});  
  
/* GET home page. */  
router.get('/getData', function(req, res, next) {  
  //设置允许跨域请求  
  var reqOrigin = req.header("origin");  
  
  if(reqOrigin !=undefined && reqOrigin.indexOf("http://localhost:3000") > -1){  
  //设置允许 http://localhost:3000 这个域响应
      res.setResponseHeaders("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");  
  }  
  res.json(200, {name:"张三1",age:40});  
  
});  
  
module.exports = router;  