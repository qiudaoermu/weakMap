import Koa from "koa";
import router from 'koa-simple-router';
import config from "./config";
import controllerInit from "./controllers";
import render from "koa-swig";
import co from "co";
import serve from 'koa-static';
const app = new Koa();
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls:["[[","]]"],
    writeBody: false
}));
controllerInit(app, router);
// app.use(serve(config.staticDir));
app.listen(config.port, () => {
    console.log(`yd-web listening on ${config.port}`);
})