const filename = require('./app.js')
const crypto = require('crypto');
const fs = require('fs');

const hash = crypto.createHash('md4');
console.log(filename)
const input = fs.createReadStream('./app.js');
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')}`);
  }
});