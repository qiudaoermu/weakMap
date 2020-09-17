var fs = require('fs')
var path  = require('path')
var content = fs.readFileSync('./vue.common.js','utf-8')
// console.log(content)
var NODE_ENV = "development";
let tem = "process.env.NODE_ENV === 'production'"
content = content.replace(tem, false)
console.log(content);