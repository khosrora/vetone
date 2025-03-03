import TitleLink from "@/components/TitleLink";
import { Btn } from "@repo/ui/btn";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function StepOne({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  return (
    <div className="space-y-4">
      <TitleLink title="نوع جاندار" />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center bg-white rounded-md py-2"
          >
            <Image
              src={"/images/animals/goat.png"}
              width={70}
              height={70}
              alt="goat"
            />
            <span className="font-bold">بز</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center bg-white rounded-md p-4">
        <Image
          src={"/images/animals/goat.png"}
          width={50}
          height={50}
          alt="goat"
        />

        <div className="flex justify-between items-center gap-x-3">
          <div className="bg-green_vetone flex justify-center items-center text-white p-2 rounded-md">
            <IconPlus />
          </div>
          <span>1</span>
          <div className="bg-zinc-200 flex justify-center items-center text-white p-2 rounded-md">
            <IconMinus />
          </div>
        </div>
      </div>

      <Btn className="w-full" onClick={() => setStep(2)}>
        {" "}
        مرحله بعد{" "}
      </Btn>
    </div>
  );
}

export default StepOne;
