const graphql = require ('graphql');
const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLDate,
} = graphql;

const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  fields: {
    id: { type: GraphQLID },
    tile: { type: GraphQLString },
    dueDate: { type: GraphQLDate }
  }
});

module.exports = ProjetType;