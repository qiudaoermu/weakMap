"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
    "viewDir": ""
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
};
const result = init();
exports.default = result;