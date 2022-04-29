import { Query, Resolver } from 'type-graphql';

import extender from '~/helpers/extender';

// sub resolvers
import createMessage from './createMessage';
import deleteMessage from './deleteMessage';
import getMessages from './getMessages';

@Resolver()
export default class MessageResolver extends extender(createMessage, getMessages, deleteMessage) {
  @Query((_returns) => String)
  hello() {
    return 'Hello World';
  }
}
