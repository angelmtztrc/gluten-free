import { DefaultLayout } from '@/layouts';
import { PlaceSlider, ProductSlider } from '@/organisms';

const HomePage = () => {
  return (
    <DefaultLayout>
      <section className="pt-4">
        <div className="rounded-xl border border-dark-900 p-4">
          <div className="flex items-baseline justify-between">
            <h2 className="font-bold text-white">Summary</h2>
            <p className="text-xs text-gray-900">20% of the records are Gluten-free</p>
          </div>
          <div className="mt-3 flex h-2 w-full gap-1 overflow-hidden rounded-full bg-dark-800">
            <div className="h-2 w-1/5 rounded-full bg-secondary-500" />
            <div className="h-2 w-1/2 rounded-full bg-amber-500" />
            <div className="h-2 w-[30%] rounded-full bg-rose-500" />
          </div>
          <div className="mt-3 flex items-baseline space-x-4">
            <div className="flex items-center space-x-1">
              <figure className="h-2 w-2 rounded-full bg-secondary-500" />
              <p className="text-xs text-gray-900">Gluten-free</p>
            </div>
            <div className="flex items-center space-x-1">
              <figure className="h-2 w-2 rounded-full bg-amber-500" />
              <p className="text-xs text-gray-900">May-cont gluten</p>
            </div>
            <div className="flex items-center space-x-1">
              <figure className="h-2 w-2 rounded-full bg-rose-500" />
              <p className="text-xs text-gray-900">Contains gluten</p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-6">
        <ProductSlider />
        <PlaceSlider />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
