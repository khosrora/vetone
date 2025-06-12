"use client";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Steps from "./Steps";
import { BasicInformationType } from "@/lib/types/register_veterinarianTypes";
import { useRouter } from "next/navigation";

function Index() {
  const { back } = useRouter();
  const [step, setStep] = useState<number>(1);
  const [basicInformation, setBasicInformation] =
    useState<BasicInformationType>();

  return (
    <div className="mb-12 max-w-lg m-auto">
      {step === 1 ? (
        <div
          className="flex justify-start items-center my-4 cursor-pointer"
          onClick={() => back()}
        >
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
          <StepOne
            setStep={setStep}
            setBasicInformation={setBasicInformation}
          />
        ) : (
          <StepTwo setStep={setStep} basicInformation={basicInformation} />
        )}
      </div>
    </div>
  );
}

export default Index;
