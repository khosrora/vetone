"use client";
import VetCard from "@/components/VetCard";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { Alert } from "@repo/ui/alert";
import useSWR from "swr";
import { PropsSearchParams } from "./page";
import FilterItems from "./FilterItems";
import FilterBtns from "./FilterBtns";
import ChoiceTypeRequest from "@/components/ChoiceTypeRequest";
import { useState } from "react";

function Index({
  searchParams: { fullName, province },
}: {
  searchParams: PropsSearchParams;
}) {
  const [itemId, setItemId] = useState<string>();
  const queryParams = new URLSearchParams();

  queryParams.set("fullName", typeof fullName !== "undefined" ? fullName : "");
  queryParams.set("province", typeof province !== "undefined" ? province : "");

  const { data: initialData, isLoading } = useSWR(
    [`/veterinary/search_veterinarian/?${queryParams.toString()}`],
    fetcher
  );

  return (
    <div className=" my-2 lg:p-0 grid grid-cols-12 gap-4 lg:my-12 max-w-7xl mx-auto">
      <div className="hidden lg:flex lg:col-span-3">
        <FilterItems />
      </div>
      <div className="col-span-12 lg:col-span-9 space-y-4 lg:space-y-0">
        <FilterBtns />
        {!!isLoading ? (
          <> </>
        ) : initialData.length === 0 ? (
          <Alert
            message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
            type="info"
          />
        ) : (
          <>
            {initialData.map((item: VeterinarianCardType) => (
              <VetCard key={item.id} item={item} setItemId={setItemId} />
            ))}
          </>
        )}
      </div>
      <ChoiceTypeRequest id={itemId!} />
    </div>
  );
}

export default Index;
