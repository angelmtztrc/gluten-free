import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { IUser } from '@/interfaces/user.interface';
import { authentication } from '@/libs/firebase.lib';

class AuthenticationService {
  async authenticate(email: string, password: string): Promise<IUser> {
    return signInWithEmailAndPassword(authentication, email, password)
      .then(credentials => credentials.user)
      .catch(error => error.message);
  }

  async register(email: string, password: string): Promise<IUser> {
    return createUserWithEmailAndPassword(authentication, email, password)
      .then(credentials => credentials.user)
      .catch(error => error.message);
  }
}

const service = new AuthenticationService();

export default service;
