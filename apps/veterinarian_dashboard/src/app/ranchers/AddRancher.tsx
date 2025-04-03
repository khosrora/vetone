"use client";
import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Btn } from "@repo/ui/btn";
import dynamic from "next/dynamic";
import { ErrorMessage } from "@repo/ui/errorMessage";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const MapCm = dynamic(() => import("./MapCm"), {
  ssr: false,
});

type Inputs = {
  fullName: string;
  phone: string;
};

function AddRancher() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const closeModal = useRef<HTMLButtonElement | null>(null);
  const { data: session } = useSession();
  const token: string = session?.token.token!;
  const [latlong, setLatlong] = useState<[number, number] | undefined>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (!latlong) return;
      setIsLoad(true);
      const payload = {
        fullName: data.fullName,
        phone: data.phone,
        latitude: latlong[0],
        longitude: latlong[1],
      };
      const res = await postDataAPI(`/veterinary/add_rancher/`, payload, token);
      if (res.status === 201) {
        toast.success("کاربر با موفقیت ثبت شد.");
        closeModal?.current?.click();
        window.location.reload()
      }
      setIsLoad(false);
    } catch (error) {
      toast.error("دوباره امتحان کنید");
      closeModal?.current?.click();
      setIsLoad(false);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">افزودن دامدار</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <label className="form-control w-full space-y-2">
            <div className="label">
              <span className="label-text-alt text-sm">نام و نام خانوادگی</span>
            </div>
            <input
              type="text"
              placeholder="نام خود را وارد نمایید"
              className="input input-bordered w-full"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "وارد کردن این فیلد الزامی است",
                },
              })}
            />
          </label>
          <span className="label-text">
            {errors.fullName && (
              <ErrorMessage message={"این فیلد ضروری است."} />
            )}
          </span>
          <label className="form-control w-full sapce-y-2">
            <div className="label">
              <span className="label-text-alt text-sm">شماره تماس</span>
            </div>
            <input
              type="text"
              placeholder="شماره تماس خود را وارد نمایید"
              className="input input-bordered w-full"
              {...register("phone", {
                required: {
                  value: true,
                  message: "وارد کردن این فیلد الزامی است",
                },
              })}
            />
          </label>
          <span className="label-text">
            {errors.phone && <ErrorMessage message={"این فیلد ضروری است."} />}
          </span>
          <MapCm setLatlong={setLatlong} />
          {!!latlong && (
            <Btn className="w-full" loading={isLoad}>
              ثبت دامدار
            </Btn>
          )}
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button ref={closeModal}>close</button>
      </form>
    </dialog>
  );
}

export default AddRancher;
