import { Query, Resolver } from 'type-graphql';

import extender from '~/helpers/extender';

// sub resolvers
import changePassword from './changePassword';
import forgotPassword from './forgotPassword';
import login from './login';
import loginFacebook from './loginFacebook';
import loginGoogle from './loginGoogle';
import logout from './logout';
import register from './register';

@Resolver()
export default class UserResolver extends extender(
  register,
  login,
  loginFacebook,
  loginGoogle,
  logout,
  changePassword,
  forgotPassword,
) {
  @Query((_returns) => String)
  hello() {
    return 'Hello World';
  }
}
