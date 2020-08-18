const http = require('http');
const fs = require('fs');

let num = 0;

http.createServer((req, res) => {
  console.log('request id: %d, time:', num++, Date.now());
  fs.readFile('./test.txt', ()=> {
    res.end(req.url)
  });
}).listen(9007, ()=>{
  console.log('server start, 127.0.0.1:9007');
});
