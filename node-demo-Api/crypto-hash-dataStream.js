const filename = require('./app.js')
const crypto = require('crypto');
const fs = require('fs');

const hash = crypto.createHash('md4');

hash.update('one');
console.log(hash.copy().digest('hex'));

hash.update('two');
console.log(hash.copy().digest('hex'));

hash.update('three');
console.log(hash.copy().digest('hex'));