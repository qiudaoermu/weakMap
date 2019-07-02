
"use strict";
class IndexController {
    constructor(){
        
    }
    indexAction() {
        return async (ctx,next) => {
            ctx.body = "hello 一灯"
        }
    }
}
export default IndexController;