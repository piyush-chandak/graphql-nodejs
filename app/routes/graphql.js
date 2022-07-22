const expess = require('express');
const routes = expess.Router();
const userRoutes = require('./graphql/user');
const { responseHandler } = require('../helper/application');

routes.get('/', (req, res) => {
  responseHandler(req, res, 'Welcome to Graphql api');
});

routes.use('/users', userRoutes);

module.exports = routes;
