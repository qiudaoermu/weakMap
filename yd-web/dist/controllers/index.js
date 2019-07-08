"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IndexController = require("./IndexController");

var _IndexController2 = _interopRequireDefault(_IndexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insIndexController = new _IndexController2.default();

// 路由集散中心

exports.default = (app, router) => {
    app.use(router(_ => {
        _.get('/', insIndexController.indexAction());
    }));
};