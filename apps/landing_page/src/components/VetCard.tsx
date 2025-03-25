"use client";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { Btn } from "@repo/ui/btn";
import {
  IconCarambolaFilled,
  IconCaretLeftFilled,
  IconHeart,
  IconMapPinFilled,
  IconShare,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function VetCard({ item }: { item: VeterinarianCardType }) {
  const { status } = useSession();
  const { push } = useRouter();
  return (
    <div className="p-4  lg:p-6 bg-white rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <img
            src={item.image}
            className="w-12 h-12 rounded-full lg:w-24 lg:h-24"
          />
          <div className="space-y-2 lg:space-y-3 px-4">
            <p className="font-bold text-base lg:text-xl block">
              {item.fullName}
            </p>
            <p className="text-[11px] texxt-gray-500  ">{item.experience}</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-4 lg:gap-x-4">
          <div className="flex gap-x-8">
            <div className="flex items-center gap-x-2">
              <IconCarambolaFilled color="#ffaa00" />
              <p>{item.rate}</p>
            </div>
          </div>
          <IconShare />
          <IconHeart />
        </div>
      </div>
      <div className="divider"></div>
      {/* <div className="flex gap-x-8 items-center py-3">
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
      </div> */}
      <div className="flex items-center gap-x-2 ml-8 bg-gray-100 w-full p-4 rounded-md">
        <IconMapPinFilled size={20} color="gray" />
        <div className="text-[10px] lg:text-sm flex truncate w-10/12 ">
          <p>{item.province}</p>-<p>{item.city}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-3 gap-x-2 items-center">
        <div className="col-span-2">
          <div
            className="bg-none text-green-700 hover:text-green-600 cursor-pointer flex gap-x-2"
            onClick={() => push(`/veterinarian/${item.id}`)}
          >
            <p className="">مشاهده پروفایل</p>
            <IconCaretLeftFilled />
          </div>
        </div>
        <Btn
          className="col-span-1"
          onClick={() => {
            if (status === "unauthenticated")
              return toast.error("ابتدا وارد شوید.");
            push(`/receive_services?veterinarian=${item.id}`);
          }}
        >
          نوبت مشاوره
        </Btn>
      </div>
    </div>
  );
}

export default VetCard;
