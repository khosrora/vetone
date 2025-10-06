"use client";
import TitleBack from "@/components/TitleBack";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { Btn } from "@repo/ui/btn";
import { IconPhotoFilled } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function Index() {
  const router = useRouter();
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const [userImage, setUserImage] = useState<File | null>(null);
  const [userImagePreview, setUserImagePreview] = useState<string | null>(null);
  const [desc, setDesc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleUserImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setUserImage(file);
      const previewUrl = URL.createObjectURL(file);
      setUserImagePreview(previewUrl);
    }
  };

  const handleSend = async () => {
    try {
      setLoading(true);
      if (desc.length === 0) return toast.error(`توضیحات را وارد کنید`);
      const formData = new FormData();
      if (!!userImage) formData.append("image", userImage);
      formData.append("name", desc);
      const res = await postDataAPI(
        `/veterinary/medicines/create/`,
        formData,
        token
      );

      if (res.status === 201) {
        toast.success(`درخواست شما با موفقیت ثبت شد.`);
        router.push("/medicine");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("دوباره امتحان کنید.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <TitleBack text="ثبت درخواست" />
        {/* آپلود عکس */}
        <div className="border-2 border-dashed border-gray-300 hover:border-green-400 transition rounded-xl p-8 flex flex-col items-center justify-center relative cursor-pointer text-center">
          <p className="text-gray-700 font-semibold mb-3 text-sm">
            فایل مورد نظر خود را انتخاب کنید
          </p>
          {userImagePreview ? (
            <img
              src={userImagePreview}
              alt="ID Card Preview"
              className="max-h-40 rounded-lg shadow-md"
            />
          ) : (
            <>
              <IconPhotoFilled size={40} className="text-gray-400 mb-2" />
              <p className="text-xs text-gray-500">افزودن عکس</p>
            </>
          )}
          <input
            className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
            type="file"
            onChange={handleUserImageChange}
          />
        </div>

        {/* توضیحات */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            توضیحات
          </label>
          <textarea
            className="w-full rounded-xl border border-gray-200 p-3 text-sm shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            placeholder="توضیحات خود را بنویسید..."
            rows={4}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        {/* دکمه */}
        <Btn
          className="w-full py-3 rounded-xl font-semibold bg-green-600 hover:bg-green-700 transition text-white"
          onClick={handleSend}
          loading={loading}
          disabled={loading}
        >
          ثبت درخواست
        </Btn>
      </div>
    </div>
  );
}

export default Index;
