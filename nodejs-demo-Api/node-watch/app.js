const express = require('express')
const app = express()
var path = require('path');
const fsWatch = require('fs');
app.use(express.static(path.join(__dirname, '/')));

const port = 3000

let config = {
	engtryJs: '/assets/main.js'
}

var MemoryFileSystem = require("memory-fs");
var fs = new MemoryFileSystem();

fs.mkdirpSync(""+__dirname+"/assets");
fs.writeFileSync(""+__dirname+"/assets/main.js", "Hello World1");
let mem = fs.readFileSync(""+__dirname+"/assets/main.js");
// 内存里生成，硬盘读不到

fsWatch.watch(""+__dirname+"/assets/main.js", (event, filename) => {
	console.log(filename)
});

app.get('/', (req, res) => {
	res.send('<html><div>'+mem+'</div><script src='+config.engtryJs+'></script></html>')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))