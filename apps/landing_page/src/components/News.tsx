"use client";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { base_api } from "@/lib/fetch/base_api";
import { blogCardType } from "@/lib/types/BlogsTypes";
async function getInitialVetData(page: number = 1) {
  const res = await fetch(`${base_api}/blog/latest-blogs-list`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function News() {
  const initialData = await getInitialVetData(1);

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
        {initialData.map((item: blogCardType) => (
          <SwiperSlide key={item.id}>
            <Link href={"/"} className="card bg-white">
              <figure>
                <img
                  src={item.image.image}
                  alt={item.image_alt}
                />
              </figure>
              <div className="card-body p-4 space-y-2">
                <h2 className="card-title text-base font-bold">{item.title}</h2>
                <p className="text-[12px] lg:text-sm">
                  {item.short_desc}
                </p>
              </div>
              <div className="flex justify-between items-center p-4 text-[12px]">
                <small className="text-sm">28 / 11 / 1403</small>
                <div className="flex justify-end items-center gap-x-2">
                  <small className="text-blue-500 text-sm"> بیشتر بخوانید </small>
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
