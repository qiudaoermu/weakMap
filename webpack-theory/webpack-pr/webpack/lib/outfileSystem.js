const fs = require('fs');
class outputFileSystem {
  constructor(){

  }
  mkdirpSync(path){
   fs.exists(path, (exists) => {
     console.log(exists, 8)
     exists ? console.log(exists, 'exists') : fs.mkdir(path, err => {
    })
   })
  }
  writeFileSync(filename,code){
    console.log(filename,'filename')
    return fs.writeFileSync(filename, code)
  }
}
module.exports = outputFileSystem
