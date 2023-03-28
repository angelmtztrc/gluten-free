import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormProps = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z
    .string({ invalid_type_error: 'the value is not a string' })
    .email('the value is not a valid email'),
  password: z
    .string({ invalid_type_error: 'the value is not a string' })
    .min(6, 'must be 6 or more characters long')
});

const useAuthForm = () => {
  return useForm<FormProps>({
    resolver: zodResolver(schema)
  });
};

export default useAuthForm;
