"use client";
import { deleteDataAPI } from "@/lib/fetch/fetch_axios";
import { FavoriteCardType } from "@/lib/types/favoriteCard.type";
import { LINK_LANDINGPAGE } from "@repo/lib/links";
import {
  IconCaretLeftFilled,
  IconMapPinFilled,
  IconTrash
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Share from "./Share";

function FavoriteCard({
  item,
  mutate,
}: {
  item: FavoriteCardType;
  mutate: any;
}) {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const { push } = useRouter();
  console.log(item);
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
            <p className="font-bold text-sm lg:text-xl block">دکتر {item.fullName}</p>
            <p className="text-[11px] texxt-gray-500  ">{item.experience} سال سابقه</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-4 lg:gap-x-4">
          <Share
            link={`${LINK_LANDINGPAGE}search_veterinarians/${item.slug}`}
          />
          <IconTrash
            className="cursor-pointer"
            color="red"
            onClick={() => handleRemove(item.id)}
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between items-center bg-gray-100 w-full p-4 rounded-md">
        <div className="flex items-center gap-x-2 ml-8">
          <IconMapPinFilled size={20} color="gray" />
          <div className="text-[10px] lg:text-sm flex truncate w-10/12 ">
            <p>{item.province}</p>-<p>{item.city}</p>
          </div>
        </div>
        <Link
          target="_blank"
          href={`https://www.google.com/maps/dir/?api=1&destination=${!!item.lat ? item.lat : "35.7804024"},${!!item.long ? item.long : "51.3937825"}`}
          className="text-blue-400 link"
        >
          برای مسیر یابی اینجا کلیک کنید
        </Link>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-3 gap-x-2 items-center">
        <div className="col-span-2">
          <div
            className="bg-none text-green-700 hover:text-green-600 cursor-pointer flex gap-x-2 text-sm"
            onClick={() =>
              push(`${LINK_LANDINGPAGE}/search_veterinarians/${item.slug}`)
            }
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
