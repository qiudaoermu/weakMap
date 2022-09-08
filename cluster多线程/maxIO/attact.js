// attack.js
// 在1秒内发出约50000个请求
let client = require("./client");
let d = 1000,
  t = Date.now();
let count = 0;
while (Date.now() - t < d) {
  count++;
  console.log(count % 10000);
  if (count % 10000 === 0) {
    client.send();
  }
}
console.log("end.");
