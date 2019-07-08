import IndexModel from '../models/IndexModel.js'

class IndexController {
  constructor() {}
  indexAction() {
    return async (ctx) => {
      const IndexModelIns = new IndexModel();
      const result = await IndexModelIns.getData();
      ctx.body = await ctx.render('index', {
        data: result
      })
    };
  }
}
export default IndexController;