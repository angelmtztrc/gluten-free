import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DialogStoreProps {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}

const useDialogStore = create<DialogStoreProps>()(
  devtools(
    set => ({
      isOpen: false,
      setIsOpen: data => set(() => ({ isOpen: data }))
    }),
    { name: 'dialog-storage' }
  )
);

export default useDialogStore;
