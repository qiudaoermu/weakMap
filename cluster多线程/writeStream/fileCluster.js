var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;
var fs = require("fs-extra");
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
    .createServer(async (req, res) => {
      console.log(
        `这是工作进程 ${cluster.worker.id}`,
        cluster.isWorker,
        "cluster.isWorker"
      );
      let now = new Date();
      console.log(now);
      if (req.url === "/a") {
        console.time("/a");
        await wrteAsync();
        console.timeEnd("/a");
        res.end("thread a is done " + (new Date() - now));
      } else if (req.url === "/b") {
        console.time("/b");
        let writeable = fs.createWriteStream("./write.js");
        let readable = fs.createReadStream("./read.js");
        readable.pipe(writeable, { end: false });
        console.timeEnd("/b");
        res.end("thread b is done " + (new Date() - now));
      } else if (req.url === "/c") {
        res.end("thread c is done " + new Date() - now);
      }
    })
    .listen(3600, function () {
      console.log("服务已启动");
    });
}
const wrteAsync = async () => {
  await fs.copy("./read.pdf", "./write.pdf");
  console.log("write end");
};
