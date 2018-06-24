console.time('a')
var fs = require('fs');
var path = require('path');
var request = require('request')

var movieDir = __dirname + '/movies',
    exts = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv'];

// 读取文件列表
var readFiles = function() {
    return new Promise(function(resolve, reject) {
        fs.readdir(movieDir, function(err, files) {
            resolve(files.filter((v) => exts.includes(path.parse(v).ext)));
        });
    });
};

function Until(){
  // 保存海报
  this.savePoster = function (movieName, url) {
    request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg')));
  }
  // 获取海报
  this.getPoster = function(movieName){
    let url = `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`;

    return new Promise(function(resolve, reject) {
        request({
            url: url,
            json: true
        }, function(error, response, body) {
            if (error) return reject(error);
            console.log(body.subjects[0].images.large)

            resolve(body.subjects[0].images.large);
            reject(error)
        })
    });
  }
}

let until = new Until()

let files = ['中南海保镖', '新少林五祖', '精武英雄', '黑侠', '给爸爸的信','新龙门客栈','碧血剑'];
// await只能使用在原生语法
let arr = []
for (var file of files) {
    let name = path.parse(file).name;
    console.log(`正在获取【${name}】的海报`);
    arr.push(until.getPoster(name))
}
Promise.all(arr).then((result)=>{
    console.log(result)
    result.map((value,index)=>{
          until.savePoster(files[index],value)
    })
    console.timeEnd('a')
})
console.log('=== 获取海报完成 ===');
