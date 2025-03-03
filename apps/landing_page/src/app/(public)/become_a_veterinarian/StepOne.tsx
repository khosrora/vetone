"use client";
import { Btn } from "@repo/ui/btn";
import React, { Dispatch, SetStateAction } from "react";

function StepOne({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  return (
    <form className="mt-4">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt">نام</span>
        </div>
        <input
          type="text"
          placeholder="نام خود را وارد نمایید"
          className="input input-bordered w-full"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt">نام خانوادگی</span>
        </div>
        <input
          type="text"
          placeholder="نام خانوادگی خود را وارد نمایید"
          className="input input-bordered w-full"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text-alt">بیوگرافی</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="بیوگرافی خود را بنویسید"
        ></textarea>
        <div className="label">
          <span className="label-text-alt">Your bio</span>
        </div>
      </label>
      <Btn className="w-full" onClick={() => setStep(2)}>
        {" "}
        مرحله بعدی{" "}
      </Btn>
    </form>
  );
}

export default StepOne;
