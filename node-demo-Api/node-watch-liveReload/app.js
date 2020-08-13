const express = require('express')
const app = express()
var path = require('path');
require('node-watch.js')
const fsdisk = require('fs');
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'html');

const port = 3000

const swig = require('swig')

app.engine('html', swig.renderFile);


app.get('/', (req, res) => {
	res.render('index')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))