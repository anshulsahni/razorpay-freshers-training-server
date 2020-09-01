const { formRequestForRzp } = require('../helper');

async function routes(fastify) {
  fastify.all('/:team/invoices', async (request) => {
    return await formRequestForRzp(request);
  });

  fastify.all('/:team/invoices/:invoice_id', async (request) => {
    return await formRequestForRzp(request);
  });
}

module.exports = routes;
