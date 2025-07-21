"use client";

import { fetcher } from "@/lib/fetch/fetch_axios";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import Loader from "./Loader";
function VeterinarianSlider() {
  const { data: veterinarians, isLoading } = useSWR(
    [`/veterinary/search_veterinarian/`],
    fetcher
  );

  if (isLoading) return <Loader />;
  console.log(veterinarians)
  return (
    <div className="pb-4">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          320: { slidesPerView: 3.5, spaceBetween: 8 },
          600: { slidesPerView: 6.5, spaceBetween: 12 },
          900: { slidesPerView: 8.5, spaceBetween: 16 },
        }}
      >
        {veterinarians.map((item: VeterinarianCardType) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/search_veterinarians/${item.slug}`}
              className="flex flex-col items-center rounded-md gap-y-2"
            >
              <img
                src={
                  !!item.image
                    ? item.image
                    : "https://imageserver.petsbest.com/marketing/blog/increased-vet-demand.jpg"
                }
                className="rounded-md"
              />
              <p className="">{item.fullName}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VeterinarianSlider;
