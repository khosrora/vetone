"use client";

import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function VeterinarianSlider() {
  return (
    <div className="pb-4">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          320: { slidesPerView: 3.5, spaceBetween: 8 },
          600: { slidesPerView: 6.5, spaceBetween: 12 },
          900: { slidesPerView: 8.5, spaceBetween: 16 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (item: number) => (
            <SwiperSlide key={item}>
              <Link
                href={`/`}
                className="flex flex-col items-center rounded-md gap-y-2"
              >
                <img
                  src="https://imageserver.petsbest.com/marketing/blog/increased-vet-demand.jpg"
                  className="rounded-md"
                />
                <p className="">دکتر نوری</p>
              </Link>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default VeterinarianSlider;
