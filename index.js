const serve = require('koa-static');
const Koa = require('koa');

const app = new Koa();

app.use(serve('./public'));

app.listen(3000);