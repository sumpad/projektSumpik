const { gql } = require('apollo-server');

const typeDefs = gql`
type Prilet {
  id: ID!
  city: String
  time: String
}

type Odlet {
  id: ID!
  city: String
  time: String
}
`;
const QueryResolvers = gql`
type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}
`;

module.exports = QueryResolvers;
module.exports = typeDefs;

