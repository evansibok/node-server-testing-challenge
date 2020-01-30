const express = require('express');

const routes = require('./routes');
const rootMiddleware = require('../middlewares');

const server = express();

rootMiddleware(server)

server.use('/api', routes);

module.exports = server;