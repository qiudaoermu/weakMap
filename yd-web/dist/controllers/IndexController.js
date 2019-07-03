
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class IndexController {
    constructor() {}
    indexAction() {
        return async (ctx, next) => {
            ctx.body = await ctx.render("index");
        };
    }
}
exports.default = IndexController;