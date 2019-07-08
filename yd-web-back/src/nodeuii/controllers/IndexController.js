import {
  GET,
  route
} from 'awilix-koa'

export default
@route("/")
@route("/index.html")

class IndexController {
  constructor({ indexService }) {
    this.IndexService = indexService
  }
  @route("/test/:id")
  @GET()
  async indexAction(ctx) {

    const result = await this.IndexService.getData()
    let a = 32222;
    ctx.body = await ctx.render('index', {
      data: result
    })
  }
}