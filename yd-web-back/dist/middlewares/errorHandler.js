'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errorHandle = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      console.log('src/nodeuii/middlewares/errorHandler.js:9','************----***********');
      try {
        await next();
      } catch (error) {
        logger.error(error);
        // 邮件短信和电话，运维通知
        ctx.status = error.status || 200;
        ctx.body = "请求出ssss错";
      }
    });

    app.use(async (ctx, next) => {
      await next();
      if (ctx.status !== 404) return;
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    });
  }
};
exports.default = errorHandle;
