import Koa from "koa";
import config from './config';
import controllerInit from './controllers'
import router from 'koa-simple-router';
const app = new Koa();
controllerInit(app,router);
app.listen(config.port, ()=>{
    console.log(`yd-web listen on ${config.port}`)
});

