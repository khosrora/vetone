"use client";
import React from "react";
import ChoiceTypeRequest from "./ChoiceTypeRequest";

function BtnAddRequest({
  isLarge,
  idVet,
}: {
  isLarge: boolean;
  idVet: number;
}) {
  return (
    <>
      <div className={`w-full mt-4 ${isLarge ? "lg:hidden mt-14" : ""}`}>
        <div
          onClick={() => {
            (
              document.getElementById("my_modal_2") as HTMLFormElement
            ).showModal();
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
