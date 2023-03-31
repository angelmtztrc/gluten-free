import { Navbar } from '@/molecules';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="min-h-screen scroll-smooth bg-darken-900 px-4 pb-32">
      {children}
      <Navbar />
    </div>
  );
};

export default DefaultLayout;
