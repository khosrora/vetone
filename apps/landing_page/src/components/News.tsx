"use client";
import { IconChevronLeft , IconClipboardTextFilled } from "@tabler/icons-react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetch/fetch_axios";
import Moment from "./Moment";
import { blogCardType } from "@/lib/types/BlogsTypes";
import Datanull from "@/lib/Datanull";
import { Loader } from "@repo/ui/loader";

function News() {
  const { data: news, isLoading } = useSWR([`/blog/blogs`], fetcher);

  if (isLoading) {
    return (
    <Loader/>
    );
  }
  // نمایش پیام هنگام بارگذاری
  if (!news || !news.results || news.results.length === 0)
    return <Datanull/>
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
        {news.results.map((item: blogCardType) => (
          <SwiperSlide key={item.id}>
            <Link href={"/blogs"} className="card bg-white">
              <figure>
                <img src={item.image.image} alt={item.image_alt} />
              </figure>
              <div className="card-body p-4 space-y-2">
                <h2 className="card-title text-sm md:text-base font-bold truncate">{item.title}</h2>
                <p className="text-xs lg:text-sm truncate">{item.short_desc}</p>
              </div>
              <div className="flex justify-between items-center pb-4 px-4 md:p-4 text-[10px]">
                <Moment time={item.created_at} />
                <div className="flex justify-end items-center gap-x-2">
                  <small className="text-blue-500 text-[10px] md:text-sm">
                 مطالعه بیشتر
                  </small>
                  <IconChevronLeft className="text-blue-500 hidden md:block" />
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
