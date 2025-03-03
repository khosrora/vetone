"use client";

import { IconNurse } from "@tabler/icons-react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function MedicalServices() {
  return (
    <div className="mr-2 pb-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          320: { slidesPerView: 3.5, spaceBetween: 4 },
          600: { slidesPerView: 6.5, spaceBetween: 4 },
          900: { slidesPerView: 10, spaceBetween: 4 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (item: number) => (
            <SwiperSlide key={item}>
              <div className="flex justify-center items-center bg-green_vetone min-h-32 rounded-md">
                <IconNurse size={64} color="white" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default MedicalServices;
