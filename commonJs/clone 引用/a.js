let mod = require('./b.js')
console.log('a.js-1', mod.count);
mod.plusCount();
console.log('a.js-2', mod.count);
setTimeout(() => {
    //mod.count = 3;
    console.log('a.js-3', mod.count)
}, 2000);
//commonjs 属于克隆类型  被引用模块改变 在引用模块中无法体现
