import { BuildingStorefrontIcon as StoreIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import * as RadioGroup from '@radix-ui/react-radio-group';

type AvailableItemTypes = '' | 'product' | 'place';

type SelectionStepProps = {
  value: string;
  onChange: (value: AvailableItemTypes) => void;
};

const SelectionStep = ({ value, onChange }: SelectionStepProps) => {
  return (
    <form className="px-5">
      <RadioGroup.Root className="flex flex-col space-y-3" value={value} onValueChange={onChange}>
        <label
          htmlFor="product"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dark-900 p-4 hover:bg-primary-500 hover:bg-opacity-10 [&:has([data-state=checked])]:border-primary-500"
        >
          <RadioGroup.Item value="product" id="product" className="sr-only" />
          <ShoppingBagIcon className="h-8 w-8 text-white" />
          <p className="text-lg font-semibold text-white">Product</p>
        </label>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-dark-800" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-darken-900 px-2 text-xs uppercase text-gray-800">Or</span>
          </div>
        </div>
        <label
          htmlFor="place"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dark-900 p-4 hover:bg-primary-500 hover:bg-opacity-10 [&:has([data-state=checked])]:border-primary-500"
        >
          <RadioGroup.Item value="place" id="place" className="sr-only" />
          <StoreIcon className="h-8 w-8 text-white" />
          <p className="text-lg font-semibold text-white">Place</p>
        </label>
      </RadioGroup.Root>
    </form>
  );
};

export default SelectionStep;
