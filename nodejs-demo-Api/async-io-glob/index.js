const glob = require("glob");
 console.time('glob')
let arg =glob("../**/*.js",function (er, matches) {
  console.log("matches", matches)
})
console.timeEnd("glob")
console.log(__dirname)
// console.time('glob')
// let result = glob.sync("../**/*.js")
// console.timeEnd("glob")
// console.log(result)
