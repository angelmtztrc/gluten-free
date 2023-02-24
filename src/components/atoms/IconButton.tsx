import { ComponentPropsWithRef, ReactNode } from 'react';

import { cva, VariantProps } from 'cva';

const styles = cva('');

type StylesProps = VariantProps<typeof styles>;

interface IconButtonProps extends ComponentPropsWithRef<'button'>, StylesProps {
  children: ReactNode;
}

const IconButton = () => {
  return <button type="button" />;
};

export default IconButton;
