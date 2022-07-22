const expess = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const { getAll, get, create, update, destroy } = require("../../helper/user");

const routes = expess.Router();
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    id: String
    firstName: String
    email: String
  }
  type Query {
    getUsers: [User],
    getUserInfo(id: Int) : User
  }
  type Mutation {
    updateUserInfo(id: Int, firstName: String, lastName: String, email: String): User
    createUser(firstName: String, lastName: String, email: String): User
    deleteUser(id: Int): Boolean
  }
`);
 
var root = {
  getUsers: async (_args, _req) => {
    return await getAll();
  },
  getUserInfo: async (args, _req) => {
    return await get(args.id);
  },
  updateUserInfo: async (args, _req) => {
    const userPayload = {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email
    }
    return await update(args.id, userPayload);
  },
  createUser: async (args, _req) => {
    const userPayload = {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email
    }
    return await create(userPayload);
  },
  deleteUser: async (args, _req) => {
    await destroy(args.id);
    return true;
  }
};
 
routes.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = routes;
