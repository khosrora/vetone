"use client";
import { Btn } from "@repo/ui/btn";
import {
  IconBubbleFilled,
  IconHeart,
  IconMapPinFilled,
  IconPhoneFilled,
  IconShare,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function FavoriteCard() {
  const { push } = useRouter();
  return (
    <div className="p-4 bg-white rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <img
            src="https://avatar.iran.liara.run/public"
            className="w-12 h-12"
          />
          <p className="font-bold">دکتر رضا رستمی</p>
        </div>
        <div className="flex justify-end items-center gap-x-2">
          <IconShare />
          <IconHeart />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <IconMapPinFilled size={16} color="gray" />
          <p className="text-[10px]">تهران - تهران</p>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <IconPhoneFilled size={16} color="gray" />
          <p className="text-[10px]">مشاوره تلفنی</p>
        </div>
        <div className="flex justify-end items-center gap-x-2">
          <IconBubbleFilled size={16} color="gray" />
          <p className="text-[10px]">مشاوره متنی</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-2 gap-x-2">
        <Btn
          bgColor="bg-zinc-100 hover:bg-zinc-200"
          onClick={() => push("/veterinarian/khosrora")}
        >
          مشاهده پروفایل
        </Btn>
        <Btn>نوبت مشاوره</Btn>
      </div>
    </div>
  );
}

export default FavoriteCard;
