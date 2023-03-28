import { ComponentPropsWithoutRef } from 'react';

import { cva, VariantProps } from 'cva';

import { cls } from '@/libs/cls.lib';

const styles = cva(
  'transition-colors ease-in duration-200 text-white uppercase font-bold text-sm',
  {
    variants: {
      intent: {
        primary: ['bg-primary-500', 'hover:bg-primary-600'],
        secondary: ['bg-transparent', 'hover:bg-primary-500 hover:bg-opacity-10']
      },
      rounded: {
        normal: 'rounded-lg',
        full: 'rounded-full'
      },
      size: {
        normal: 'px-4 py-2',
        lg: 'px-6 py-3'
      }
    },
    defaultVariants: {
      intent: 'secondary',
      rounded: 'normal',
      size: 'normal'
    }
  }
);

type StylesProps = VariantProps<typeof styles>;

interface ButtonProps extends ComponentPropsWithoutRef<'button'>, StylesProps {
  children: React.ReactNode;
}

const Button = ({ intent, size, rounded, className, children, ...rest }: ButtonProps) => {
  return (
    <button type="button" className={cls(styles({ intent, size, rounded, className }))} {...rest}>
      {children}
    </button>
  );
};

export default Button;
