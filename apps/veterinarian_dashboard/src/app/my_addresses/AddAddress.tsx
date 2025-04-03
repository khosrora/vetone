"use client";
import { IconX } from "@tabler/icons-react";
import { useRef } from "react";
import FormAddress from "./FormAddress";

function AddAddress() {
  
  const closeModal = useRef<HTMLButtonElement | null>(null);

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="flex justify-between items-center">
          <p className="font-bold ">افزودن آدرس</p>
          <IconX
            onClick={() => {
              closeModal?.current?.click();
            }}
          />
        </div>
        <FormAddress closeModal={closeModal}  />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button ref={closeModal}>close</button>
      </form>
    </dialog>
  );
}

export default AddAddress;
