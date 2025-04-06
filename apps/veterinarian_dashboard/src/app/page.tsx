"use client"
import { Img } from "@repo/ui/img";
import PhonePage from "./PhonePage";
import { veterinarian } from "@repo/lib/titles";
import { IconBuildingHospital, IconStethoscope, IconCalendarMonthFilled, IconClipboardTextFilled, IconCashBanknoteFilled, IconUserFilled } from "@tabler/icons-react";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="hidden lg:block py-1 space-y-6">
        <div className="bg-white grid lg:grid-cols-10 rounded-lg ">
          <div className="col-span-2 rounded-lg p-4">
            <Img src="/images/doctor.jpg" width={2000} height={2000} alt={veterinarian} className="rounded-lg" />
          </div>
          <div className="p-4 col-span-8 space-y-4">
            <div className="flex gap-x-2 items-center">
              <IconStethoscope size={20} />
              <p className="text-base font-bold">دکتر محمدرضا نوری</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <IconBuildingHospital size={20} />
              <p className="text-sm text-gray-700">زاهدان امیرالمونین کوچه اول کلیکنیک تخصصی دامپزشکی راهزاد</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <IconCalendarMonthFilled size={20} />
              <p className="text-sm text-gray-700">10 سال سابقه کار</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <p className="text-xs leading-6 text-gray-600">
                توضیحاتی درباره دامپزشک معرفی خود درباره نوع فعالیت خودش و تخصص هایی که دریافت کرده
                توضیحاتی درباره دامپزشک معرفی خود درباره نوع فعالیت خودش و تخصص هایی که
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 lg:gap-x-6 grid-cols-1 lg:grid-cols-3">
          <div className="p-4 bg-white rounded-md space-y-4">
            <div className="flex items-center gap-x-4">
              <div className="border border-1.5 border-green_vetone bg-green_vetone/10 p-3 rounded-md">
                <IconClipboardTextFilled color="#1e7000" />
              </div>
              <p className="text-sm font-bold">درخواست های دریافتی</p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p className="text-2xl font-bold">5,000</p>  <p className="text-sm">درخواست</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md space-y-4">
            <div className="flex items-center gap-x-4">
              <div className="border border-1.5 border-yellow-600 bg-yellow-600/10 p-3 rounded-md">
                <IconUserFilled color="#ad7600" />
              </div>
              <p className="text-sm font-bold">دامداران من</p>

            </div>
            <div className="gap-x-2 flex items-center">
              <p className="text-2xl font-bold">5,000</p>  <p className="text-sm">نفر</p>
            </div>
          </div>
          <div className="p-4 bg-white space-y-4 rounded-md">
            <div className="flex items-center gap-x-4">
              <div className="border border-1.5 border-blue-700 bg-blue-700/10 p-3 rounded-md">
                <IconCashBanknoteFilled color="#040890" />
              </div>
              <p className="text-sm font-bold">درآمد کسب شده</p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p className="text-2xl font-bold">1,500,000</p>  <p className="text-sm">تومان</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-lg font-bold my-4">درخواست های دریافتی</h3>
            <div className="overflow-x-auto">
                  <table className="table table-zebra text-right">
                         <thead>
                           <tr className="bg-white">
                             <th className="text-gray-600 text-xs font-light">
                               نام و نام خانوادگی
                             </th>
                             <th className="text-gray-600 text-xs font-light">نوع درخواست</th>
                             <th className="text-gray-600 text-xs font-light">
                               استان و شهر
                             </th>
                             <th className="text-gray-600 text-xs font-light">
                               عملیات 
                             </th>
                           </tr>
                         </thead>
                         <tbody>
                         <tr>
        <th>رضا محمدی</th>
        <td>تماس تلفنی</td>
        <td>تهران روستا جنت آباد</td>
        <td className="text-green_vetone">جزئیات درخواست</td>
      </tr>
      {/* row 2 */}
      <tr>
      <th>رضا محمدی</th>
        <td>تماس تلفنی</td>
        <td>تهران روستا جنت آباد</td>
        <td className="text-green_vetone">جزئیات درخواست</td>
      </tr>
      {/* row 3 */}
      <tr>
      <th>رضا محمدی</th>
        <td>تماس تلفنی</td>
        <td>تهران روستا جنت آباد</td>
        <td className="text-green_vetone">جزئیات درخواست</td>
        </tr>
                         </tbody>
                       </table>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen overflow-y-scroll">
        <PhonePage />
      </div>
    </div>
  );
}
