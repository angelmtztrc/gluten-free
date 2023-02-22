import { FaceFrownIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

import { AppBar } from '@/atoms';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-darken-900">
      <AppBar />
      <div className="mt-6">
        <section>
          <div className="flex items-baseline justify-between px-4">
            <h2 className="text-xl font-bold text-white">Products</h2>
            <p className="text-sm text-secondary-500">See More</p>
          </div>
          <ul className="mt-3 grid w-full grid-cols-2 gap-3 px-4">
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
          <div className="flex items-baseline justify-between px-4">
            <h2 className="text-xl font-bold text-white">Places</h2>
            <p className="text-sm text-secondary-500">See More</p>
          </div>
          <ul className="mt-3 grid w-full grid-cols-2 gap-3 px-4">
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
    </div>
  );
};

export default HomePage;
