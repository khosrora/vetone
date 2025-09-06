"use client";
import { IUser } from "@/lib/auth/auth";
import { patchDataAPI } from "@/lib/fetch/fetch_axios";
import { Btn } from "@repo/ui/btn";
import { ErrorMessage } from "@repo/ui/errorMessage";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  fullName: string;
};

function FormProfile() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { data: session, update } = useSession();

  const user: IUser = session?.user!;
  const token: string = session?.accessToken!;

  useEffect(() => {
    if (!!user) {
      reset({
        fullName: user.fullName,
      });
    }
  }, [user]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await patchDataAPI("/account/me", data, token);
      if (res.status === 200) {
        update({ ...session, user: res.data });
        toast.success("اطلاعات شما با موفقیت ویرایش شد.");
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-md p-4">
      <div className="">
        <label className="form-control w-full space-y-1">
          <div className="label">
            <span className="label-text-alt text-sm">نام و نام خانوادگی</span>
          </div>
          <input
            type="text"
            placeholder="نام خود را وارد نمایید"
            className="input input-bordered w-full input-md placholder:text-xs border-none bg-zinc-50"
            {...register("fullName", {
              required: { value: true, message: "این فیلد الزامی است" },
            })}
          />
          {errors.fullName && (
            <ErrorMessage message={errors.fullName.message!} />
          )}
        </label>
      </div>
      <div className="flex order-last mt-4">
        <Btn className="px-6 w-full md:w-6/12 lg:w-3/12 text-sm my-4 flex order-last">
          ویرایش اطلاعات
        </Btn>
      </div>
    </form>
  );
}

export default FormProfile;
