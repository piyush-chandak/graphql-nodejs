const { responseHandler, formatId } = require("../helper/application");

const { getAll, get, create, update, destroy } = require("../helper/user");

const getUsers = async (req, res) => {
  try {
    const result = await getAll();
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const getUser = async (req, res) => {
  try {
    const userId = formatId(req.params.userId);
    const result = await get(userId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const createUser = async (req, res) => {
  try {
    const userPayload = req.body;
    const result = await create(userPayload);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = formatId(req.params.userId);
    const userPayload = req.body;
    const result = await update(userId, userPayload);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = formatId(req.params.userId);
    const result = await destroy(userId);
    responseHandler(req, res, result);
  } catch(error) {
    responseHandler(req, res, null, error);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};