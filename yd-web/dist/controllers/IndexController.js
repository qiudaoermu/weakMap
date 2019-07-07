'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IndexModel = require('../models/IndexModel.js');

var _IndexModel2 = _interopRequireDefault(_IndexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IndexController {
    constructor() {}
    indexAction() {
        return async (ctx, next) => {
            //ctx.body = "<h1>1111</h1>";
            const IndexModelIns = new _IndexModel2.default();
            const result = await IndexModelIns.getData();
            ctx.body = await ctx.render('index', {
                data: result
            });
        };
    }
}
exports.default = IndexController;