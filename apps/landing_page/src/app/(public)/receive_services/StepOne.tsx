"use client";
import Back from "@/components/Back";
import Loader from "@/components/Loader";
import { AnimalsContext, AnimalCard } from "@/lib/context/animals.context";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { AnimalsCardType } from "@/lib/types/AnimalsTypes";
import { Btn } from "@repo/ui/btn";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useContext } from "react";
import useSWR from "swr";

function StepOne({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  const { data: session } = useSession();
  const token: string = session?.token.token!;
  const { data, isLoading } = useSWR(
    !!token ? [`/veterinary/animals/`, token] : null,
    fetcher
  );

  const { animals, addAnimal, incrementQuantity, decrementQuantity } =
    useContext(AnimalsContext);

  if (isLoading || !data) return (<Loader/>);
  return (
    <div className="space-y-4">
      <Back title="نوع جاندار" />
      <div className="grid grid-cols-3 gap-4">
        {data.results.map((item: AnimalsCardType) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center bg-white rounded-md py-2 cursor-pointer hover:bg-zinc-100"
            onClick={() => addAnimal({ id: item.id, name: item.name })}
          >
            <Image
              src={item?.image}
              width={70}
              height={70}
              alt="goat"
            />
            <span className="font-bold">{item.name}</span>
          </div>
        ))}
      </div>

      {animals.map((item: AnimalCard) => (
        <div className="flex justify-between items-center bg-white rounded-md p-4">
          <Image
            src={"/images/animals/goat.png"}
            width={50}
            height={50}
            alt="goat"
          />

          <div className="flex justify-between items-center gap-x-3">
            <div
              className="bg-green_vetone flex justify-center items-center text-white p-2 rounded-md cursor-pointer"
              onClick={() => incrementQuantity(item.id)}
            >
              <IconPlus />
            </div>
            <span>{item.quantity}</span>
            <div
              className={`${item.quantity === 1 ? "bg-red-200" : "bg-zinc-200"} flex justify-center items-center text-white p-2 rounded-md cursor-pointer`}
              onClick={() => decrementQuantity(item.id)}
            >
              {item.quantity === 1 ? (
                <IconTrash className="text-red-600" />
              ) : (
                <IconMinus />
              )}
            </div>
          </div>
        </div>
      ))}
      {animals.length > 0 && (
        <Btn className="w-full" onClick={() => setStep(2)}>
          مرحله بعد
        </Btn>
      )}
    </div>
  );
}

export default StepOne;
