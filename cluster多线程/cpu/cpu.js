var http = require("http");

var app = http.createServer(function (req, res) {
  let now = new Date();
  console.log(now, "now");
  if (req.url === "/a") {
    console.time("/a");
    function fib(n) {
      // console.log(n, "n");
      if (n === 0) return 0;
      else if (n === 1) return 1;
      else return fib(n - 1) + fib(n - 2);
    }

    fib(44);
    console.timeEnd("/a");
    res.end("thread a is done " + (new Date() - now));
  } else if (req.url === "/b") {
    console.time("/b");
    function fib(n) {
      // console.log(n, "n");
      if (n === 0) return 0;
      else if (n === 1) return 1;
      else return fib(n - 1) + fib(n - 2);
    }

    fib(44);
    console.timeEnd("/b");
    res.end("thread b is done " + (new Date() - now));
  } else if (req.url === "/c") {
    res.end("thread c is done " + new Date() - now);
  }
});

app.listen(3600, function () {
  console.log("服务已启动");
});
