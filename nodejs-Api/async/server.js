var http = require('http');
var output = require('./string') // 一个第三方模块
http.createServer(function (request, response) {
  output.output(response); // 调用第三方模块进行输出
}).listen(8888);
