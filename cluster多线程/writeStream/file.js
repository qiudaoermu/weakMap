var http = require("http");
var fs = require("fs-extra");
var app = http.createServer(async (req, res) => {
  let now = new Date();
  console.log(now);
  if (req.url === "/a") {
    console.time("/a");
    await wrteAsync();
    console.timeEnd("/a");
    res.end("thread a is done " + (new Date() - now));
  } else if (req.url === "/b") {
    console.time("/b");
    await wrteAsync();
    console.timeEnd("/b");
    res.end("thread b is done " + (new Date() - now));
  } else if (req.url === "/c") {
    res.end("thread c is done " + new Date() - now);
  }
});
const wrteAsync = async () => {
  await fs.move("./read.flv", "./write.flv");
  console.log("write end");
};
app.listen(3900, function () {
  console.log("服务已启动");
});
