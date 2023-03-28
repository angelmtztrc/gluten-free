import { ComponentPropsWithRef, forwardRef } from 'react';

import { cva, VariantProps } from 'cva';

import { cls } from '@/libs/cls.lib';

const styles = cva(
  'w-full rounded-lg bg-dark-900 px-4 py-2 text-gray-200 outline-none placeholder:text-gray-900'
);

type StylesProps = VariantProps<typeof styles>;

interface InputProps extends ComponentPropsWithRef<'input'>, StylesProps {
  id: string;
  className?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, className, ...rest }, ref) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} ref={ref} className={cls(styles({ className }))} {...rest} />
    </div>
  );
});

export default Input;
