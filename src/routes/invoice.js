const { formRequestForRzp } = require('../helper');

async function routes(fastify) {
  fastify.all('/:team/invoices', async (request) => {
    return await formRequestForRzp(request);
  });
}

module.exports = routes;
