"use client";
import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function Index() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="px-4 mb-4 max-w-lg m-auto">{step === 1 ? <StepOne  setStep={setStep}/> : <StepTwo />}</div>
  );
}

export default Index;
