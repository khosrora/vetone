import UserComments from "@/components/UserComments";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { Btn } from "@repo/ui/btn";
import { Img } from "@repo/ui/img";
import {
  IconFileLike,
  IconHeart,
  IconMapPinFilled,
  IconShare,
  IconStarFilled,
  IconZoomScanFilled,
  IconThumbUpFilled
} from "@tabler/icons-react";
import Link from "next/link";
import { base_api } from "@/lib/fetch/base_api";
function page({ params: { slug } }: { params: { slug: string } }) {
 
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-0">
    <div className="grid grid-cols-12">
      <div className="col-span-12  mb-12 lg:col-span-8">
        <div className="relative">
          <Img
            src="https://imageserver.petsbest.com/marketing/blog/increased-vet-demand.jpg"
            width={500}
            height={500}
            alt="تصویر پزشک"
            className="rounded-lg max-h-64 object-cover w-full lg:max-h-96"
          />
          <div className="absolute -bottom-12 left-0 right-0 px-8">
            <div className="avatar">
              <div className="ring-white ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://avatar.iran.liara.run/public" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-20 lg:hidden">
          <Link
            href={`/receive_services?veterinarian=${1}`}
            className="block bg-green_vetone rounded-md text-white text-center py-3"
          >
            دریافت نوبت مشاوره
          </Link>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-md mt-6 space-y-8 lg:mt-20">
          <div className="flex justify-between items-center">
            <p className="font-bold text-base lg:text-xl">
              دکتر رضا رستمی{" "}
              <span className="text-[10px] lg:text-sm font-light mx-2">
                (20 سال سابقه)
              </span>
            </p>
            <div className="flex justify-between items-center">
              <IconShare className="ml-4"/>
              <IconHeart />
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-x-2">
              <IconMapPinFilled />
              <p className="text-[12px] lg:text-base">تهران , تهران</p>
            </div>
            <div className="flex justify-between items-center gap-x-2">
              <IconZoomScanFilled />
              <p className="font-light text-[12px] lg:text-sm"> کدنظام پزشکی: </p>
              <p className="font-bold">1223412</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-x-2">
              <IconStarFilled color="#ff7700" size={18} />
              <p>4.5</p>
            </div>
            <div className="flex justify-end items-center gap-x-2">
              <IconThumbUpFilled color="green" />
              <p className="font-bold text-[12px]"> 120 نوبت موفق</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-md mt-6 space-y-4">
          <p className="font-bold lg:text-lg">بیوگرافی </p>
          <p className="font-light leading-6 lg:leading-8 text-xs lg:text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="bg-white rounded-md mt-6 py-6">
          <div className="p-4 lg:py-2 lg:px-6">
            <p className="font-bold text-lg">نظرات کاربران </p>
          </div>
          <UserComments />
        </div>
      </div>
      <div className="hidden lg:flex lg:col-span-4">
        <div className="w-full p-4">
          <div className="bg-white p-4 lg:p-6 rounded-md">
            <p className="font-bold text-[12px] lg:text-base">
              نوبت‌دهی اینترنتی مطب دکتر علی اکبر سیاری
            </p>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <p className="font-light">اولویت نوبت</p>
              <p className="font-bold">۱۷ دی ۱۴۰۳</p>
            </div>
            <div className="w-full mt-4">
              <Link
                href={`/receive_services?veterinarian=${1}`}
                className="block bg-green_vetone rounded-md text-white text-center py-3"
              >
                دریافت نوبت مشاوره
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default page;
