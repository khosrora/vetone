"use client";

import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function News() {
  return (
    <div className="mr-2 pb-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 5 },
          600: { slidesPerView: 2.2, spaceBetween: 4 },
          900: { slidesPerView: 5, spaceBetween: 4 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
          <SwiperSlide key={item}>
            <Link href={"/"} className="card bg-white">
              <figure>
                <img
                  src="https://images.kojaro.com/2019/4/09eab0ba-ce8c-49ef-8d6b-0d24f3296da2.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title">راه درمانی با جراحی</h2>
                <p className="text-[12px]">
                  به عنوان فردی که برای اولین بار از وت وان
                </p>
              </div>
              <div className="flex justify-between items-center p-2 text-[12px]">
                <small>28 / 11 / 1403</small>
                <div className="flex justify-end items-center gap-x-2">
                  <small className="text-blue-500"> بیشتر بخوانید </small>
                  <IconChevronLeft className="text-blue-500" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default News;
