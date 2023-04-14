import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { KIND } from '@/enums/kind.enum';
import { PlaceItem } from '@/molecules';

const PlaceSlider = () => {
  return (
    <section className="mt-7">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-bold text-white">Places</h2>
        <Link href="/places" className="text-sm text-secondary-500 hover:underline">
          See More
        </Link>
      </div>
      <Swiper className="mt-3" slidesPerView={2} spaceBetween={12}>
        <SwiperSlide>
          <PlaceItem
            name="Mostachos"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis magni."
            kind={KIND.FREE}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PlaceItem
            name="Mostachos"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis magni."
            kind={KIND.FREE}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PlaceItem
            name="Mostachos"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis magni."
            kind={KIND.FREE}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PlaceItem
            name="Mostachos"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis magni."
            kind={KIND.FREE}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PlaceSlider;
