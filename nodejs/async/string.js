function sleep(milliSeconds) {  // 模拟卡顿
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

function outputString(response) {
    sleep(10000);  // 阻塞 10s
    response.end('Hello World\n'); // 先执行耗时操作，再输出
}

exports.output = outputString;
