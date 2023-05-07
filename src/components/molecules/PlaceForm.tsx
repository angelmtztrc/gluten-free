import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { PlaceFormProps } from 'src/hooks/usePlaceForm';

import { Button, GlutenKindSelector, Input } from '@/atoms';
import { usePlaceForm } from '@/hooks';
import { IUser } from '@/interfaces/user.interface';
import { PlacesService } from '@/services';
import { useDialogStore, useUserStore } from '@/store';

const PlaceForm = () => {
  const user = useUserStore(state => state.user) as IUser;
  const [setIsDialogOpen, setDialogTitleAndDescription] = useDialogStore(state => [
    state.setIsOpen,
    state.setTitleAndDescription
  ]);

  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit,
    control
  } = usePlaceForm();

  const mutation = useMutation({
    mutationFn: (payload: PlaceFormProps) => PlacesService.create({ ...payload, userId: user.uid }),
    onSuccess: () => {
      toast.success('Place created successfully.');
    },
    onError: () => {
      toast.error('Something went wrong creating the place, try again.');
    }
  });

  useEffect(() => {
    setDialogTitleAndDescription(
      'Place information',
      'Please add the information about the place you want to register.'
    );
  }, []);

  const handleSubmit = onSubmit(async values => {
    await mutation.mutateAsync({ ...values });
    setIsDialogOpen(false);
  });

  return (
    <form className="space-y-4">
      <Input
        id="name"
        label="Name"
        type="text"
        placeholder="Texas Food"
        error={errors.name?.message}
        {...register('name')}
      />
      {/* TODO: MAKE DESCRIPTION A TEXTAREA */}
      <Input
        id="description"
        label="description"
        type="text"
        placeholder="Lorem ipsum dolor sit amet."
        error={errors.description?.message}
        {...register('description')}
      />
      <GlutenKindSelector control={control} error={errors.kind?.message} />
      {/* ADDRESS? */}
      {/* TODO: PICTURE */}
      <div className="w-full">
        <Button
          intent="primary"
          className="w-full"
          onClick={handleSubmit}
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? 'Loading...' : 'Create'}
        </Button>
      </div>
    </form>
  );
};

export default PlaceForm;
