import { Query, Resolver } from 'type-graphql';

import extender from '~/helpers/extender';

// sub resolvers
import createPost from './createPost';
import deletePost from './deletePost';
import getPosts from './getPosts';
import reactPost from './reactPost';
import updatePost from './updatePost';

@Resolver()
export default class PostResolver extends extender(
  createPost,
  updatePost,
  getPosts,
  deletePost,
  reactPost,
) {
  @Query((_returns) => String)
  hello() {
    return 'Hello World';
  }
}