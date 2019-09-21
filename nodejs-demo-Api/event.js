//引入Event模块并创建eventEmitter对象
const events = require('events')
const eventEmitter = new events.EventEmitter()
//绑定事件处理函数
const connectHandler = function connected(){
  console.log("connected被调用！")
}
//完成事件绑定
eventEmitter.on('connection',connectHandler)
//触发事件
eventEmitter.emit('connection')
console.log('程序执行完毕')

setImmediate(function(param){
    console.log("执行"+param);
},"setImmediate");

process.nextTick(function(){
    console.log("执行next Tick");
});
// setTimeout(function(){
//     console.log('timeout');
// },0)
// setImmediate(function(){
//     console.log('immediate');
// })

require('fs').readFile('foo.txt',function(){
    setTimeout(function(){
        console.log('timeout');
    },0)
    setImmediate(function(){
        console.log('immediate');
    })
})
