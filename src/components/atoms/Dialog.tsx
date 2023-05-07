import { Fragment } from 'react';

import { Dialog as RDialog, Transition } from '@headlessui/react';
// import * as RDialog from '@radix-ui/react-dialog';

type DialogProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onHidden: () => void;
};

const Dialog = ({ title, description, children, isOpen, onHidden }: DialogProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <RDialog as="div" className="relative z-10" onClose={onHidden}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <RDialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-xl border border-dark-800 bg-darken-900 p-5 text-left align-middle shadow-xl transition-all">
                <RDialog.Title as="h3" className="text-lg font-bold capitalize text-white">
                  {title}
                </RDialog.Title>
                {description && (
                  <RDialog.Description className="mt-1 text-gray-900">
                    {description}
                  </RDialog.Description>
                )}

                <div className="mt-4">{children}</div>
              </RDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </RDialog>
    </Transition>
  );
};

export default Dialog;
