import { useEffect } from 'react';

import { Button, GlutenKindSelector, Input } from '@/atoms';
import { usePlaceForm } from '@/hooks';
import { useDialogStore } from '@/store';

const PlaceForm = () => {
  const setDialogTitleAndDescription = useDialogStore(state => state.setTitleAndDescription);
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit,
    control
  } = usePlaceForm();

  useEffect(() => {
    setDialogTitleAndDescription(
      'Place information',
      'Please add the information about the place you want to register.'
    );
  }, []);

  const handleSubmit = onSubmit(async values => {
    console.log(values);
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
        <Button intent="primary" className="w-full" onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </form>
  );
};

export default PlaceForm;
