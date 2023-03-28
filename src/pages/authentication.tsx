import { Button, Input } from '@/atoms';

const AuthenticatePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-darken-900 px-4">
      <form className="w-full rounded-xl border border-dark-900 p-6">
        <div className="flex flex-col space-y-4">
          <div className="mb-4 flex flex-col items-center justify-center">
            <h1 className="mt-4 text-center text-xl font-bold text-white">Sign In</h1>
            <p className="mt-2 w-3/5 text-center text-gray-900">
              Welcome back you&apos;ve been missed!
            </p>
          </div>
          <Input id="email" type="text" placeholder="placeholder@email.com" />
          <Input id="email" type="password" placeholder="**********" />

          <Button intent="primary" size="lg">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthenticatePage;
