import Link from 'next/link';

import {
  BuildingStorefrontIcon as StoreIcon,
  HomeIcon,
  QrCodeIcon,
  ShoppingBagIcon,
  UserIcon
} from '@heroicons/react/24/outline';

import { IconButton } from '@/atoms';
import { useDialogStore } from '@/store';

const Navbar = () => {
  const setIsDialogOpen = useDialogStore(state => state.setIsOpen);

  const handleScanButton = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="fixed bottom-0 left-0 z-10 w-full px-4 py-2">
      <nav className="flex h-full w-full items-center justify-around rounded-2xl border border-dark-800 bg-darken-900 px-4 py-2 drop-shadow">
        <Link href="/">
          <IconButton>
            <HomeIcon className="h-6 w-6 text-white" />
          </IconButton>
        </Link>
        <Link href="/products">
          <IconButton>
            <ShoppingBagIcon className="h-6 w-6 text-white" />
          </IconButton>
        </Link>

        <IconButton intent="primary" rounded="full" size="lg" onClick={handleScanButton}>
          <QrCodeIcon className="h-6 w-6 text-white" />
        </IconButton>
        <Link href="/places">
          <IconButton>
            <StoreIcon className="h-6 w-6 text-white" />
          </IconButton>
        </Link>
        <Link href="/account">
          <IconButton>
            <UserIcon className="h-6 w-6 text-white" />
          </IconButton>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
