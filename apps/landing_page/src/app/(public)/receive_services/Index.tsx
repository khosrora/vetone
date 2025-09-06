"use client";
import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { AnimalsProvider } from "@/lib/context/animals.context";

function Index({
  veterinarianId,
  type,
}: {
  veterinarianId: string;
  type: string;
}) {
  const [step, setStep] = useState<number>(1);

  return (
    <AnimalsProvider>
      <div className="px-4 mb-4 max-w-lg m-auto">
        {step === 1 ? (
          <StepOne veterinarianId={veterinarianId} setStep={setStep} />
        ) : (
          <StepTwo veterinarianId={veterinarianId} type={type} />
        )}
      </div>
    </AnimalsProvider>
  );
}

export default Index;
