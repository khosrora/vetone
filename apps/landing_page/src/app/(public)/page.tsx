import MedicalServices from "@/components/MedicalServices";
import News from "@/components/News";
import SearchBox from "@/components/SearchBox";
import TitleLink from "@/components/TitleLink";
import UserComments from "@/components/UserComments";
import VeterinarianSlider from "@/components/VeterinarianSlider";
import { name_project } from "@repo/lib/titles";
import { IconBubbleText } from "@tabler/icons-react";

export default function Page() {
  return (
    <div className="space-y-12 lg:space-y-24 py-6 lg:py-12">
      <div className="space-y-4">
      <div className="flex flex-col justify-center items-center space-y-2 p-4 ">
        <p className="text-4xl text-green_vetone font-extrabold drop-shadow-[1px_1px_rgba(0,0,0,1)] ">
          {name_project}
        </p>
        <p className="text-center pt-6">
          خدمات جامع دامداری: بهبود سلامت، افزایش بهره‌وری و سودآوری
        </p>
      </div>
      <SearchBox />
      </div>
      <div className="bg-white my-my-4 lg:my-12">
        <TitleLink title="دامپزشکان" linkText="مشاهده همه" address="/veterinarian" />
        <VeterinarianSlider />
      </div>

      <div className="">
        <TitleLink title="مراکز خدمات درمانی" />
        <MedicalServices />
      </div>

      <div>
        <TitleLink title="نظرات کاربران" />
        <div className="grid grid-cols-6">
          <div className="hidden lg:col-span-1 bg-green_vetone/20 rounded-md lg:flex flex-col justify-center items-center space-y-2">
            <div className="w-28 h-28 rounded-full bg-green_vetone flex justify-center items-center">
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

      <div>
        <TitleLink title="اخبار مقالات" />
        <News />
      </div>
    </div>
  );
}
