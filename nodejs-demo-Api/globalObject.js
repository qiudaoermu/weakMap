// console.log(global)
console.log(Date)
console.log(Math)
console.log(setTimeout)
console.log(__filename) // 表示当前正在执行的脚本的文件名
console.log(__dirname)  // 表示当前执行脚本所在的目录。
console.log(process)
process.on('exit', (code) => {
  console.log('退出代码',code)
})
console.log(process.env)
// console
// setTmeout
// setInterval
