const server = require('express')()
var bodyParser = require('body-parser')
server.use(bodyParser())

server.post('/a', (req, res) => {
  console.log(req.body)
  let a = {
    'json': 1
  }
  res.json(a)
})
server.listen(8080, function () {
  console.log('server start')
})
