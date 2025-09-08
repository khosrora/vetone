"use client";

import "swiper/css";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SwipperController from "./SwipperController";
import { IconQuote } from "@tabler/icons-react";
interface UserReview {
  id: number;
  name: string;
  city: string;
  comment: string;
}
const reviews: UserReview[] = [
  { id: 1, name: "زهرا سادات", city: "تهران", comment: "فرآیند رزرو وقت خیلی سریع و بدون دردسر بود. از خدمات سایت کاملاً راضی‌ام و باز هم  باز هم  باز هم  خواهم کرد." },
  { id: 3, name: "الناز عباسی", city: "مشهد", comment: "خیلی راحت تونستم بهترین کلینیک نزدیک خونمون رو پیدا کنم. ثبت نوبت هم کمتر از چند دقیقه طول کشید." },
  { id: 5, name: "سحر رضایی", city: "رشت", comment: "اولین بار بود اینترنتی وقت می‌گرفتم، خیلی بهتر از چیزی بود که فکر می‌کردم. پشتیبانی   سوالام سریع جواب داد." },
  { id: 6, name: "مهدی شریفی", city: "قم", comment: "زمان‌بندی نوبت‌ها دقیق بود، دیگه لازم نبود تو کلینیک منتظر بمونم." },
  { id: 7, name: "لیلا سلطانی", city: "کرج", comment: "خیلی راضی بودم، مخصوصاً بخش توضیحات درباره دکترها خیلی کمکم کرد تصمیم بگیرم." },
  { id: 8, name: "علیرضا فتحی", city: "اهواز", comment: "رزرو وقت ساده و سریع انجام شد، پیشنهاد می‌کنم حتماً امتحان کنید." },
  { id: 9, name: "نرگس احمدی", city: "تبریز", comment: "از دکتر و پرسنل کلینیک خیلی ممنونم، حیوانم بدون استرس معاینه شد." },
  { id: 10, name: "حسین نوروزی", city: "یزد", comment: "سایت عالیه، فقط کاش اپلیکیشن موبایل هم داشته باشید." },
];

function UserComments() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="lg:mr-4 lg:px-2 lg:py-6">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1.05, spaceBetween: 14 },
          600: { slidesPerView: 2, spaceBetween: 18 },
          900: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {reviews.map((reviews) => (
          <SwiperSlide key={reviews.id}>
            <div className="relative flex flex-col rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-md hover:shadow-xl transition hover:-translate-y-1 p-5 gap-y-4">
              {/* آیکون نقل‌قول */}
              <IconQuote
                size={28}
                className="absolute top-3 right-3 text-green-400 opacity-30"
              />

              {/* هدر کاربر */}
              <div className="flex items-center gap-x-3">
                <img
                  src="https://avatar.iran.liara.run/public"
                  className="w-12 h-12 rounded-full border border-gray-200 shadow-sm"
                  alt={reviews.name}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-sm lg:text-base text-gray-800">
                    {reviews.name}
                  </p>
                  <span className="text-xs text-gray-500">{reviews.city}</span>
                </div>
              </div>

              {/* متن نظر */}
              <p className="font-light leading-6 lg:leading-7 text-xs lg:text-sm text-gray-700 line-clamp-4 lg:line-clamp-none">
                {reviews.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* کنترل اسلایدر در دسکتاپ */}
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
