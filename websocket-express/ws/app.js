const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const swig = require('swig')
const usersRouter = require('./routes/users');
const indexRouter = require('./routes/index');

app.engine('html', swig.renderFile);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    socket.emit('open');
    socket.on('message', (msg) => {
      console.log(`服务器接收到客户端消息 ${msg}`)
    })
    socket.emit('test', 'server ready')
})
app.get('/', (req, res) => {
  res.render('index')
})

server.listen('3003', () => {
  console.log('socket server is listening on port 3003')
})
