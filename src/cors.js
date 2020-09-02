const fastifyCors = require('fastify-cors');

module.exports = function(fastify, opts, next) {
  return fastifyCors(fastify, {
    origin: '*'
  }, next);
}
