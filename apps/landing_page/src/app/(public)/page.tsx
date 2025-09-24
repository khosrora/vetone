import MedicalServices from "@/components/MedicalServices";
import News from "@/components/News";
import SearchBox from "@/components/SearchBox";
import TitleLink from "@/components/TitleLink";
import UserComments from "@/components/UserComments";
import VeterinarianSlider from "@/components/VeterinarianSlider";
import { name_project } from "@repo/lib/titles";
import { Img } from "@repo/ui/img";
import { IconBubbleText } from "@tabler/icons-react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="space-y-12 lg:space-y-24 py-6 lg:py-6 ">
      {/* Hero Section with Image and Stats */}
      <div className="lg:max-w-7xl mx-auto z-0">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 p-4 lg:p-8 rounded-3xl  relative overflow-hidden">
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start space-y-4">
            <p className="text-4xl lg:text-5xl text-green_vetone font-extrabold drop-shadow-lg">
              {name_project}
            </p>
            <p className="text-center lg:text-left text-base lg:text-lg text-gray-700 font-medium">
              خدمات جامع دامداری: بهبود سلامت، افزایش بهره‌وری و سودآوری
            </p>
            {/* Animated Stats */}
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl lg:text-3xl font-bold text-green_vetone animate-pulse">+1</span>
                <span className="text-xs text-gray-500">دامپزشک فعال</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl lg:text-3xl font-bold text-green_vetone animate-pulse">+350</span>
                <span className="text-xs text-gray-500">مرکز درمانی</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl lg:text-3xl font-bold text-green_vetone animate-pulse">+2</span>
                <span className="text-xs text-gray-500">درخواست موفق</span>
              </div>
            </div>
            <SearchBox />
          </div>
          {/* Vet Image with Effect */}
          <div className="flex-1 flex justify-end items-center relative">
            <div className="relative w-64 h-64 lg:w-10/12 lg:h-80">
              <Img
                src="/images/image.png"
                alt={name_project}
                width={1000} height={1000}
                className="object-coveranimate-fade-in"
              />
              <div className="absolute inset-0 rounded-full bg-green_vetone/10 blur-2xl scale-110" />
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green_vetone/20 rounded-full blur-2xl z-0" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green_vetone/10 rounded-full blur-2xl z-0" />
        </div>
      </div>
      {/* Veterinarians Section */}
      <div className="bg-white p-6 rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <TitleLink
            title="دامپزشکان برتر"
            linkText="مشاهده همه"
            address="/search_veterinarians"
          />
          <VeterinarianSlider />
        </div>
      </div>
      {/* Medical Services Section */}
      <div className="space-y-12 lg:space-y-24 max-w-7xl mx-auto px-0">
        <div className="px-4 lg:px-0">
          <TitleLink title="مراکز خدمات درمانی 🩺" />
          <MedicalServices />
        </div>
        {/* User Comments Section */}
        <div className="px-4 lg:px-0">
          <TitleLink title="نظرات کاربران" />
          <div className="grid grid-cols-6">
            <div className="hidden lg:col-span-1 bg-green_vetone/20 rounded-md lg:flex flex-col justify-center items-center space-y-2">
              <div className="w-28 h-32 p-8 rounded-full bg-green_vetone flex justify-center items-center">
                <IconBubbleText size={52} color="white" />
              </div>
              <p>نظرات و حمایت</p>
              <p>مشتریان</p>
            </div>
            <div className="col-span-6 lg:col-span-5">
              <UserComments />
            </div>
          </div>
        </div>
        {/* News Section */}
        <div className="px-4 lg:px-0">
          <TitleLink
            title="اخبار و مقالات"
            linkText="مشاهده همه"
            address="/blogs"
          />
          <News />
        </div>
      </div>
    </div>
  );
}
