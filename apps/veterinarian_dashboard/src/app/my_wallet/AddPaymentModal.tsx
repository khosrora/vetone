import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { Btn } from "@repo/ui/btn";
import { ErrorMessage } from "@repo/ui/errorMessage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  pay_amount: string;
};

function AddPaymentModal() {
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const res = await postDataAPI(`/zarinpal/make_transaction/`, data, token);
      if (res.status === 201) {
        setLoading(false);
        push(res.data.detail);
        reset();
      }
    } catch (error) {
      setLoading(false);
      toast.error("دوباره امتحان کنید.");
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">پرداخت</h3>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full space-y-1">
            <div className="label">
              <span className="label-text-alt text-sm">مبلغ را وارد کنید</span>
            </div>
            <input
              type="text"
              placeholder="مثال : ۲۰۰۰"
              className="input input-bordered w-full input-md placholder:text-xs"
              {...register("pay_amount", {
                required: { value: true, message: "این فیلد الزامی است" },
              })}
            />
            {errors.pay_amount && (
              <ErrorMessage message={errors.pay_amount.message!} />
            )}
          </label>
          <div className="flex order-last my-4">
            <Btn
              loading={loading}
              className="px-6 w-full text-sm my-4 flex order-last"
            >
              افزایش کیف پول
            </Btn>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddPaymentModal;
