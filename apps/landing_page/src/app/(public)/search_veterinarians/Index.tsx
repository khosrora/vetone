"use client";
import ChoiceTypeRequest from "@/components/ChoiceTypeRequest";
import VetCard from "@/components/VetCard";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { IconSearchOff } from "@tabler/icons-react";
import { useState } from "react";
import useSWR from "swr";
import FilterBtns from "./FilterBtns";
import FilterItems from "./FilterItems";
import { PropsSearchParams } from "./page";

// +++ کامپوننت اسکلت برای نمایش در حالت لودینگ +++
const VetCardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 animate-pulse">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-gray-200"></div>
      <div className="space-y-3 flex-grow">
        <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
      </div>
    </div>
    <div className="h-px bg-gray-200 my-4"></div>
    <div className="h-12 bg-gray-200 rounded-xl mb-4"></div>
    <div className="h-px bg-gray-200 my-4"></div>
    <div className="flex justify-between items-center pt-2">
      <div className="h-5 bg-gray-200 rounded-md w-1/3"></div>
      <div className="h-10 bg-gray-200 rounded-lg w-1/4"></div>
    </div>
  </div>
);


function Index({
  searchParams: { fullName, province },
}: {
  searchParams: PropsSearchParams;
}) {
  const [itemId, setItemId] = useState<string>();
  const queryParams = new URLSearchParams();

  queryParams.set("fullName", typeof fullName !== "undefined" ? fullName : "");
  queryParams.set("province", typeof province !== "undefined" ? province : "");

  const { data: initialData, isLoading } = useSWR(
    [`/veterinary/search_veterinarian/?${queryParams.toString()}`],
    fetcher
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
          
          {/* ستون فیلترها (فقط در دسکتاپ) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6">
              <FilterItems />
            </div>
          </aside>

          {/* محتوای اصلی */}
          <main className="col-span-12 lg:col-span-9">
            
            {/* دکمه‌های فیلتر (فقط در موبایل) */}
            <div className="lg:hidden">
              <FilterBtns />
            </div>

            {/* عنوان نتایج */}
            <div className="mb-4 hidden lg:block">
                <h1 className="text-xl font-bold text-gray-800"> دامپزشکان</h1>
            </div>
            
            {/* شرط نمایش محتوا */}
            {isLoading ? (
              // --- حالت لودینگ با اسکلت ---
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <VetCardSkeleton key={index} />
                ))}
              </div>
            ) : initialData.length === 0 ? (
              // --- حالت عدم وجود نتیجه ---
              <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-10 mt-6 min-h-[400px]">
                  <IconSearchOff size={64} className="text-gray-300" />
                  <h3 className="text-xl font-bold text-gray-700 mt-4">نتیجه‌ای یافت نشد!</h3>
                  <p className="text-gray-500 mt-2 text-center">متاسفانه با فیلترهای انتخابی شما، نتیجه‌ای پیدا نکردیم. <br/> سعی کنید فیلترها را تغییر دهید.</p>
              </div>
            ) : (
              // --- نمایش نتایج ---
              <div className="space-y-4">
                {initialData.map((item: VeterinarianCardType) => (
                  <VetCard key={item.id} item={item} setItemId={setItemId} />
                ))}
              </div>
            )}
          </main>
        </div>
        
        {/* این کامپوننت مودال باید به صورت پیش‌فرض مخفی باشد و با تغییر itemId نمایش داده شود */}
        <ChoiceTypeRequest id={itemId!} />
      </div>
    </div>
  );
}

export default Index;