const fs = require("fs");

const readable1 = fs.createReadStream("./chip1.txt");
const readable2 = fs.createReadStream("./chip2.txt");
const writeable = fs.createWriteStream("./new.txt");

// 把chip1 chip2 写入 new.txt中
readable1.pipe(writeable);
readable2.pipe(writeable);