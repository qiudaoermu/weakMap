var express = require('express');
var app = express();
app.use(express.static('public'));

//配置swig
var swig =require('swig');
app.set('view engine','html');
app.engine('html',swig.renderFile);
//配置路由
app.get('/',function(req, res, next){
  res.render('index');
});


app.use(function(err, req, res, next){
  res.status(500);
  res.end('error...')
});

app.listen(8081,function(){
  console.log("Server is running")
});


var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jia8121022',
  database : 'xhkdb'
});

app.get('/receive',function(req,res,next){
  // connection.connect();
  let post = {
    username:req.query.username
  }
  connection.query('INSERT INTO userinfo SET ?', post, function (error, results, fields) {
    if (error) {
      console.log(error)
      res.json({
        success:'no',
        msg:'插入数据失败'
      })
    } else {
      res.json({
        success:'ok',
        mss:'插入成功'
      })
    }
    // connection.end();
  });
})



/*容错机制*/
app.get('*',function(req, res ,next){
  res.status(404);
  res.end('404');
});
