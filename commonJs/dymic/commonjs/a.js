var c = Math.floor(Math.random()*10);
import D from './d'
console.log(D)
console.log(c)
console.log(c);//commonjs支持动态引用
var common="";
if(c>5){
    common  = require('./c.js')

}else{
    common = require('./b.js')
}
console.log(common);