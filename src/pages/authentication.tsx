import Link from 'next/link';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button, Input } from '@/atoms';
import { useAuthForm } from '@/hooks';
import { AuthenticationService } from '@/services';

const AuthenticatePage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit
  } = useAuthForm();

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      AuthenticationService.authenticate(email as string, password as string),
    onSuccess: () => {
      toast.success('You logged in successfully.');
    },
    onError: () => {
      toast.error('Something went wrong trying to sign in, try later.');
    }
  });

  const handleSubmit = onSubmit(async values => {
    await mutation.mutateAsync({ email: values.email, password: values.password });
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-darken-900 px-4">
      <form className="w-full rounded-xl border border-dark-900 p-6">
        <div className="flex flex-col space-y-4">
          <div className="mb-4 flex flex-col items-center justify-center">
            <h1 className="mt-4 text-center text-xl font-bold text-white">Sign In</h1>
            <p className="mt-2 w-3/5 text-center text-gray-900">
              Welcome back you&apos;ve <br /> been missed!
            </p>
          </div>
          <Input
            id="email"
            type="text"
            placeholder="placeholder@email.com"
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            id="password"
            type="password"
            placeholder="**********"
            error={errors.password?.message}
            {...register('password')}
          />

          <Button intent="primary" size="lg" onClick={handleSubmit}>
            Sign In
          </Button>
          <p className="text-greyish-900">
            New here?{' '}
            <Link href="/register" className="text-primary-400">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthenticatePage;
