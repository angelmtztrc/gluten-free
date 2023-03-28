/* eslint-disable class-methods-use-this */
import { signInWithEmailAndPassword, User } from 'firebase/auth';

import { authentication } from '@/libs/firebase.lib';

class AuthenticationService {
  async authenticate(email: string, password: string): Promise<User> {
    return signInWithEmailAndPassword(authentication, email, password)
      .then(credentials => credentials.user)
      .catch(error => error.message);
  }
}

const service = new AuthenticationService();

export default service;
