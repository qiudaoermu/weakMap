const fs = require('fs');
class outputFileSystem {
  constructor(){

  }
  mkdirpSync(path){
   fs.exists(path, (exists) => {
     exists ? console.log(exists, 'exists') : fs.mkdir(outputPath, err => {

    })
   })
    // fs.rmdir(path, err => {
    //
    // })
    // return fs.mkdir(path,err=>{
    //   console.log(err)
    // })
  }
  writeFileSync(filename,code){
    console.log(filename,'filename')
    return fs.writeFileSync(filename,code)
  }
}
module.exports = outputFileSystem
