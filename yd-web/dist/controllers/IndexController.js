
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class IndexController {
    constructor() {}
    indexAction() {
        return async (ctx, next) => {
            ctx.body = "hello 一灯";
        };
    }
}
exports.default = IndexController;