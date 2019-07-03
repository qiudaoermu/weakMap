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
    "viewDir": _path2.default.join(__dirname, '../views')
};
const init = () => {
    if (process.env.NODE_ENV == "development") {
        const localConfig = {
            port: 8081
        };
        config = _lodash2.default.extend(localConfig);
    }
    if (process.env.NODE_ENV == "production") {
        const proconfig = {
            port: 80
        };
        config = _lodash2.default.extend(localConfig);
    }
    return config;
};
const result = init();
exports.default = result;