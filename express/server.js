var express = require("express");
var app = express();
var jquery = require('jquery');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static("public")).listen(8080);
