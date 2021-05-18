const { Review } = require("../models");

const getAll = async (userId, blogId) => {
  const reviews = await Review.findAll({
    where: {userId: userId, blogId: blogId}
  });
  return reviews;
};

const get = async (userId, blogId, reviewId) => {
  const review = await Review.findOne({where: {id: reviewId, userId: userId, blogId: blogId}});
  if (!review) {
    throw 'Review Not Found';
  }
  return review;
};

const create = async (requestData = {}) => {
  const review = await Review.create({
    comment: requestData.comment,
    blogId: requestData.blogId,
    userId: requestData.userId,
  });
  return review;
};

const update = async (reviewId, requestData = {}) => {
  const review = await get(requestData.userId, requestData.blogId, reviewId);
  const res = await review.update(requestData);
  return res;
};

const destroy = async (userId, blogId, reviewId) => {
  const review = await get(userId, blogId, reviewId);
  const res = review.destroy();
  return res;
};

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy
};