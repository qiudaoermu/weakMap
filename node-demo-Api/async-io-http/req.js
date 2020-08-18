const http = require('http');
const logger = require('./log4.js')
for(let i=0; i<10000; i++) {
  http.get(`http://127.0.0.1:9007?id=${i}`, (res)=>{
    res.on("data",(data)=>{
      console.log('data', data.toString())
      logger.error('data',data.toString())
    })
  }).on('error', (err)=>{
    console.log('error', err);
  })
}
