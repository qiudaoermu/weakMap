const errorHandle = {
    error(app, logger) {
        app.use(async(ctx, next) => {
            console.log('************----***********')
            try {
                await next();
            } catch (error) {
                logger.error(error);
                //邮件短信和电话，运维通知
                ctx.status = error.status || 200;
                ctx.body = "请求出ssss错"
            }
        })

        app.use(async(ctx ,next) => {
            await next();
            if (404 !=ctx.status) return;
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>'
        });
    }
};
export default errorHandle;
