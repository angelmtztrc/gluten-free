import {
  ExclamationTriangleIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  InformationCircleIcon
} from '@heroicons/react/24/solid';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Control, useController } from 'react-hook-form';
import { PlaceFormProps } from 'src/hooks/usePlaceForm';

type GlutenKindSelectorProps = {
  control: Control<PlaceFormProps, any>;
  error?: string;
};

const GlutenKindSelector = ({ control, error }: GlutenKindSelectorProps) => {
  const { field } = useController({ name: 'kind', control });

  return (
    <div>
      <RadioGroup.Root
        className="flex justify-between space-x-3"
        value={field.value}
        onValueChange={field.onChange}
        ref={field.ref}
      >
        <label
          htmlFor="product"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dark-900 p-4 hover:bg-primary-500 hover:bg-opacity-10 [&:has([data-state=checked])]:border-secondary-500"
        >
          <RadioGroup.Item value="product" id="product" className="sr-only" />
          <FaceSmileIcon className="h-8 w-8 text-secondary-500" />
        </label>
        <label
          htmlFor="place"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dark-900 p-4 hover:bg-primary-500 hover:bg-opacity-10 [&:has([data-state=checked])]:border-amber-500"
        >
          <RadioGroup.Item value="place" id="place" className="sr-only" />
          <ExclamationTriangleIcon className="h-8 w-8 text-amber-500" />
        </label>
        <label
          htmlFor="place"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dark-900 p-4 hover:bg-primary-500 hover:bg-opacity-10 [&:has([data-state=checked])]:border-rose-500"
        >
          <RadioGroup.Item value="place" id="place" className="sr-only" />
          <FaceFrownIcon className="h-8 w-8 text-rose-500" />
        </label>
      </RadioGroup.Root>
      {error ? (
        <p className="mt-2 text-xs text-rose-500">{error}</p>
      ) : (
        <p className="mt-2 flex items-center space-x-1 text-xs text-gray-900">
          <InformationCircleIcon className="h-4 w-4" />
          <span>Gluten-free, may-contain, contains, respectively.</span>
        </p>
      )}
    </div>
  );
};

export default GlutenKindSelector;
