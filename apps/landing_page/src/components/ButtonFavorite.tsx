"use client";
import { useState } from "react";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { useRouter } from "next/navigation";

type FavoriteButtonProps = {
  vetId: number | string;
  initialFavorited?: boolean;
};

export default function FavoriteButton({
  vetId,
  initialFavorited = false,
}: FavoriteButtonProps) {
  const { data: session } = useSession();
  const token: string | undefined = session?.accessToken;
  const router = useRouter();

  const [favorited, setFavorited] = useState<boolean>(initialFavorited);
  const [loading, setLoading] = useState(false);

  const handleToggleFav = async () => {
    if (!token) {
      toast.warning("ابتدا وارد وب سایت شوید.");
      return;
    }

    // ✅ لاگ کامل قبل از ارسال
    console.log("=== DEBUG INFO ===");
    console.log("vetId:", vetId);
    console.log("vetId type:", typeof vetId);
    console.log("Token:", token);
    console.log("Session:", session);
    console.log("Payload:", { veterinarian_id: vetId });

    setLoading(true);

    try {
      if (!favorited) {
        console.log("Sending ADD request...");
        const res = await postDataAPI(
          `/veterinary/favorites/add/`,
          { veterinarian_id: vetId },
          token
        );
        console.log("ADD Response:", res);
        if (res.status === 201) {
          setFavorited(true);
          toast.success("دامپزشک به لیست علاقه‌مندی‌ها اضافه شد.");
        }
      } else {
        console.log("Sending REMOVE request...");
        const res = await postDataAPI(
          `/veterinary/favorites/remove/`,
          { veterinarian_id: vetId },
          token
        );
        console.log("REMOVE Response:", res);
        if (res.status === 200) {
          setFavorited(false);
          toast.success("دامپزشک از لیست علاقه‌مندی‌ها حذف شد.");
        }
      }
    } catch (error: any) {
      // ✅ لاگ کامل خطا
      console.error("=== ERROR DEBUG ===");
      console.error("Full error:", error);
      console.error("Error response:", error?.response);
      console.error("Error response data:", error?.response?.data);
      console.error("Error response status:", error?.response?.status);
      console.error("Error response headers:", error?.response?.headers);
      console.error("Error message:", error?.message);

      const status = error?.response?.status;
      const errorData = error?.response?.data;
      
      // نمایش تمام خطاها به کاربر برای دیباگ
      toast.error(`خطا ${status}: ${JSON.stringify(errorData)}`, {
        duration: 10000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {favorited ? (
        <IconHeartFilled
          size={24}
          className={`cursor-pointer text-red-500 ${
            loading ? "opacity-50" : ""
          }`}
          onClick={loading ? undefined : handleToggleFav}
        />
      ) : (
        <IconHeart
          size={24}
          className={`cursor-pointer hover:text-red-500 transition-colors duration-200 ${
            loading ? "opacity-50" : ""
          }`}
          onClick={loading ? undefined : handleToggleFav}
        />
      )}
    </>
  );
}