import {foo} from './a.js';
export function bar() {
    console.log('bar');
    if (Math.random() > 0.5) {
        foo();
    }
}