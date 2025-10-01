"use client";

import { useState } from "react";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { useRouter } from "next/navigation";  // ✅ FIXED

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
  const router = useRouter();  // ✅ Correct usage for App Router

  const [favorited, setFavorited] = useState<boolean>(initialFavorited);
  const [loading, setLoading] = useState(false);

  const handleToggleFav = async () => {
    if (!token) {
      toast.warning("ابتدا وارد وب سایت شوید.");
      router.push("/auth/signin"); // ✅ Works with App Router
      return;
    }

    setLoading(true);

    try {
      if (!favorited) {
        const res = await postDataAPI(
          `/veterinary/favorites/add/`,
          { veterinarian_id: vetId },
          token
        );
        if (res.status === 201) {
          setFavorited(true);
          toast.success("دامپزشک به لیست علاقه مندی ها اضافه شد.");
        }
      } else {
        const res = await postDataAPI(
          `/veterinary/favorites/remove/`,
          { veterinarian_id: vetId },
          token
        );
        if (res.status === 200) {
          setFavorited(false);
          toast.success("دامپزشک از لیست علاقه مندی ها حذف شد.");
        }
      }
    } catch (error) {
      toast.error("خطایی رخ داد. دوباره تلاش کنید.");
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
