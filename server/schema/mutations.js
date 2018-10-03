const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID
} = graphql;
const AuthService = require('../services/auth');

const Project = require('../models/project');
const User = require('../models/user');

const UserType = require('./types/user_type');
const ProjectType = require('./types/project_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
    addProject: {
      type: ProjectType,
      args: {
        title: { type: GraphQLString },
        dueDate: { type: GraphQLString },
        priority: { type: GraphQLInt },
        ownerID: { type: GraphQLID }
      },
      resolve(parentValue, { title, dueDate, priority, ownerID }, req) {
        let project = new Project({
          title,
          dueDate,
          priority,
          ownerID
        });
        return project.save();
      }
    }
  }
});

module.exports = mutation;