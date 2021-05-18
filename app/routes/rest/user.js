const express = require('express');

// Routes
const blogRoutes = require('./blog');

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../../controller/user');

const routes = express.Router({mergeParams: true});

routes.get('/', getUsers);
routes.post('/', createUser);
routes.get('/:userId', getUser);
routes.put('/:userId', updateUser);
routes.patch('/:userId', updateUser);
routes.delete('/:userId', deleteUser);

routes.use('/:userId/blogs', blogRoutes);

module.exports = routes;