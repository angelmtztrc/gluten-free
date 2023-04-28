import * as RDialog from '@radix-ui/react-dialog';

type DialogProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleChange: (value: boolean) => void;
};

const Dialog = ({ title, description, children, isOpen, handleChange }: DialogProps) => {
  return (
    <RDialog.Root open={isOpen} onOpenChange={handleChange}>
      <RDialog.Portal>
        <RDialog.Overlay className="fixed inset-0 z-20 bg-darken-900 opacity-80" />
        <RDialog.Content className="fixed top-1/2 left-1/2 z-30 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl border border-dark-800 bg-darken-900 p-5 ">
          <RDialog.Title className="text-lg font-bold capitalize text-white">{title}</RDialog.Title>
          {description && (
            <RDialog.Description className="mt-1 text-gray-900">{description}</RDialog.Description>
          )}
          <div className="mt-4">{children}</div>
        </RDialog.Content>
      </RDialog.Portal>
    </RDialog.Root>
  );
};

export default Dialog;
