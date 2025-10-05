"use client";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { IMAGE_PLACEHOLDER, LINK_LANDINGPAGE } from "@repo/lib/links";
import { Btn } from "@repo/ui/btn"; // assuming Btn is a well-styled button
import {
  IconChevronLeft, // Renamed from IconCaretLeftFilled for better icon choice
  IconHeart,
  IconMapPinFilled,
  IconStarFilled, // Added for rating display
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import Share from "./Share"; // Assuming Share component is visually appealing
import Link from "next/link";

function VetCard({
  item,
  setItemId,
}: {
  item: VeterinarianCardType;
  setItemId?: Dispatch<SetStateAction<string | undefined>>;
}) {
  const { data: session } = useSession();
  const token: string | undefined = session?.accessToken;
  const { status } = useSession();
  const { push } = useRouter();

  const handleAddFav = async (id: number) => {
  console.log("Testing favorite add...");
  console.log("ID:", id, "Type:", typeof id);
  console.log("Token:", token?.substring(0, 20) + "...");
  
  const payload = { veterinarian_id: id };
  console.log("Payload:", JSON.stringify(payload));
  
  try {
    if (!token) {
      toast.warning("ابتدا وارد وب سایت شوید.");
      return;
    }
    
    const res = await postDataAPI(
      `/veterinary/favorites/add/`,
      payload,
      token
    );
    
    console.log("Success! Status:", res.status);
    console.log("Response:", res.data);
    
    if (res.status === 201) {
      toast.success("دامپزشک به لیست علاقه مندی ها اضافه شد.");
    }
  } catch (error: any) {
    console.error("❌ ERROR:", {
      status: error?.response?.status,
      data: error?.response?.data,
      message: error?.message,
    });
    
    toast.error(JSON.stringify(error?.response?.data || "خطا"), {
      duration: 10000,
    });
  }
};
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-4 transition-all duration-300 hover:shadow-2xl">
      {/* Top Section: Image, Name, Experience, Share, Heart */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={!!item.image ? item.image : IMAGE_PLACEHOLDER}
            alt={item.fullName}
            className="w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover ring-2 ring-blue-100 shadow-md"
          />
          <div className="space-y-1">
            <p className="font-bold text-lg lg:text-2xl text-gray-900 block">
              {item.fullName}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">سابقه کاری:</span>{" "}
              {item.experience} سال
            </p>
            {/* Added a simple rating display */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <IconStarFilled size={16} />
              <span className="font-bold">{item.rate ?? "N/A"}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <Share
            link={`${LINK_LANDINGPAGE}search_veterinarians/${item.slug}`}
          />
          <IconHeart
            size={24}
            className="cursor-pointer hover:text-red-500 transition-colors duration-200"
            onClick={() => handleAddFav(item.id)}
          />
        </div>
      </div>

      <hr className="border-gray-200 my-4" />

      {/* Middle Section: Location and Map Link */}
      <div className="flex justify-between items-center bg-blue-50/50 p-4 rounded-xl mb-4">
        <div className="flex items-center gap-3">
          <IconMapPinFilled size={22} className="text-blue-500 flex-shrink-0" />
          <div className="text-sm text-gray-700 truncate">
            <p className="font-semibold">
              {item?.province?.name} - {item?.city?.name}
            </p>
          </div>
        </div>
        <Link
          target="_blank"
          href={`http://maps.google.com/maps?q=${!!item.lat ? item.lat : "35.7804024"},${!!item.long ? item.long : "51.3937825"}`}
          className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
        >
          مسیریابی
          <IconChevronLeft size={16} className="mt-0.5" />
        </Link>
      </div>

      <hr className="border-gray-200 my-4" />

      {/* Bottom Section: View Profile and Appointment Button */}
      <div className="flex justify-between items-center pt-2">
        <Link
          href={`/search_veterinarians/${item.slug}`}
          className="flex items-center gap-1 text-green-600 hover:text-green-800 font-bold transition-colors duration-200 text-sm md:text-base"
        >
          مشاهده پروفایل
          <IconChevronLeft size={18} className="mt-0.5" />
        </Link>
        <Btn
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => {
            if (!!setItemId) {
              setItemId(String(item.id));
            }
            if (status === "unauthenticated") {
              return toast.error("ابتدا وارد شوید.");
            }
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          درخواست نوبت
        </Btn>
      </div>
    </div>
  );
}

export default VetCard;
