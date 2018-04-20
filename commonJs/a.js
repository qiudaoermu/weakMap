let mod = require('./b.js')
console.log('a.js-1', mod.count);
mod.plusCount();
console.log('a.js-2', mod.count);
setTimeout(() => {
    mod.count = 3;
    console.log('a.js-3', mod.count)
}, 2000);
