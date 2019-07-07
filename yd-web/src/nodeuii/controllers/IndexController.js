import IndexModel  from '../models/IndexModel.js'
class IndexController {
    constructor() {
        
    }
    indexAction() {
        return async (ctx, next) => {
            //ctx.body = "<h1>1111</h1>";
            const IndexModelIns = new IndexModel(); 
            const result = await IndexModelIns.getData();
            ctx.body = await ctx.render('index',{
                data: result 
            })
        };
    }
}
export default IndexController;