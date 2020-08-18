console.log('hello g7')
exports.hello = 'world'
exports.add = function (a,b) {
  return a+ b;
}
exports.gSeven ={ hello:'world'}
module.exports = function minus (a,b) {
  return a-b;
}
setTimeout(()=>{
  console.log(exports)
})
