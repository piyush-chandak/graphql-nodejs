const expess = require('express');
const routes = expess.Router();

// Routes
const userRoutes = require('./rest/user');

// Helpers
const { responseHandler } = require('../helper/application');

routes.get('/', (req, res) => {
  responseHandler(req, res, 'Welcome to Rest apis');
});

routes.use('/users', userRoutes);

module.exports = routes;