const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;
const mongoose = require('mongoose');
const AuthService = require('../services/auth');
const Project = mongoose.model('project');

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
        priority: { type: GraphQLInt }
      },
      resolve(parentValue, { title, dueDate, priority }) {
        return (new Project({title, dueDate, priority })).save()
      }
    }
  }
});

module.exports = mutation;