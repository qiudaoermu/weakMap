var fs = require("fs");
// 异步执行
fs.readFile('input.txt', function (err, data) {
    // 第一个参数是err
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
