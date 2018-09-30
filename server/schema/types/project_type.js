const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql;

const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    dueDate: { type: GraphQLString },
    priority: { type: GraphQLInt }
  }
});

module.exports = ProjectType;