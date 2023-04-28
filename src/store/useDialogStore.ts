import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DialogStoreProps {
  title: string;
  description?: string;
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
  setTitleAndDescription: (title: string, description?: string) => void;
}

const useDialogStore = create<DialogStoreProps>()(
  devtools(
    set => ({
      title: 'Add an item',
      description: 'Please select the type of entity you want to create.',
      isOpen: false,
      setIsOpen: data => set(() => ({ isOpen: data })),
      setTitleAndDescription: (title, description) =>
        set(() => ({
          title,
          description
        }))
    }),
    { name: 'dialog-storage' }
  )
);

export default useDialogStore;
