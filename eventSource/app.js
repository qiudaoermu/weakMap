var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var testdata = "This is my message";

app.get('/connect', function(req, res){
    res.writeHead(200, {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache'
    });

    setInterval(function(){
      console.log('writing ' + testdata);
      res.write('data: ' + JSON.stringify({ msg : new Date() }) + '\n\n');
    }, 5000);
});

/*
app.post('/message', function(req, res) {
  testdata = req.body;
});
*/

var port = 8080;
app.listen(port, function() {
  console.log("Running at Port " + port);
});
