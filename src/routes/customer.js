const { formRequestForRzp } = require('../helper');

async function routes(fastify) {
  fastify.all('/:team/customers', async (request) => {
    return await formRequestForRzp(request);
  });

  fastify.all('/:team/customers/:customer_id', async (request) => {
    return await formRequestForRzp(request);
  });
}

module.exports = routes;
