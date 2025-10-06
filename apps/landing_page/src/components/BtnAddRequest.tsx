"use client";
import React from "react";
import ChoiceTypeRequest from "./ChoiceTypeRequest";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

function BtnAddRequest({
  isLarge,
  idVet,
}: {
  isLarge: boolean;
  idVet: number;
}) {
  const { status } = useSession();

  return (
    <>
      <div className={`w-full mt-4 ${isLarge ? "lg:hidden mt-14" : ""} `}>
        <div
          onClick={() => {
            if (status === "authenticated") {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            } else {
              toast.error("ابتدا وارد وب سایت شوید");
            }
          }}
          className="block bg-green_vetone rounded-md text-white text-center py-3"
        >
          دریافت نوبت مشاوره
        </div>
      </div>
      <ChoiceTypeRequest id={String(idVet)} />
    </>
  );
}

export default BtnAddRequest;
