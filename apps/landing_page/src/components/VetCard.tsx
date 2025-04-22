"use client";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { IMAGE_PLACEHOLDER, LINK_LANDINGPAGE } from "@repo/lib/links";
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
import Share from "./Share";
import { Dispatch, SetStateAction } from "react";

function VetCard({
  item,
  setItemId,
}: {
  item: VeterinarianCardType;
  setItemId?: Dispatch<SetStateAction<string | undefined>>;
}) {
  const { data: session } = useSession();
  const token: string | undefined = session?.token.token;
  const { status } = useSession();
  const { push } = useRouter();

  const handleAddFav = async (id: number) => {
    try {
      if (!!token) {
        const res = await postDataAPI(
          `/veterinary/favorites/add/`,
          { veterinarian_id: id },
          token
        );
        if (res.status === 201) {
          toast.success("دامپزشک به لیست علاقه مندی ها اضافه شد.");
        }
      } else {
        toast.warning("ابتدا وارد وب سایت شوید.");
      }
    } catch (error) {
      toast.error("قبلا به لیست اضافه شده است");
    }
  };

  return (
    <div className="p-4  lg:p-6 bg-white rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <img
            src={!!item.image ? item.image : IMAGE_PLACEHOLDER}
            className="w-12 h-12 rounded-full lg:w-24 lg:h-24"
          />
          <div className="space-y-2 lg:space-y-3 px-4">
            <p className="font-bold text-base lg:text-xl block">
              {item.fullName}
            </p>
            <p className="text-[11px] texxt-gray-500  ">
              {" "}
              <span>سابقه کاری :</span> {item.experience}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-4 lg:gap-x-4">
          <div className="flex gap-x-8">
            <div className="flex items-center gap-x-2">
              <IconCarambolaFilled color="#ffaa00" />
              <p>{item.rate}</p>
            </div>
          </div>
          <Share
            link={`${LINK_LANDINGPAGE}search_veterinarians/${item.slug}`}
          />
          <IconHeart
            className="cursor-pointer"
            onClick={() => handleAddFav(item.id)}
          />
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
      <div className="grid grid-cols-4 md:grid-cols-3 gap-x-2 items-center">
        <div className="col-span-2 md:col-span-2">
          <div
            className="bg-none items-center text-green-700 hover:text-green-600 cursor-pointer flex gap-x-2"
            onClick={() => push(`/search_veterinarians/${item.slug}`)}
          >
            <p className="text-xs md:text-sm">مشاهده پروفایل</p>
            <IconCaretLeftFilled />
          </div>
        </div>
        <Btn
          className="col-span-2 md:col-span-1 text-sm"
          onClick={() => {
            if (!!setItemId) {
              setItemId(String(item.id));
            }
            if (status === "unauthenticated")
              return toast.error("ابتدا وارد شوید.");
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          نوبت مشاوره
        </Btn>
      </div>
    </div>
  );
}

export default VetCard;
