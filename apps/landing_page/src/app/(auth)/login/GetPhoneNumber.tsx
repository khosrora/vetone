import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { Btn } from "@repo/ui/btn";
import { ErrorMessage } from "@repo/ui/errorMessage";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  phone: string;
};

function GetPhoneNumber({
  setPhoneNumber,
}: {
  setPhoneNumber: Dispatch<SetStateAction<string | null>>;
}) {
  const [load, setLoad] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoad(true);
    try {
      const res = await postDataAPI("/account/login_or_register/", {
        phone: data.phone,
      });
      if (res.status === 201) {
        setPhoneNumber(data.phone);
        toast.success("پیامک حاوی کد تایید برای شما ارسال شد");
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);
      toast.error("دوباره امتحان کنید.");
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-start items-start space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="font-bold text-xl">ورود / ثبت نام</p>
      <small className="text-sm lg:text-base">لطفا شماره موبایل خود را وارد نمایید</small>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt text-sm">شماره موبایل</span>
          <span className="label-text">
            {errors.phone && <ErrorMessage message={"این فیلد ضروری است."} />}
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full bg-zinc-100"
          autoFocus
          {...register("phone", {
            required: { value: true, message: "this field is required" },
          })}
        />
        <div className="label">
          <span className="label-text-alt text-[10px]">
            مثال 0912 *** *****
          </span>
        </div>
      </label>
      <Btn disabled={load} loading={load} className={"w-full"}>
        دریافت کد تایید
      </Btn>
    </form>
  );
}

export default GetPhoneNumber;
