const  { SyncHook } = require("tapable");
let queue = new SyncHook(["name"]);
queue.tap("1",function(name, name2){
  console.log(name, name2, 1);
  return "1"
})
queue.tap("2",(name)=>{
  console.log(name, 2)
})
queue.tap("3",(name)=>{
  console.log(name, 3)
})
queue.call("webpack","webpack-cli")
