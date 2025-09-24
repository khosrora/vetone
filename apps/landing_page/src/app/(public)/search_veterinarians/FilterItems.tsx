"use client";
import { province, ProvinceType } from "@/lib/constants/cities";
import {
  IconChevronDown,
  IconSearch, // آیکون جدید برای جستجو
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// این یک کامپوننت کمکی برای ساخت آکاردئون است تا کد تمیزتر باشد
const Accordion = ({ title, children, isOpen, onClick }: { title: string, children: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="py-2 border-b border-gray-200">
            <div
                className="flex justify-between items-center cursor-pointer p-3 rounded-lg hover:bg-gray-50"
                onClick={onClick}
            >
                <span className="font-bold text-gray-800 text-base">{title}</span>
                <IconChevronDown
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </div>
            {isOpen && (
                <div className="pt-2 pb-4 px-2">
                    {children}
                </div>
            )}
        </div>
    );
};


function FilterItems({ onDismiss }: { onDismiss?: any }) {
  const router = useRouter();
  
  // برای هر بخش یک state جداگانه تعریف می‌کنیم
  const [typeOpen, setTypeOpen] = useState<boolean>(false);
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [activityOpen, setActivityOpen] = useState<boolean>(true); // این بخش به صورت پیش‌فرض باز است
  
  const [searchProvince, setSearchProvince] = useState<string>("");

  const handleRoute = (provinceValue: string): void => {
    let url = "/search_veterinarians/?";
    const currentQuery = new URLSearchParams(window.location.search);
    if (provinceValue) {
      currentQuery.set("province", provinceValue);
    }
    url += currentQuery.toString();
    router.push(url);
    if (!!onDismiss) {
      onDismiss();
    }
  };
  
  // داده‌های نمونه برای بخش‌های کامنت شده
  const appointmentTypes = ["حضوری", "مشاوره تلفنی", "مشاوره متنی"];
  const categories = ["کلینیک", "بیمارستان", "داروخانه", "پت شاپ"];

  return (
    // حذف p-4 از اینجا برای چسبیدن دکمه‌ها به پایین
    <div className="bg-white rounded-md w-full flex flex-col h-full">
        <div className="p-4 flex-grow overflow-y-auto pb-24"> {/* افزودن padding-bottom برای فاصله از دکمه‌ها */}
            {/* بخش نوع نوبت‌گیری */}
            <Accordion title="نوع نوبت گیری" isOpen={typeOpen} onClick={() => setTypeOpen(!typeOpen)}>
              <div className="space-y-3">
                {appointmentTypes.map((item) => (
                  <label key={item} className="block">
                    <input type="radio" name="type" className="sr-only peer" />
                    <div className="w-full text-center cursor-pointer p-3 rounded-lg border border-gray-200 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 transition-all">
                      <span className="label-text font-semibold">{item}</span>
                    </div>
                  </label>
                ))}
              </div>
            </Accordion>

            {/* بخش دسته‌بندی */}
            <Accordion title="دسته بندی" isOpen={categoryOpen} onClick={() => setCategoryOpen(!categoryOpen)}>
              <div className="space-y-3">
                {categories.map((item) => (
                  <label key={item} className="block">
                    <input type="radio" name="category" className="sr-only peer hidden" />
                    <div className="w-full text-center cursor-pointer p-3 rounded-lg border  border-gray-200 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 transition-all ">
                      <span className="label-text font-semibold">{item}</span>
                    </div>
                  </label>
                ))}
              </div>
            </Accordion>
            
            {/* بخش استان محل فعالیت */}
            <Accordion title="استان محل فعالیت" isOpen={activityOpen} onClick={() => setActivityOpen(!activityOpen)}>
              <div className="relative mb-3">
                  <IconSearch size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                  <input
                    type="text"
                    placeholder="نام استان مورد نظر را بنویسید"
                    className="w-full focus:outline-none bg-gray-100 rounded-lg py-3 pr-10 pl-3 text-sm border-2 border-transparent focus:border-green-500 transition-all"
                    onChange={(e) => setSearchProvince(e.target.value)}
                  />
              </div>
              <div className="space-y-2 max-h-56 overflow-y-auto">
                {province
                  .filter((item) => item.fields.name.includes(searchProvince))
                  .map((item: ProvinceType) => (
                    <label key={item.pk} className="block">
                      <input
                        type="radio"
                        name="activity"
                        className="sr-only peer"
                        value={item.pk}
                        onChange={(e) => handleRoute(e.target.value as string)}
                      />
                      <div className="w-full text-center cursor-pointer p-3 rounded-lg border border-gray-200 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 transition-all">
                          <span className="label-text font-semibold">{item.fields.name}</span>
                      </div>
                    </label>
                  ))}
              </div>
            </Accordion>
        </div>

        {/* دکمه‌های ثابت در پایین صفحه */}
       
    </div>
  );
}

export default FilterItems;