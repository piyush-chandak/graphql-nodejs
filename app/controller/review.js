const { responseHandler, formatId } = require("../helper/application");

const { getAll, get, create, update, destroy } = require("../helper/review");

const getReviews = async (req, res) => {
  try {
    const userId = formatId(req.params.userId);
    const blogId = formatId(req.params.blogId);

    const result = await getAll(userId, blogId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const getReview = async (req, res) => {
  try {
    const reviewId = formatId(req.params.reviewId);
    const blogId = formatId(req.params.blogId);
    const userId = formatId(req.params.userId);

    const result = await get(userId, blogId, reviewId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const createReview = async (req, res) => {
  try {
    let reviewPayload = req.body;
    reviewPayload.blogId = formatId(req.params.blogId);
    reviewPayload.userId = formatId(req.params.userId);

    const result = await create(reviewPayload);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const updateReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    let reviewPayload = req.body;
    reviewPayload.blogId = formatId(req.params.blogId);
    reviewPayload.userId = formatId(req.params.userId);

    const result = await update(reviewId, reviewPayload);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const blogId = formatId(req.params.blogId);
    const userId = formatId(req.params.userId);

    const result = await destroy(userId, blogId, reviewId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

module.exports = {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview
};