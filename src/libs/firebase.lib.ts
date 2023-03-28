import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyArhxPNEFGk0O8lW3hCZw27iUcrIm3RxVc',
  authDomain: 'glutenfree-9ba76.firebaseapp.com',
  projectId: 'glutenfree-9ba76',
  storageBucket: 'glutenfree-9ba76.appspot.com',
  messagingSenderId: '419667914890',
  appId: '1:419667914890:web:814f96038982329a227d73'
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID
};

let app;
if (getApps().length === 0) {
  app = initializeApp(config);
} else {
  app = getApp();
}

export const authentication = getAuth(app);
