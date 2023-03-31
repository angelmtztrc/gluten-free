import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { onAuthStateChanged } from 'firebase/auth';

import { PUBLIC_ROUTES } from '@/constants/routes.constants';
import { authentication } from '@/libs/firebase.lib';
import useUserStore from '@/store/useUserStore';

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const setActualUser = useUserStore(state => state.setActualUser);

  useEffect(() => {
    onAuthStateChanged(authentication, user => {
      const isAuthenticated = Boolean(user?.uid);
      if (user)
        setActualUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email as string,
          photoURL: user.photoURL
        });
      if (!isAuthenticated && !PUBLIC_ROUTES.includes(router.pathname))
        router.push('/authentication');
      setIsLoading(false);
    });
  }, [router, setActualUser]);

  // TODO: BETTER LOADING
  if (isLoading) return <p>is loading...</p>;

  return <div>{children}</div>;
};

export default AuthGuard;
