let acorn = require("acorn");
let fs = require('fs')
const resolve = require("enhanced-resolve");
let acornParse = acorn.Parser
let vue_node_module_path = require.resolve('vue')
let resolvePath = require.resolve.paths('vue')
// console.log(vue_node_module_path,'vue_node_module_path')
// console.log(resolvePath,'resolvePath')
let result = '--'
result = resolve.sync("./", "vue");

console.log(result)
// let code = fs.readFileSync(result, 'utf-8')
// let astv = acornParse.parse(code, {ecmaVersion: 2020})
// console.log(astv)

let m = fs.readFileSync('./m.js', 'utf-8')
let ast = acornParse.parse(m, {ecmaVersion: 2020})
console.log(ast)
