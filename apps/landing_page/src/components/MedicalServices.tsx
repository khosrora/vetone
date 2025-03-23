"use client";

import { category, categoryType } from "@/lib/constants/constants";
import { IconNurse } from "@tabler/icons-react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function MedicalServices() {
  return (
    <div className="pb-4">
      <Swiper
        spaceBetween={36}
        slidesPerView={1.4}
        breakpoints={{
          320: { slidesPerView: 3.2, spaceBetween: 8 },
          600: { slidesPerView: 3.5, spaceBetween: 12 },
          900: { slidesPerView: 5, spaceBetween: 32},
        }}
      >
        {category.map(
          (item: categoryType) => (
            <SwiperSlide key={item.id}>
              <div className="text-center space-y-4">
              <div className="flex justify-center items-center bg-green_vetone max-h-24 md:min-h-32 lg:min-h-56 rounded-md">
               <p className="">{item.icon}</p>  
              </div>
              <p className="text-base lg:text-xl font-bold">{item.title}</p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default MedicalServices;
