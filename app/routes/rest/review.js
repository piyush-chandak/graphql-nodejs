const express = require('express');

const { getReviews, getReview, createReview, updateReview, deleteReview } = require('../../controller/review');

const routes = express.Router({ mergeParams: true });

routes.get('/', getReviews);
routes.post('/', createReview);
routes.get('/:reviewId', getReview);
routes.put('/:reviewId', updateReview);
routes.patch('/:reviewId', updateReview);
routes.delete('/:reviewId', deleteReview);

module.exports = routes;