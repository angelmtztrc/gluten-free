import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { onAuthStateChanged } from 'firebase/auth';
import { NextShield } from 'next-shield';

import { Loading } from '@/atoms';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/constants/routes.constants';
import { authentication } from '@/libs/firebase.lib';
import { useUserStore } from '@/store';

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const setActualUser = useUserStore(state => state.setActualUser);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(authentication, user => {
      const isAuth = Boolean(user?.uid);
      if (user)
        setActualUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email as string,
          photoURL: user.photoURL
        });
      setIsAuthenticated(isAuth);
      setIsLoading(false);
    });
  }, [router, setActualUser]);

  return (
    <NextShield
      isAuth={isAuthenticated}
      isLoading={isLoading}
      router={router}
      privateRoutes={PRIVATE_ROUTES}
      publicRoutes={PUBLIC_ROUTES}
      accessRoute="/"
      loginRoute="/authentication"
      LoadingComponent={<Loading />}
    >
      {children}
    </NextShield>
  );
};

export default AuthGuard;
