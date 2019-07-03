import Koa from "koa";
import config from './config';
import controllerInit from './controllers'
import router from 'koa-simple-router';
const app = new Koa();
import render from 'koa-swig';
import co from 'co';
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls:["[[","]]"],
    writeBody:false
}));

controllerInit(app, router);
app.listen(config.port, () => {
    console.log(`yd-web listen on ${config.port}`)
});