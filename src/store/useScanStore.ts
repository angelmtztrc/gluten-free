import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ScanStoreProps {
  data: string | null;
  setData: (value: string | null) => void;
}

const useScanStore = create<ScanStoreProps>()(
  devtools(
    set => ({
      data: null,
      setData: data => set(() => ({ data }))
    }),
    { name: 'scan-storage' }
  )
);

export default useScanStore;
