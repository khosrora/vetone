"use client";

import { IconX } from "@tabler/icons-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function Tags() {
  return (
    <div className="mr-4 pb-4 lg:bg-white">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          310: { slidesPerView: 2.7, spaceBetween: 4 },
          600: { slidesPerView: 2, spaceBetween: 4 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item: number) => (
          <SwiperSlide key={item}>
            <div className="badge badge-outline border-green_vetone bg-green_vetone/10 text-green_vetone p-4 gap-x-2 text-[10px] md:text-sm">
              دکتر رضایی
              <IconX size={18} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Tags;
