const { responseHandler, formatId } = require("../helper/application");

const { getAll, get, create, update, destroy } = require("../helper/blog");

const getBlogs = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await getAll(userId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const getBlog = async (req, res) => {
  try {
    const blogId = formatId(req.params.blogId);
    const userId = formatId(req.params.userId);

    const result = await get(userId, blogId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const createBlog = async (req, res) => {
  try {
    let blogPayload = req.body;
    blogPayload.userId = formatId(req.params.userId);

    const result = await create(blogPayload);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = formatId(req.params.blogId);
    let blogPayload = req.body;
    blogPayload.userId = formatId(req.params.userId);

    const result = await update(blogId, blogPayload);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = formatId(req.params.blogId);
    const userId = formatId(req.params.userId);

    const result = await destroy(userId, blogId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
};