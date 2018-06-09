var  fs  = require('fs');
var path = require('path');
var  request = require('request')

var movieDir = __dirname + '/movies',
    exts     = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv'];

// 读取文件列表
var readFiles = function () {
    return new Promise(function (resolve, reject) {
        fs.readdir(movieDir, function (err, files) {
            resolve(files.filter((v) => exts.includes(path.parse(v).ext)));
        });
    });
};

// 获取海报
var getPoster = function (movieName) {
    let url = `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`;

    return new Promise(function (resolve, reject) {
        request({url: url, json: true}, function (error, response, body) {
            if (error) return reject(error);
            console.log(body.subjects[0].images.large)

            resolve(body.subjects[0].images.large);
            reject(error)
        })
    });
};

// 保存海报
var savePoster = function (movieName, url) {
    request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg')));
};


(async () => {
    let files = ['中南海保镖','新少林五祖','精武英雄','黑侠','给爸爸的一封信'];
    // await只能使用在原生语法
    for (var file of files) {
        
        let name = path.parse(file).name;
        console.log(`正在获取【${name}】的海报`);
        savePoster(name, await getPoster(name));

    }
    console.log('=== 获取海报完成 ===');
})();







