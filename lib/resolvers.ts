import { QueryResolvers } from './type-defs.graphqls';
import { ResolverContext } from './with-apollo';

const Query: Required<QueryResolvers> = {
  viewer(_parent, _args, _context, _info) {
    return { id: String(1), city: 'John Smith', time: 'cached' }
  },
}
export default { Query };
