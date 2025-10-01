import BtnAddRequest from "@/components/BtnAddRequest";

import { base_api } from "@/lib/fetch/base_api";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { Img } from "@repo/ui/img";
import {
  IconMapPin,
  IconStarFilled,
  IconThumbUp,
  IconMedicalCross,
  IconShare,
  IconBookmark,
  IconPhone,
  IconClock,
  IconHeart,
} from "@tabler/icons-react";
async function getInitialVetData(slug: string) {
  const res = await fetch(`${base_api}/veterinary/${slug}`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
import FavoriteButton from "@/components/ButtonFavorite";
import Share from "@/components/Share";
import { LINK_LANDINGPAGE } from "@repo/lib/links";
// --- Placeholder data for the new Info Card ---

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data: VeterinarianCardType = await getInitialVetData(slug);
  
  return (
    <div className=" min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* 1. HEADER SECTION with GRADIENT */}
        <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden mb-8 shadow-lg">
          {/* Background Image */}
          <Img
            src="/images/matab.svg"
            alt="Veterinary Clinic Background"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>{" "}
          {/* Adjust opacity (e.g., bg-black/50, bg-black/70) as needed */}
          <div className="absolute bottom-0 top-0 my-auto left-0 right-0 py-6 px-10 flex items-center gap-6">
            <div className="avatar">
              <div className="w-32 h-32 md:w-32 md:h-32 rounded-full ring-4 ring-white shadow-xl">
                <img src={data.image} alt={data.fullName} />
              </div>
            </div>
            <div>
              <h1 className="text-white text-2xl md:text-4xl font-bold">
                دکتر {data.fullName}
              </h1>
              <p className="text-white/90 mt-4 text-sm md:text-base">
                {data.experience} سال سابقه‌ی کاری موفق
              </p>
            </div>
          </div>
        </div>
        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT & MIDDLE COLUMNS (No Change) */}
          <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-8">
            {/* VET INFO CARD */}
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <BtnAddRequest isLarge={true} idVet={data.id} />
                  <h2 className="font-bold text-lg text-gray-800">
                    دکتر {data.fullName}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    متخصص داخلی حیوانات
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <Share
                    link={`${LINK_LANDINGPAGE}search_veterinarians/${data.slug}`}
                  />
                  <FavoriteButton
                    vetId={data.id}
                    initialFavorited={Boolean((data as any).is_favorited)}
                  />
                </div>
              </div>
              <hr />
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <IconMedicalCross size={20} className="text-gray-400" />
                  <span>
                    کد نظام پزشکی:{" "}
                    <span className="font-semibold text-gray-900">
                      {data.medical_license}
                    </span>
                  </span>
                </div>
                {/*
                <div className="flex items-center gap-3">
                  <IconStarFilled size={20} className="text-yellow-500" />
                  <span className="font-semibold text-gray-900">
                    {data.rate} از ۵
                  </span>
                  <span className="text-gray-400">
                    ({Math.floor(Math.random() * 100 + 50)} نظر)
                  </span>
                </div>
                */}
                <div className="flex items-center gap-3">
                  <IconThumbUp size={20} className="text-green-500" />
                  <span className="font-semibold text-gray-900">
                    {data.surgery}+ نوبت موفق
                  </span>
                </div>
              </div>
            </div>

            {/* BIOGRAPHY CARD */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">بیوگرافی</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {data.bio === null ? "دامپزشک مورد نظر توضیحی درباره خود ننوشته است" : data.bio }
              </p>
            </div>
          </div>

          {/* 2. RIGHT COLUMN - ADDRESS & INFO (Completely New) */}
          <div className="lg:col-span-12 xl:col-span-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                آدرس و اطلاعات مطب
              </h3>

              {/* Static Map Image Placeholder */}
              <div className="mb-4 rounded-lg overflow-hidden w-full">
                <Img
                  width={1000}
                  height={500}
                  src="/images/map.jpeg"
                  alt="موقعیت مکانی مطب روی نقشه"
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Address & Contact Details */}
              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex items-start gap-3">
                  <IconMapPin
                    size={20}
                    className="text-gray-400 mt-0.5 flex-shrink-0"
                  />
                  {!!data.province?.name && !!data.city?.name && (
                    <span>
                      {data?.province.name}, {data?.city.name}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone size={20} className="text-gray-400" />
                  <span className="font-semibold" dir="ltr">
                    {data.phone}
                  </span>
                </div>
              </div>

              <hr className="my-5" />

              {/* Working Hours */}

              {/* CTA Button at the bottom */}
              <div className="mt-auto pt-6">
                <button className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg focus:ring-4 focus:ring-green-300">
                  ارسال درخواست نوبت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
