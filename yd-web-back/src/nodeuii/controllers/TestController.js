import {
  GET,
  route
} from 'awilix-koa'

export default
@route("/test")
class IndexController {
  constructor({ dataService }) {
    this.dataService = dataService
  }
  @GET()
  async indexAction(ctx) {
    const data = await this.dataService.getData()
    ctx.body = data;
  }
}