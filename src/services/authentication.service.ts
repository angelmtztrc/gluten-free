import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { IUser } from '@/interfaces/user.interface';
import { authentication } from '@/libs/firebase.lib';

class AuthenticationService {
  async authenticate(email: string, password: string): Promise<IUser> {
    const account = await signInWithEmailAndPassword(authentication, email, password);
    return account.user as IUser;
  }

  async register(email: string, password: string): Promise<IUser> {
    const account = await createUserWithEmailAndPassword(authentication, email, password);
    return account.user as IUser;
  }
}

const service = new AuthenticationService();

export default service;
