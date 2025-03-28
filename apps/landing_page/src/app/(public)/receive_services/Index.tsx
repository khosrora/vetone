"use client";
import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { AnimalsProvider } from "@/lib/context/animals.context";

function Index({ id }: { id: string }) {
  const [step, setStep] = useState<number>(1);

  return (
    <AnimalsProvider>
      <div className="px-4 mb-4 max-w-lg m-auto">
        {step === 1 ? <StepOne setStep={setStep} /> : <StepTwo id={id} />}
      </div>
    </AnimalsProvider>
  );
}

export default Index;
