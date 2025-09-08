"use client";

import { fetcher } from "@/lib/fetch/fetch_axios";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import Loader from "./Loader";

import { IconStar } from "@tabler/icons-react";

function VeterinarianSlider() {
  const { data: veterinarians, isLoading } = useSWR(
    [`/veterinary/search_veterinarian/`],
    fetcher
  );

  if (isLoading) return <Loader />;

  if (!veterinarians || veterinarians.length === 0)
    return (
      <div className="text-center py-6 text-gray-500">
        هیچ دامپزشکی یافت نشد 🐾
      </div>
    );

  return (
    <div className="pb-6">
      <h2 className="text-lg font-bold mb-4">دامپزشکان پیشنهادی</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 12 },
          900: { slidesPerView: 4, spaceBetween: 14 },
          1200: { slidesPerView: 6, spaceBetween: 16 },
        }}
      >
        {veterinarians.map((item: VeterinarianCardType) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/search_veterinarians/${item.slug}`}
              className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition hover:scale-105"
            >
              {/* تصویر */}
              <div className="w-full h-32 md:h-40 overflow-hidden">
                <img
                  src={
                    !!item.image
                      ? item.image
                      : "https://imageserver.petsbest.com/marketing/blog/increased-vet-demand.jpg"
                  }
                  alt={item.fullName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* متن */}
              <div className="p-3 flex flex-col items-start gap-1">
                <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {item.fullName}
                </p>
                {/* فیلد فیک */}
                <p className="text-xs text-gray-500">تخصص: حیوانات خانگی</p>
                {/* امتیاز فیک */}
                <div className="flex items-center gap-0.5 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar
                      key={i}
                      size={14}
                      fill={i < 4 ? "currentColor" : "none"} // امتیاز ۴/۵
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VeterinarianSlider;
