const express = require('express');
var compressing = require("compressing");
const app = express();
var multiparty = require('multiparty');
var fs = require('fs');
var deleteall = require('./until');
app.use(express.static('public'));

const path = require('path');
let rootPath = path.resolve(__dirname, './public');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
/* 上传 */
app.post('/file/uploading', (req, res, next) => {
  /* 生成multiparty对象，并配置上传目标路径 */
  var form = new multiparty.Form();
  /* 设置编辑 */
  form.encoding = 'utf-8';
  // 设置文件存储路劲
  form.uploadDir = rootPath;
  // 设置文件大小限制
  form.maxFilesSize = 1000000 * 1024 * 1024;
  // form.maxFields = 1000;   //设置所有文件的大小总和//上传后处理
  form.parse(req, (err, fields, files) => {
    var filesTemp = JSON.stringify(files, null, 2);
    if (err) {
      console.log('parse error:' + err);
    } else {
      console.log('parse files:' + filesTemp);

      var inputFile = files.file[0];
      var uploadedPath = inputFile.path;
      var dstPath = rootPath + '/' + inputFile.originalFilename;
      // 重命名为真实文件名
      let fileName = inputFile.originalFilename.split('.')[0];
      fs.rename(uploadedPath, dstPath, (err) => {
        if (err) {
          console.log('rename error:' + err);
        } else {
          deleteall(rootPath + "/public" + '/' + fileName);
          // compressing.zip.uncompress(dstPath, rootPath)
          //   .then(() => {
          //     console.log('unzip', 'success');
          //   })
          //   .catch(err => {
          //     console.error('unzip', err);
          //   });
          // console.log('rename ok');
        }
      });
    }
    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    res.write('200');
    res.end();
  });
});
app.use(express.static('public'))
  .listen(1000);
