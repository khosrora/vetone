"use client";
import { Btn } from "@repo/ui/btn";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

function FormProfile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <label className="form-control w-full space-y-1">
        <div className="label">
          <span className="label-text-alt text-sm">نام و نام خانوادگی</span>
        </div>
        <input
          type="text"
          placeholder="نام خود را وارد نمایید"
          className="input input-bordered w-full input-md placholder:text-xs border-none"
        />
   
      </label>
      <label className="form-control w-full space-y-1">
        <div className="label">
          <span className="label-text-alt text-sm">کد ملی</span>
        </div>
        <input
          type="text"
          placeholder="کد ملی خود را وارد نمایید"
          className="input input-bordered w-full input-md placholder:text-xs border-none"
        />
      </label>
      </div>
      <div className="flex order-last my-4">
      <Btn className="px-6 w-full md:w-6/12 lg:w-3/12 text-sm my-4 flex order-last"> ویرایش اطلاعات </Btn>
      </div>
    </form>
  );
}

export default FormProfile;
