import React, { Dispatch, SetStateAction } from "react";

function Steps({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div>
      <ul className="steps steps-horizontal w-full">
        <li data-content="" className={`step ${step === 1 && "step-success"}`}>
          اطلاعات اولیه
        </li>
        <li data-content="" className={`step ${step === 2 && "step-success"}`}>
          مدارک
        </li>
      </ul>
    </div>
  );
}

export default Steps;
