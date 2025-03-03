"use client";
import { IconChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Steps from "./Steps";

function Index() {
  const [step, setStep] = useState<number>(1);
  return (
    <div className="mb-12 max-w-lg m-auto">
      {step === 1 ? (
        <div className="flex justify-start items-center my-4 cursor-pointer">
          <IconChevronRight />
          <p className="font-bold">درخواست دامپزشک شدن</p>
        </div>
      ) : (
        <div
          className="flex justify-start items-center my-4 cursor-pointer"
          onClick={() => setStep(1)}
        >
          <IconChevronRight />
          <p className="font-bold">دریافت مدارک</p>
        </div>
      )}
      <Steps step={step} setStep={setStep} />
      <div className="p-4">
        {step === 1 ? (
          <StepOne setStep={setStep} />
        ) : (
          <StepTwo setStep={setStep} />
        )}
      </div>
    </div>
  );
}

export default Index;
