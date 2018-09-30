const graphql = require('graphql');
const AuthService = require('../services/auth');
const ProjectService = require('../services/projectService');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;
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
    newProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLString },
        dueDate: { type: GraphQLString },
        priority: { type: GraphQLInt }
      },
      resolve(parentValue, { name, dueDate, priority }, req) {
        return ProjectService.createProject({ name, dueDate, priority, req });
      }
    }
  }
});

module.exports = mutation;