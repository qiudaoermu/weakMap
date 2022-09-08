// server.js
// 处理一个请求需要5秒，通过setTimeout设置5秒后响应
var http = require("http");
var n = 0;
http
  .createServer(function (req, res) {
    n++;
    setTimeout(function () {
      console.log("Accept " + n + "request.");
      res.end("test");
    }, 5000);
  })
  .listen(3000);
