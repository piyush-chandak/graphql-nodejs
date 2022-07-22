const { User } = require("../models");

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const get = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User Not Found');
  }
  return user;
};

const create = async (requestData = {}) => {
  const user = await User.create({
    firstName: requestData.firstName,
    lastName: requestData.lastName,
    email: requestData.email,
  });
  return user;
};

const update = async (userId, requestData = {}) => {
  const user = await get(userId);
  const res = await user.update(requestData);
  return res;
};

const destroy = async (userId) => {
  const user = await get(userId);
  const res = user.destroy();
  return res;
};

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy
};