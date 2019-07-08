import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import log4js from 'log4js';
import serve from 'koa-static';
import co from 'co';
import { asClass, asValue, createContainer,Lifetime } from 'awilix'
import { scopePerRequest,loadControllers } from 'awilix-koa'
import config from './config';
import errorHandler from './middlewares/errorHandler.js';
const app = new Koa();
// 创建ioc容器
const container = createContainer();
// 每一次请求都是new 一次类
app.use(scopePerRequest(container));

// 装载service
container.loadModules([__dirname + '/service/*.js'], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
})
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: __dirname + '/logs/yd.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
const logger = log4js.getLogger('cheese');
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls: ["[[", "]]"],
    writeBody: false
}));
errorHandler.error(app, logger);
//自动注册所有路由
app.use(loadControllers('controllers/*.js', { cwd: __dirname}));
app.use(serve(config.staticDir));
app.listen(config.port, () => {
    console.log(`yd-web listening on ${config.port}`);
})