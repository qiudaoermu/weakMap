const Koa = require( 'koa' )
const app = new Koa()

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
	if(ctx.request.path= '/test/') {
		ctx.body = {
			text: "ok"
		}
	} else {
		ctx.body = 'Hello World';
	}
	console.log(ctx.ip)
	console.log(ctx.query)
	console.log(ctx.query.name)
	console.log(ctx.request.path)
});
// app.use(function * () {
// 	console.log(this)
// 	console.log(ctx.request)
//   ctx.body = 'Hello World';
// });
app.listen(3000);
