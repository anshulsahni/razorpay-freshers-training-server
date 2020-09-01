const { formRequestForRzp } = require('../helper');

async function routes(fastify) {
  fastify.all('/:team/items', async (request) => {
    return await formRequestForRzp(request);
  });

  fastify.all('/:team/items/:item_id', async (request) => {
    return await formRequestForRzp(request);
  });
}

module.exports = routes;
