import { Btn } from "@repo/ui/btn";
import { useRouter } from "next/navigation";
import React from "react";
import { requestsEnum } from "@repo/lib/types";
import { Img } from "@repo/ui/img";
import { veterinarian } from "@repo/lib/titles";
import Image from "next/image";
function ChoiceTypeRequest({ id }: { id: string }) {
  const { push } = useRouter();
  const handleTypeRequest = (type: requestsEnum) => {
    push(`/receive_services?veterinarian=${id}&type=${type}`);
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">نوع درخواست</h3>
        <p className="py-4">نوع درخواست خود را انتخاب نمایید</p>
        <div className="flex justify-between items-center gap-x-4">
          <div className="flex flex-col items-center">
            <Img
              src={"/images/telephon.png"}
              width={2000}
              height={2000}
              alt={"veterinarian"}
              className="rounded-lg w-48 "
            />          <button onClick={() => handleTypeRequest(requestsEnum.tell)} className="text-[10px] md:text-sm btn bg-green_vetone hover:bg-green-900 text-white w-full">
              {" "}
              درخواست تلفنی{" "}
            </button>
          </div>
          <div className="flex flex-col items-center">
            <Img src={"/images/hozori.png"} width={2000} height={2000} alt={veterinarian} className="rounded-lg w-48" />

            <button onClick={() => handleTypeRequest(requestsEnum.InPerson)} className="text-[10px] md:text-sm btn bg-green_vetone hover:bg-green-900 text-white w-full">
              {" "}
              درخواست حضوری{" "}
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ChoiceTypeRequest;
