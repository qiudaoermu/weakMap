import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import log4js from 'log4js';
import serve from 'koa-static';
import co from 'co';
import config from './config';
import controllerInit from './controllers';
import errorHandler from './middlewares/errorHandler.js';
const app = new Koa();
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
    varControls: ["[[","]]"],
    writeBody: false
}));
errorHandler.error(app, logger);
controllerInit(app, router);
app.use(serve(config.staticDir));
app.listen(config.port, () => {
    console.log(`yd-web listening on ${config.port}`);
})
