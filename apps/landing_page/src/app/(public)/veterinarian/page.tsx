import VetCard from "@/components/VetCard";
import { base_api } from "@/lib/fetch/base_api";
import { Alert } from "@repo/ui/alert";
import FilterBtns from "./FilterBtns";
import FilterItems from "./FilterItems";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";

async function getInitialVetData(page: number = 1) {
  const res = await fetch(`${base_api}/veterinary/search_veterinarian/`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function page() {
  const initialData = await getInitialVetData(1);
  
  return (
    <div className=" my-2 lg:p-0 grid grid-cols-12 gap-4 lg:my-12 max-w-7xl mx-auto">
      <div className="hidden lg:flex lg:col-span-3">
        <FilterItems />
      </div>
      <div className="col-span-12 lg:col-span-9 space-y-4 lg:space-y-0">
        <FilterBtns />
        {initialData.results.length === 0 ? (
          <Alert
            message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
            type="info"
          />
        ) : (
          <>
            {initialData.results.map((item: VeterinarianCardType) => (
              <VetCard key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default page;
