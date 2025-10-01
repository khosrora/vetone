"use client";

import { useState } from "react";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { post_method } from "@/lib/fetch/fetch_api";
import { useSession } from "next-auth/react";
export default function FavoriteButton({
  vetId,
  initialFavorited = false,        // اگر توکن دارید پاس بدهید، وگرنه null
  className = "",
}: {
  vetId: number | string;
  initialFavorited?: boolean;
  token?: string | null;
  className?: string;
}) {
  const [liked, setLiked] = useState(initialFavorited);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  async function onClick() {
    if (loading || liked) return;
    try {
      setLoading(true);

      // post_method شما Response برمی‌گرداند (نه JSON)
      const res = await post_method(
        "/veterinary/favorites/add/",{veterinarian_id: vetId },
        token
      );

      // اگر سرور 204 داد، یعنی موفق بوده
      if (res.status === 204) {
        setLiked(true);
        return;
      }

      // تلاش برای خواندن JSON (اگر داشته باشد)
      let ok = true;
      try {
        const ct = res.headers.get("content-type") || "";
        if (ct.includes("application/json")) {
          const body = await res.json();
          // اگر بک‌اند فیلد ok دارد، از آن تبعیت می‌کنیم
          if (body?.ok === false) ok = false;
        }
      } catch {
        // اگر JSON نبود، موفق را پیش‌فرض می‌گیریم مگر سرور non-2xx بدهد
      }

      if (!ok) throw new Error("Favorite add failed");
      setLiked(true);
    } catch (e) {
      console.error(e);
      // TODO: اینجا toast خطا بگذارید
    } finally {
      setLoading(false);
    }
  }

  const Icon = liked ? IconHeartFilled : IconHeart;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading || liked}
      aria-pressed={liked}
      title={liked ? "به علاقه‌مندی‌ها اضافه شد" : "افزودن به علاقه‌مندی‌ها"}
      className={`p-2 rounded-lg hover:bg-gray-50 transition ${className} ${
        liked ? "text-rose-500" : "text-gray-700"
      } ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <Icon />
    </button>
  );
}
