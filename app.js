const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');
console.log(proxy)
/**
 * 环境变量：development | product
 */
// 端口
var PORT = 8080;

// 代理地址
var spc_url = 'http://10.181.157.25:82/';
// 首页其余接口服务器
var biomedicine_url = 'http://10.181.157.24:8081'
// 登录 直播
var loginObj = {login_url: ''}
loginObj.login_url = 'http://swyltyy.hoptest.haier.net/api'
var login_online = 'http://swyltyy.haier.net/api'
var wisdomMade_rata_url = 'http://10.133.52.99'
/**
 * 解决前端路由history模式404问题
 * 默认加载index.html
 */
// app.get('/',(res,req) => {
//   console.log(res.path)
// })
app.get('*', function (req, res,next) {
  var fullURL = req.protocol + '://' + req.get('host') + req.originalUrl
  var reg = new RegExp("(hoptest)")
  // 区分正式环境测试环境
  if (reg.test(fullURL)) {
    loginObj.login_url = 'http://swyltyy.hoptest.haier.net/api'
  } else {
    loginObj.login_url = 'http://swyltyy.haier.net/api'
  }
  next()
})
var prox_url = [
  { api: '/WatchBoard', url: spc_url },
  // { api: '/spc', url: loginObj.login_url },
  { api: '/biomedicine', url: biomedicine_url },
  { api: '/wmsrest', url: wisdomMade_rata_url }
]
app.use(history({
  index: '/index.html'
}));
Object.defineProperty(loginObj,'login_url', {
  enumerable: true,
  get: function(value) {
    console.log(value,'get-value')
  },
  set(value) {
    console.log(value,'set-value')
      app.use(
        '/spc',
        proxy({
          target: value,
          changeOrigin: true
        })
      );
  }
})
/**
 * 前端资源目录
 */
app.use(express.static(path.join(__dirname, 'public')));
/**
 * 代理
 */
prox_url.forEach(item => {
  app.use(
    item.api,
    proxy({
      target: item.url,
      changeOrigin: true
    })
  );
})

// 启动服务
app.listen(PORT, () => { });
