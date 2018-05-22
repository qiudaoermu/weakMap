
 
var ws=require("nodejs-websocket");//引入websocket模块  
console.log("开始建立连接...");//后台打印状态信息  
var server=ws.createServer(function(connect){//创建一个新连接  
    connect.on("text",function(msg){//接收触发事件  
        console.log("收到的消息是："+msg);//接收到新消息之后在后台打印出来  
        if(msg){//如果消息不是空，将接收到的消息发送给客户端  
            connect.send('接收到的消息是：'+msg);  
        }  
    });  
}).listen(8001,function(){

    console.log('监听8001')
})  
