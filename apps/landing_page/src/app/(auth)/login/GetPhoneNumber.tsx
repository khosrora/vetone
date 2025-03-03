import { Btn } from "@repo/ui/btn";
import React, { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@repo/ui/errorMessage";

type Inputs = {
  phoneNumber: string;
};

function GetPhoneNumber({
  setPhoneNumber,
}: {
  setPhoneNumber: Dispatch<SetStateAction<string | null>>;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    setPhoneNumber(data.phoneNumber);

  return (
    <form
      className="w-full flex flex-col justify-start items-start space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p>ورود / ثبت نام</p>
      <small>لطفا شماره موبایل خود را وارد نمایید</small>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt">شماره موبایل</span>
          <span className="label-text">
            {errors.phoneNumber && (
              <ErrorMessage message={"این فیلد ضروری است."} />
            )}
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full bg-zinc-100"
          autoFocus
          {...register("phoneNumber", {
            required: { value: true, message: "this field is required" },
          })}
        />
        <div className="label">
          <span className="label-text-alt text-[10px]">
            مثال 0912 *** *****
          </span>
        </div>
      </label>
      <Btn className={"w-full"}>دریافت کد تایید</Btn>
    </form>
  );
}

export default GetPhoneNumber;
