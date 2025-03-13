"use client"
import { Btn } from "@repo/ui/btn";
import {
  IconBubbleFilled,
  IconCarambolaFilled,
  IconHexagonPlusFilled,
  IconHeart,
  IconMapPinFilled,
  IconPhoneFilled,
  IconShare,
  IconCaretLeftFilled
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

function VetCard({ item }: { item: string }) {
  const { push } = useRouter();
  return (
    <div key={item} className="p-4  lg:p-6 bg-white rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <img
            src="https://avatar.iran.liara.run/public"
            className="w-12 h-12 lg:w-24 lg:h-24"
          />
          <div className="space-y-2 lg:space-y-3 px-4">
          <p className="font-bold text-base lg:text-xl block">دکتر رضا رستمی</p>
          <p className="text-[11px] texxt-gray-500  ">10 سال سابقه</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-4 lg:gap-x-4">
          <div className="flex gap-x-8">
            <div className="flex items-center gap-x-2">
          <IconCarambolaFilled color="#ffaa00"/>
          <p>
            4.5
          </p>
          </div>
          </div>
          <IconShare />
          <IconHeart />

        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-x-8 items-center py-3">
        <div className="flex items-center gap-x-2 ">
          <IconHexagonPlusFilled size={20} color="gray" />
          <p className="text-[11px] lg:text-sm">نوبت حضوری</p>
        </div>
        <div className="flex items-center gap-x-2">
          <IconPhoneFilled size={20} color="gray" />
          <p className="text-[11px] lg:text-sm">مشاوره تلفنی</p>
        </div>
        <div className="flex items-center gap-x-2">
          <IconBubbleFilled size={20} color="gray" />
          <p className="text-[11px] lg:text-sm">مشاوره متنی</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 ml-8 bg-gray-100 w-full p-4 rounded-md">
          <IconMapPinFilled size={20} color="gray" />
          <div className="text-[10px] lg:text-sm flex truncate w-10/12 ">
            <p>تهران</p>
            <p>
          بلوار شهران شمالی، بالاتر از فلکه دوم شهران، بعد از مسجد امام علی، ساختمان داروخانه شبانه روزی دکتر کریمان، طبقه سوم، بلوک شرقی، واحد 31
          </p>
          </div>
        </div>
      <div className="divider"></div>
      <div className="grid grid-cols-3 gap-x-2 items-center">
        <div className="col-span-2">
        <div
          className="bg-none text-green-700 hover:text-green-600 cursor-pointer flex gap-x-2"
          onClick={() => push("/veterinarian/khosrora")}
        >
          <p className="">مشاهده پروفایل</p>
          <IconCaretLeftFilled/>
        </div>
        </div>
        <Btn className="col-span-1">نوبت مشاوره</Btn>
      </div>
    </div>
  );
}

export default VetCard;
