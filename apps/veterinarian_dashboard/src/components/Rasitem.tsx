import { animalType } from "@/lib/types/request.type";

function Rasitem({ animal }: { animal: animalType }) {
  return (
    <>
      <div className="grid grid-cols-3 lg:flex justify-between items-center">
        <div className="flex col-span-2 justify-start items-center gap-x-2">
          <img src={animal.image} className="w-10 h-10 lg:w-16 lg:h-16" />
          <div className="space-y-2 lg:space-y-3 px-2">
            <p className="font-bold text-xs lg:text-lg block">
              {animal.animal}
            </p>
          </div>
        </div>
        <div className="flex gap-x-1 justify-self-end text-green-00 font-bold  text-sm lg:text-lg text-black items-center">
          {animal.count}
          <p className="text-[10px] lg:text-sm font-light">راس</p>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
export default Rasitem;
