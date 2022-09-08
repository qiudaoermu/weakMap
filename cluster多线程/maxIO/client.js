// client.js
// 发送一个请求
exports.send = function () {
  var http = require("http");
  // http.globalAgent.maxSockets = Infinity;
  var options = {
    host: "localhost",
    port: "3000",
    path: "/",
    method: "GET",
  };

  var req = http.request(options, function (res) {
    exports.counter += 1;
    res.setEncoding("utf8");
    res.on("data", function (c) {
      //console.log(c);
    });
    res.on("end", function () {
      exports.seccess += 1;
      console.log("Response: " + exports.seccess);
    });
  });
  req.end();
};

exports.seccess = 0;
