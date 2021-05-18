const { Blog, Review } = require("../models");

const getAll = async (userId) => {
  const blogs = await Blog.findAll({
    where: {userId: userId}
  });
  return blogs;
};

const get = async (userId, blogId) => {
  const blog = await Blog.findOne(
    {
      where: {id: blogId, userId: userId},
      include: [{
        model: Review,
      }]
    });
  if (!blog) {
    throw 'Blog Not Found';
  }
  return blog;
};

const create = async (requestData = {}) => {
  const blog = await Blog.create({
    title: requestData.title,
    content: requestData.content,
    userId: requestData.userId,
  });
  return blog;
};

const update = async (blogId, requestData = {}) => {
  const blog = await get(requestData.userId, blogId);
  const res = await blog.update(requestData);
  return res;
};

const destroy = async (userId, blogId) => {
  const blog = await get(userId, blogId);
  const res = blog.destroy();
  return res;
};

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy
};