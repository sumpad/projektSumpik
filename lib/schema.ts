import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers.js';
import typeDefs from './type-defs.graphqls.js';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
