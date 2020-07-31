const fs = require('fs');
require('log-timestamp');

const indexFile = './index.html';
console.log(`Watching for file changes on ${indexFile}`);

var ws = require("nodejs-websocket"); //引入websocket模块  
console.log("开始建立连接..."); //后台打印状态信息

ws.createServer(function(connection) { 
  //创建一个新连接  
	connection.on("text", function(msg) {

	 // 接收触发事件  
	console.log("收到的消息是：" + msg);

		// 接收到新消息之后在后台打印出来  
		if (msg) { // 如果消息不是空，将接收到的消息发送给客户端  
			let message = JSON.stringify({type:'notice',data:'websocket服务器收到，😁👌'})
			connection.send(message);
		}
	})

	fs.watch(indexFile, (event, filename) => {
		console.log(event)
	  if (filename) {
	  	let message = JSON.stringify({type:'reload',data:''})
	  	connection.send(message);
	    console.log(`${filename} file Changed`);
	  }
	});

  connection.on('connect', function(code) {
    console.log('开启连接', code)
  })
  connection.on('close', function(code) {
    console.log('关闭连接', code)
  })
  connection.on('error', function(code) {
    console.log('异常关闭', code)
  })
}).listen(8003, function() {
	console.log('监听8003')
})