import VetCard from "@/components/VetCard";
import FilterBtns from "./FilterBtns";
import FilterItems from "./FilterItems";

function page() {
  return (
    <div className=" my-2 lg:p-0 grid grid-cols-12 gap-4 lg:my-12">
      <div className="hidden lg:flex lg:col-span-3">
        <FilterItems />
      </div>
      <div className="col-span-12 lg:col-span-9 space-y-4 lg:space-y-0">
        <FilterBtns />
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, , 6, 7, 8].map((item: any) => (
            <VetCard key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
