import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
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
              <span className="label-text-alt">شماره تماس</span>
            </div>
            <input
              type="text"
              placeholder="شماره تماس خود را وارد نمایید"
              className="input input-bordered w-full"
            />
            <div className="label">
              <span className="label-text-alt">Bottom Right label</span>
            </div>
          </label>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddRancher;
