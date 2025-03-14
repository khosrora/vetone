import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Btn } from "@repo/ui/btn";
type Inputs = {
  example: string;
  exampleRequired: string;
};

function AddRancher() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("example"));
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
            />
         
          </label>
          <label className="form-control w-full sapce-y-2">
            <div className="label">
              <span className="label-text-alt text-sm">شماره تماس</span>
            </div>
            <input
              type="text"
              placeholder="شماره تماس خود را وارد نمایید"
              className="input input-bordered w-full"
            />
          
          </label>
          <Btn className="w-full">ثبت دامدار</Btn>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddRancher;
