import { base_api } from "@/lib/fetch/base_api";
import FilterBtns from "./FilterBtns";
import FilterItems from "./FilterItems";
import InfiniteScrollWrapper from "./InfiniteScrollWrapper";
import { Alert } from "@repo/ui/alert";

async function getInitialVetData(page: number = 1) {
  const res = await fetch(
    `${base_api}/veterinary/search_veterinarian/?page=${page}`
  );
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
          <InfiniteScrollWrapper initialData={initialData.results} />
        )}
      </div>
    </div>
  );
}

export default page;
