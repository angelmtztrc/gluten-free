import { ComponentPropsWithRef, forwardRef } from 'react';

import { cva, VariantProps } from 'cva';

import { cls } from '@/libs/cls.lib';

const styles = cva(
  'w-full rounded-lg bg-dark-900 px-4 border border-transparent py-2 text-gray-200 outline-none placeholder:text-gray-900'
);

type StylesProps = VariantProps<typeof styles>;

interface InputProps extends ComponentPropsWithRef<'input'>, StylesProps {
  id: string;
  className?: string;
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          ref={ref}
          className={cls(styles({ className }), error && 'border-rose-800')}
          {...rest}
        />
        {error && <p className="mt-1 text-xs text-rose-500">{error}</p>}
      </div>
    );
  }
);

export default Input;
