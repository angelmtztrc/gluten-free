/* eslint-disable class-methods-use-this */
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

class AuthenticationService {
  async authenticate(email: string, password: string) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password)
      .then(credentials => credentials.user)
      .catch(error => error.message);
  }
}

const service = new AuthenticationService();

export default service;
