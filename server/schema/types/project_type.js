const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;
const User = require('../../models/user');

const ProjectType = module.exports = new GraphQLObjectType({
  name: 'ProjectType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    dueDate: { type: GraphQLString },
    priority: { type: GraphQLInt },
    client: { type: GraphQLString },
    owner: {
      type: require('./user_type'),
      resolve(parentValue, args) {
        return User.findById(parentValue.ownerID);
      }
    }
  })
});
