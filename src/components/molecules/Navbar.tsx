import {
  BuildingStorefrontIcon as StoreIcon,
  HomeIcon,
  QrCodeIcon,
  ShoppingBagIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full px-4 py-2">
      <nav className="flex h-full w-full items-center justify-around rounded-2xl border border-dark-800 bg-dark-900 px-4 py-2">
        <button type="button">
          <HomeIcon className="h-6 w-6 text-white" />
        </button>
        <div>
          <ShoppingBagIcon className="h-6 w-6 text-white" />
        </div>
        <div className="rounded-full bg-primary-500 p-4">
          <QrCodeIcon className="h-6 w-6 text-white" />
        </div>
        <div>
          <StoreIcon className="h-6 w-6 text-white" />
        </div>
        <div>
          <UserIcon className="h-6 w-6 text-white" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
