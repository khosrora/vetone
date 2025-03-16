"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function Imageslider() {
  return (
    <div className="pb-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          320: { slidesPerView: 1.8, spaceBetween: 8 },
          600: { slidesPerView: 2.2, spaceBetween: 12 },
          900: { slidesPerView: 4, spaceBetween: 16 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
          <SwiperSlide key={item}>
            <div className="">
              <figure>
                <img
                  src="https://images.kojaro.com/2019/4/09eab0ba-ce8c-49ef-8d6b-0d24f3296da2.jpg"
                  alt="Shoes"
                  className="rounded-md"
                />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Imageslider;
