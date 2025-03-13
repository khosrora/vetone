"use client";
import { Btn } from "@repo/ui/btn";
import React, { Dispatch, SetStateAction } from "react";

function StepOne({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  return (
    <form className="mt-4 space-y-6">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt text-base">نام</span>
        </div>
        <input
          type="text"
          placeholder="نام خود را وارد نمایید"
          className="input input-bordered w-full input-lg placeholder:text-sm"
        /> 
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt text-base">نام خانوادگی</span>
        </div>
        <input
          type="text"
          placeholder="نام خانوادگی خود را وارد نمایید"
          className="input input-bordered w-full input-lg placeholder:text-sm"
        />
    
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text-alt text-base">بیوگرافی</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 input-lg placeholder:text-sm"
          placeholder="بیوگرافی خود را بنویسید"
        ></textarea>
      
      </label>
      <Btn className="w-full" onClick={() => setStep(2)}>
        {" "}
        مرحله بعدی{" "}
      </Btn>
    </form>
  );
}

export default StepOne;
