console.log(global)
console.log(__filename)
console.log(__dirname)
process.on('exit', (code) => {
  console.log('退出代码',code)
})
