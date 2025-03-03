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
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt">نام و نام خانوادگی</span>
        </div>
        <input
          type="text"
          placeholder="نام خود را وارد نمایید"
          className="input input-bordered w-full"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Right label</span>
        </div>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt">کد ملی</span>
        </div>
        <input
          type="text"
          placeholder="کد ملی خود را وارد نمایید"
          className="input input-bordered w-full"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Right label</span>
        </div>
      </label>
      <Btn className="w-full"> ویرایش اطلاعات </Btn>
    </form>
  );
}

export default FormProfile;
