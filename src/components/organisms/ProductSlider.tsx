import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { KIND } from '@/enums/kind.enum';
import { ProductItem } from '@/molecules';

const ProductSlider = () => {
  return (
    <section>
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-bold text-white">Products</h2>
        <Link href="/products" className="text-sm text-secondary-500 hover:underline">
          See More
        </Link>
      </div>
      <Swiper className="mt-3" slidesPerView={2} spaceBetween={12}>
        <SwiperSlide>
          <ProductItem name="Fuzetea 1" code="7501055317875" kind={KIND.FREE} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem name="Fuzetea 2" code="7501055317875" kind={KIND.FREE} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem name="Fuzetea 3" code="7501055317875" kind={KIND.FREE} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem name="Fuzetea 4" code="7501055317875" kind={KIND.FREE} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductSlider;
