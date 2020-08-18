const evenloop = {
  queue:[],
  loop() {
    while (this.queue.length) {
        var callback = this.queue.shift()
        callback()
    }
    setTimeout(this.loop.bind(this),50)
  },
  add(callback) {
    this.queue.push(callback)
  }
}
evenloop.loop()
setTimeout(()=>{
  evenloop.add(function() {
    console.log(500)
  })
},500)
setTimeout(()=>{
  evenloop.add(function() {
    console.log(100)
  })
},100)
setTimeout(()=>{
  evenloop.add(function() {
    console.log(300)
  })
},300)
