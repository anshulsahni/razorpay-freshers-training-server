const fastify = require('fastify');

const server = fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

startServer();

async function startServer() {
  try {
    await server.listen(Number(process.env.PORT) || 3000, '0.0.0.0');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}
