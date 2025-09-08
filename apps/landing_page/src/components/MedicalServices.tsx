"use client";

import { category, categoryType } from "@/lib/constants/constants";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function MedicalServices() {
  return (
    <div className="pb-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={2.2}
        breakpoints={{
          320: { slidesPerView: 2.3, spaceBetween: 12 },
          640: { slidesPerView: 3.3, spaceBetween: 16 },
          900: { slidesPerView: 4.5, spaceBetween: 20 },
          1200: { slidesPerView: 6, spaceBetween: 24 },
        }}
      >
        {category.map((item: categoryType) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center text-center rounded-2xl bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 p-5">
              {/* آیکون داخل دایره گرادیانی */}
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-emerald-400 to-green-600 text-white shadow-lg mb-4">
                <span className="text-2xl md:text-3xl">{item.icon}</span>
              </div>

              {/* عنوان سرویس */}
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                {item.title}
              </p>

              {/* توضیح فیک برای جذابیت بیشتر */}
              <p className="text-xs md:text-sm text-gray-500 mt-2 line-clamp-2">
                ارائه خدمات تخصصی و سریع برای حیوانات خانگی شما با بهترین
                دامپزشکان.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MedicalServices;