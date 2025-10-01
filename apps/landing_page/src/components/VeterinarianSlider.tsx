"use client";

import { fetcher } from "@/lib/fetch/fetch_axios";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import Loader from "./Loader";

import { IconMap, IconRosetteDiscountCheckFilled, IconStar } from "@tabler/icons-react";

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
              className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm  transition hover:scale-20 my-4 p-2"
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
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* متن */}
              <div className="p-3 flex flex-row items-start gap-2">
                <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {item.fullName}
                </p>
                <IconRosetteDiscountCheckFilled color="green"/>
              </div>
              <div className="px-3 text-gray-500 flex flex-row items-center align-middle gap-2 my-3">
                  <p className="inline-block text-xs">کد نظام پزشکی:</p>
                <p className="text-xs line-clamp-1 font-semibold text-black">
                  {item?.medical_license}
                </p>
              </div>
                  <div className="px-3 text-gray-500 flex flex-row items-start gap-2">
                  <IconMap size={16}/>
                <p className="text-xs line-clamp-1">
                  {item.province?.name}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VeterinarianSlider;
