'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
    viewDir: _path2.default.join(__dirname, '../views'),
    staticDir: _path2.default.join(__dirname, '../assets')
};
const init = () => {
    // 标记当前环境
    if (process.env.NODE_ENV === 'development') {
        const localConfig = {
            port: 8081
        };
        config = _lodash2.default.extend(config, localConfig);
    }
    if (process.env.NODE_ENV === 'production') {
        const proConfig = {
            port: 80
        };
        config = _lodash2.default.extend(config, proConfig);
    }
    return config;
};
const result = init();
exports.default = result;
