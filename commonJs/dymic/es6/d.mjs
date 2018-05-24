import E from './e.mjs'
console.log(E);
var c  = "";
setTimeout(function () {
    console.log('afer1500')
    console.log(E)
},2500);
c = Math.floor(Math.random()*10);
/*if(c>5){
    import E from './e.mjs'
}else{
    import F from './f.mjs'
}*/
//不支持 动态引用/*/**/*/
//运行 node --experimental-modules ./d.mjs
