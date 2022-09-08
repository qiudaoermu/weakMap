var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

console.log("numCPUs is %o", numCPUs);

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", function (worker, code, signal) {
    console.log("worker " + worker.process.pid + " died");
    // cluster.fork();
  });
} else {
  // Workers can share aclearny TCP connection
  // In this case its a HTTP server

  http
    .createServer(function (req, res) {
      console.log(
        `这是工作进程 ${cluster.worker.id}`,
        cluster.isWorker,
        "cluster.isWorker"
      );
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

        res.end("thread a is done " + new Date());
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

        res.end("thread b is done " + new Date());
      } else if (req.url === "/c") {
        res.end("thread b is done " + new Date());
      }
    })
    .listen(3600, function () {
      console.log("服务已启动");
    });
}
