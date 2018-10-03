const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLList } = graphql;
const UserType = require('./user_type');
const ProjectType = require('./project_type');

const Project = require('../../models/project');
const User = require('../../models/user');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Project.findById(id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return User.find({ });
      }
    },  
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args) {
        return Project.find({ });
      }
    }
  })
});

module.exports = RootQueryType;