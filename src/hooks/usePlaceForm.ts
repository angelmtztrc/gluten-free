import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { KIND } from '@/enums/kind.enum';

export type PlaceFormProps = {
  name: string;
  description: string;
  kind: KIND;
};

const schema = z.object({
  name: z
    .string({ invalid_type_error: 'the value is not a string' })
    .min(1, 'the name field is required'),
  description: z
    .string({ invalid_type_error: 'the value is not a string' })
    .min(1, 'the description field is required'),
  kind: z.nativeEnum(KIND, { required_error: 'the kind field is required.' })
});

const usePlaceForm = () => {
  return useForm<PlaceFormProps>({
    resolver: zodResolver(schema)
  });
};

export default usePlaceForm;
