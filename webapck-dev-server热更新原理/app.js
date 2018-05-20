  



var http = require('http');

http.createServer(function(req,res){
      console.log('get')
     // res.end('data: ' + +new Date() + '\n\n');
      if(req.url === '/message'){
        res.writeHead(200,{
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        });

        setInterval(function(){
          res.write('data: ' + +new Date() + '\n\n');
        }, 1000);
      }
}).listen(2222);
