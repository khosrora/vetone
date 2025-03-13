"use client";

import "swiper/css";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SwipperController from "./SwipperController";

function UserComments() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="mr-4 lg:mr-4 lg:px-2 lg:py-6">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1.8, spaceBetween: 8 },
          600: { slidesPerView: 3, spaceBetween: 12 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item: number) => (
          <SwiperSlide key={item}>
            <div className="flex flex-col bg-white rounded-md p-4 gap-y-4 bg-gray-100">
              <div className="flex justify-start items-center rounded-md gap-x-2">
                <img
                  src="https://avatar.iran.liara.run/public"
                  className="w-12 h-12 rounded-full"
                />
                <p className="font-bold text-base lg:text-lg">دکتر نوری</p>
              </div>
              <p className="font-light leading-6 lg:leading-8 text-xs lg:text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden lg:flex justify-center items-center mt-6">
        <SwipperController
          next={() => swiperRef.current?.slideNext()}
          prev={() => swiperRef.current?.slidePrev()}
        />
      </div>
    </div>
  );
}

export default UserComments;
