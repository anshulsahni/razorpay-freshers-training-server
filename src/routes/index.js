async function routes(fastify) {
  fastify.get('/', async (request) => {
    return { message: 'Welcome to razorpay training' };
  });
}

module.exports = routes;
