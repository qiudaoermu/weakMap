
"use strict";
class IndexController {
    constructor(){
    }
    indexAction() {
        return async (ctx, next) => {
            ctx.body = await ctx.render("index")
        }
    }
}
export default IndexController;