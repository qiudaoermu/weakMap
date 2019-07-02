'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
(0, _controllers2.default)(app, _koaSimpleRouter2.default);
app.listen(_config2.default.port, () => {
    console.log(`yd-web listen on ${_config2.default.port}`);
});