"use client";

import "swiper/css";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SwipperController from "./SwipperController";

function UserComments() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="mr-2 p-4 lg:bg-white ">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 5 },
          600: { slidesPerView: 2, spaceBetween: 4 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item: number) => (
          <SwiperSlide key={item}>
            <div className="flex flex-col bg-white rounded-md p-4 gap-y-4 lg:bg-[#F6FAF6]">
              <div className="flex justify-start items-center rounded-md gap-x-2">
                <img
                  src="https://avatar.iran.liara.run/public"
                  className="w-12 h-12 rounded-full"
                />
                <p className="font-light">دکتر نوری</p>
              </div>
              <p className="text-[10px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden lg:flex justify-center items-center mt-12">
        <SwipperController
          next={() => swiperRef.current?.slideNext()}
          prev={() => swiperRef.current?.slidePrev()}
        />
      </div>
    </div>
  );
}

export default UserComments;
