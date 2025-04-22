import { Btn } from "@repo/ui/btn";
import { useRouter } from "next/navigation";
import React from "react";
import { requestsEnum } from "@repo/lib/types";

function ChoiceTypeRequest({ id }: { id: string }) {
  const { push } = useRouter();
  const handleTypeRequest = (type: requestsEnum) => {
    push(`/receive_services?veterinarian=${id}?type=${type}`);
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
        <div className="flex justify-between items-center">
          <Btn onClick={() => handleTypeRequest(requestsEnum.tell)}>
            {" "}
            درخواست تلفنی{" "}
          </Btn>
          <Btn onClick={() => handleTypeRequest(requestsEnum.InPerson)}>
            {" "}
            درخواست حضوری{" "}
          </Btn>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ChoiceTypeRequest;
