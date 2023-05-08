const Router = require('koa-router');

const router = new Router();

router.get('/api/mycollection', async (ctx, next) => {
  const collection = ctx.db.collection('mycollection');
  const results = await collection.find({}).toArray();

  ctx.body = results;
});

app.use(router.routes());