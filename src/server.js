const fastify = require('fastify');

const indexRoute = require('./routes/index');
const invoiceRoute = require('./routes/invoice');
const customerRoute = require('./routes/customer');
const itemRoute = require('./routes/item');

const server = fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

server.register(indexRoute);
server.register(invoiceRoute);
server.register(customerRoute);
server.register(itemRoute);

startServer();

async function startServer() {
  try {
    await server.listen(Number(process.env.PORT) || 3000, '0.0.0.0');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}
