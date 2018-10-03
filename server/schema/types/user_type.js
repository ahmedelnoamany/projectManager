const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const ProjectType = require('./project_type');
const Project = require('../../models/project');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields:() => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args) {
        return Project.find({ ownerID: parentValue.id })
      }
    }
  })
});

module.exports = UserType;