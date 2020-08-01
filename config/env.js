const mode = process.env.MODE;

const environment = require('./env.'+ mode + '.js');

module.exports = environment;
