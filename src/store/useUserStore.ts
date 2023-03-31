import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IUser } from '@/interfaces/user.interface';

interface UserStoreProps {
  user: IUser | null;
  setActualUser: (data: IUser | null) => void;
}

const useUserStore = create<UserStoreProps>()(
  devtools(
    set => ({
      user: null,
      setActualUser: data => set(() => ({ user: data }))
    }),
    { name: 'user-storage' }
  )
);

export default useUserStore;
