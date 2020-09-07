const fs = require('fs');
class outputFileSystem {
  constructor(){

  }
  mkdirpSync(path){
    if(!fs.existsSync(path)) {
      console.log('path')
      fs.mkdirSync(path);
    }
  }
  writeFileSync(filename,code){
    return fs.writeFileSync(filename, code)
  }
}
module.exports = outputFileSystem
