"use client";
import { deleteDataAPI } from "@/lib/fetch/fetch_axios";
import { FavoriteCardType } from "@/lib/types/favoriteCard.type";
import {
  IconBubbleFilled,
  IconCaretLeftFilled,
  IconHeartFilled,
  IconHexagonPlusFilled,
  IconPhoneFilled,
  IconShare,
  IconTrash,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function FavoriteCard({
  item,
  mutate,
}: {
  item: FavoriteCardType;
  mutate: any;
}) {
  const { data: session } = useSession();
  const token: string = session?.token.token!;
  const { push } = useRouter();

  const handleRemove = async (id: number) => {
    try {
      const res = await deleteDataAPI(
        `/veterinary/favorites/remove/${id}/`,
        token
      );
      if (res.status === 204) {
        toast.success("دامپزشک از لیست علاقه مندی ها حذف شد.");
        mutate();
      }
    } catch (error) {
      toast.error("دوباره امتحان کنید");
    }
  };
  return (
    <div className="p-4  lg:p-6 bg-white rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <img
            src="https://avatar.iran.liara.run/public"
            className="w-12 h-12 lg:w-24 lg:h-24"
          />
          <div className="space-y-2 lg:space-y-3 px-4">
            <p className="font-bold text-sm lg:text-xl block">دکتر رضا رستمی</p>
            <p className="text-[11px] texxt-gray-500  ">10 سال سابقه</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-4 lg:gap-x-4">
          <IconShare />
          <IconTrash
            className="cursor-pointer"
            color="red"
            onClick={() => handleRemove(item.id)}
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-x-2  lg:gap-x-8 items-center py-3">
        <div className="flex items-center gap-x-2 ">
          <IconHexagonPlusFilled size={16} color="gray" />
          <p className="text-[10px] lg:text-sm">نوبت حضوری</p>
        </div>
        <div className="flex items-center gap-x-2">
          <IconPhoneFilled size={16} color="gray" />
          <p className="text-[10px] lg:text-sm">مشاوره تلفنی</p>
        </div>
        <div className="flex items-center gap-x-2">
          <IconBubbleFilled size={16} color="gray" />
          <p className="text-[10px] lg:text-sm">مشاوره متنی</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-3 gap-x-2 items-center">
        <div className="col-span-2">
          <div
            className="bg-none text-green-700 hover:text-green-600 cursor-pointer flex gap-x-2 text-sm"
            onClick={() => push("/veterinarian/khosrora")}
          >
            <p className="">مشاهده پروفایل</p>
            <IconCaretLeftFilled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
