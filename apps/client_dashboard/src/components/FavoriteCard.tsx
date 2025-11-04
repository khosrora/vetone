"use client";
import { deleteDataAPI } from "@/lib/fetch/fetch_axios";
import { FavoriteCardType } from "@/lib/types/favoriteCard.type";
import { LINK_LANDINGPAGE } from "@repo/lib/links";
import {
  IconCaretLeftFilled,
  IconMapPinFilled,
  IconTrash,
  IconClock,
  IconStarFilled,
  IconArrowLeft,
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

  const handleRemove = async (id: number) => {
    toast.warning(
      <div className="flex flex-col gap-2">
        <p className="font-bold">آیا مطمئن هستید؟</p>
   
      </div>,
      {
        duration: 6000,
        action: {
          label: "بله، حذف شود",
          onClick: async () => {
            try {
              const res = await deleteDataAPI(
                `/veterinary/favorites/remove/${id}/`,
                token
              );
              if (res.status === 204) {
                toast.success("دامپزشک از لیست علاقه‌مندی‌ها حذف شد.");
                mutate();
              }
            } catch (error) {
              toast.error("دوباره امتحان کنید");
            }
          },
        },
        cancel: {
          label: "انصراف",
          onClick: () => {},
        },
      }
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Header Section */}
      <div className="p-5 lg:p-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <img
                src={item.image || "https://avatar.iran.liara.run/public"}
                alt={item.fullName}
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover shadow-lg ring-2 ring-gray-100"
              />
              <div className="absolute -top-1 -right-1 bg-gradient-to-br from-yellow-400 to-orange-400 w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                <IconStarFilled size={12} className="text-white" />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg lg:text-xl text-gray-900">
                دکتر {item.fullName}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <IconClock size={16} className="text-gray-400" />
                <span>{item.experience} سال سابقه</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
              <Share
                link={`${LINK_LANDINGPAGE}search_veterinarians/${item.slug}`}
              />
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="p-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all duration-200 group/btn"
              title="حذف از علاقه‌مندی‌ها"
            >
              <IconTrash size={20} className="group-hover/btn:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Body Section */}
      <div className="p-5 lg:p-6 space-y-4">
        {/* Location */}
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <IconMapPinFilled size={18} className="text-gray-600" />
            </div>
            <div className="text-sm text-gray-700 font-medium">
              <span>{item.province}</span>
              <span className="text-gray-400 mx-1">•</span>
              <span>{item.city}</span>
            </div>
          </div>
          <Link
            target="_blank"
            href={`https://www.google.com/maps/dir/?api=1&destination=${
              item.lat || "35.7804024"
            },${item.long || "51.3937825"}`}
            className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors"
          >
            <span>مسیریابی</span>
            <IconArrowLeft size={16}/>
          </Link>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={() =>
              push(`${LINK_LANDINGPAGE}/search_veterinarians/${item.slug}`)
            }
            className="flex items-center gap-2 text-sm lg:text-base font-bold text-green-700 hover:text-green-600 transition-colors group/link"
          >
            <span>مشاهده پروفایل</span>
            <IconCaretLeftFilled
              size={18}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;