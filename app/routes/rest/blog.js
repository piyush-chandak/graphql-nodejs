const express = require('express');

// Routes
const reviewRoutes = require('./review');


const { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require('../../controller/blog');

const routes = express.Router({ mergeParams: true });

routes.get('/', getBlogs);
routes.post('/', createBlog);
routes.get('/:blogId', getBlog);
routes.put('/:blogId', updateBlog);
routes.patch('/:blogId', updateBlog);
routes.delete('/:blogId', deleteBlog);

routes.use('/:blogId/reviews', reviewRoutes);

module.exports = routes;