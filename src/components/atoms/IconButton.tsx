import { ComponentPropsWithRef, ReactNode } from 'react';

import { cva, VariantProps } from 'cva';

import { cls } from '@/libs/cls.lib';

const styles = cva('transition-colors ease-in duration-200 text-white', {
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
      normal: 'p-2',
      lg: 'p-4'
    }
  },
  defaultVariants: {
    intent: 'secondary',
    rounded: 'normal',
    size: 'normal'
  }
});

type StylesProps = VariantProps<typeof styles>;

interface IconButtonProps extends ComponentPropsWithRef<'button'>, StylesProps {
  children: ReactNode;
}

const IconButton = ({ intent, size, rounded, className, children }: IconButtonProps) => {
  return (
    <button type="button" className={cls(styles({ intent, size, rounded, className }))}>
      {children}
    </button>
  );
};

export default IconButton;
