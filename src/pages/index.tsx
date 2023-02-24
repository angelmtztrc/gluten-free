import { FaceFrownIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

import { DefaultLayout } from '@/layouts';

const HomePage = () => {
  return (
    <DefaultLayout>
      <section className="pt-4">
        <div className="rounded-xl bg-dark-900 p-4">
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
        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold text-white">Products</h2>
            <p className="text-sm text-secondary-500">See More</p>
          </div>
          <ul className="mt-3 grid w-full grid-cols-2 gap-3">
            <li className="rounded-xl bg-dark-900 p-3">
              <figure className="aspect-video rounded-lg bg-secondary-600" />
              <div className="mt-3">
                <h3 className="text-lg font-bold text-white">Bananas</h3>
                <p className="text-xs text-gray-900">7502236566181</p>
              </div>
              <div className="mt-3 flex w-full items-center justify-center rounded-lg bg-secondary-500 py-2">
                <FaceSmileIcon className="h-6 w-6 text-white" />
              </div>
            </li>
            <li className="rounded-xl bg-dark-900 p-3">
              <figure className="aspect-video rounded-lg bg-secondary-600" />
              <div className="mt-3">
                <h3 className="text-lg font-bold text-white">Bananas</h3>
                <p className="text-xs text-gray-900">7502236566181</p>
              </div>
              <div className="mt-3 flex w-full items-center justify-center rounded-lg bg-rose-600 py-2">
                <FaceFrownIcon className="h-6 w-6 text-white" />
              </div>
            </li>
          </ul>
        </section>
        <section className="mt-7">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold text-white">Places</h2>
            <p className="text-sm text-secondary-500">See More</p>
          </div>
          <ul className="mt-3 grid w-full grid-cols-2 gap-3">
            <li className="rounded-xl bg-dark-900 p-3">
              <figure className="aspect-video rounded-lg bg-secondary-600" />
              <div className="mt-3">
                <h3 className="text-lg font-bold text-white">Bananas</h3>
                <p className="text-xs text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis magni.
                </p>
              </div>
              <div className="mt-3 flex w-full items-center justify-center rounded-lg bg-secondary-500 py-2">
                <FaceSmileIcon className="h-6 w-6 text-white" />
              </div>
            </li>
            <li className="rounded-xl bg-dark-900 p-3">
              <figure className="aspect-video rounded-lg bg-secondary-600" />
              <div className="mt-3">
                <h3 className="text-lg font-bold text-white">Bananas</h3>
                <p className="text-xs text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis magni.
                </p>
              </div>
              <div className="mt-3 flex w-full items-center justify-center rounded-lg bg-rose-600 py-2">
                <FaceFrownIcon className="h-6 w-6 text-white" />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
