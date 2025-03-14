import RequestCard from "@/components/RequestCard";
import TitleBack from "@/components/TitleBack";
import Link from "next/link";
import {
    IconBuildingHospital,
    IconPhone,
    IconBrandLine,
  } from "@tabler/icons-react";
function Index() {
    return (
        <div className="p-4 space-y-4">
            <TitleBack text="درخواست های من" />
            <div className="flex gap-x-1 lg:gap-x-8 rounded-lg  items-center bg-white p-4 lg:py-3 lg:px-6 text-[10px] lg:text-sm">
                <Link href={"/"} className="bg-green-800 text-white rounded-full px-2.5 lg:px-4 py-2">همه</Link>
                <Link href={"/"} className="flex gap-1 lg:gap-x-2 items-center rounded-full px-2.5 lg:px-4 py-2">
                    <IconBuildingHospital size={16}/>
                    <p>حضوری</p>

                </Link>
                <Link href={"/"} className="flex gap-x-2 items-center rounded-full px-2.5 lg:px-4 py-2">
                    <IconPhone size={16}/>
                    <p>تصویری</p>
                </Link>
                <Link href={"/"} className="flex gap-x-2 items-center rounded-full px-2.5 lg:px-4 py-2">
                    <IconBrandLine size={16}/>
                    <p>متنی</p>
                </Link>
            </div>

            <div className="flex justify-between items-center py-1 lg:py-3" dir="rtl">
                <p className="font-bold text-sm lg:text-lg">وضعیت درخواست:</p>
                <select className="select select-bordered max-w-xs border-none focus:outline-none text-xs lg:text-sm">
                    <option>در انتظار تایید</option>
                    <option>تایید شده</option>
                </select>
            </div>
            <div className="grid gap-4 grid-cols-1">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <RequestCard key={item} />
                ))}
            </div>
        </div>
    )
}
export default Index;