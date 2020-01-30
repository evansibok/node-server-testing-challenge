const express = require('express');

const routes = require('./baseRoute');
const rootMiddleware = require('../middlewares');

const server = express();

rootMiddleware(server)

server.use('/api', routes);

module.exports = server;