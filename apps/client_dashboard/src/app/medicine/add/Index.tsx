"use client";
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
  const token: string = session?.accessToken!;;
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
    <div className="max-w-xl m-auto p-4">
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="border-2 border-dashed w-full rounded-md py-12 overflow-hidden space-y-3 flex flex-col justify-center items-center relative">
          <p className="text-[14px] font-bold mb-2">
            فایل مورد نظر خود را انتخاب نمایید
          </p>
          {userImagePreview ? (
            <img
              src={userImagePreview}
              alt="ID Card Preview"
              className="max-h-32"
            />
          ) : (
            <>
              <IconPhotoFilled size={36} />
              <p className="text-[10px] lg:text-sm">افزودن عکس</p>
            </>
          )}
          <input
            className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
            type="file"
            onChange={handleUserImageChange}
          />
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text-alt text-sm">توضیحات</span>
          </div>
          <textarea
            className="input w-full h-24 py-4  placeholder:text-xs  focus:ring-green-500 focus:ring-1 focus:outline-none focus:border-none"
            placeholder="توضیحات خود را بنویسید"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </label>
        <Btn
          className="w-full"
          onClick={() => handleSend()}
          loading={loading}
          disabled={loading}
        >
          ثبت
        </Btn>
      </div>
    </div>
  );
}

export default Index;
