import IndexController from "./IndexController";
const insIndexController = new IndexController();
//路由集散中心
export default (app, router) => {
    app.use(router(_ => {
        _.get('/', insIndexController.indexAction());
    }))
}