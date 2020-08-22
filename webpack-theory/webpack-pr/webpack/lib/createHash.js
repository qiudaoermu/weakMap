
const crypto = require('crypto');
const fs = require('fs');

class Hash {
  constructor() {
    this.hash = crypto.createHash('md4');
  }
  createHash (code) {
    this.hash.update(code);
    return this.hash.copy().digest('hex')
  }
}
module.exports = Hash
