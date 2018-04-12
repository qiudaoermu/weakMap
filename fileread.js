let  fs = require('fs');
let  join = require('path').join;
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
             console.log(val);
             result.push(val);
        });

    }
    finder(startPath);
    return result;
}
let fileNames=findSync('./data');
console.log(fileNames);