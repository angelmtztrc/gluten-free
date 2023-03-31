import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { onAuthStateChanged } from 'firebase/auth';

import { PUBLIC_ROUTES } from '@/constants/routes.constants';
import { authentication } from '@/libs/firebase.lib';

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(authentication, user => {
      const isAuthenticated = Boolean(user?.uid);
      if (!isAuthenticated && !PUBLIC_ROUTES.includes(router.pathname))
        router.push('/authentication');
      setIsLoading(false);
    });
  }, [router]);

  // TODO: BETTER LOADING
  if (isLoading) return <p>is loading...</p>;

  return <div>{children}</div>;
};

export default AuthGuard;
