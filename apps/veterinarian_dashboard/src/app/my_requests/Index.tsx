"use client";
import RequestCard from "@/components/RequestCard";
import TitleBack from "@/components/TitleBack";
import Tabs from "./Tabs";

import { fetcher } from "@/lib/fetch/fetch_axios";
import { requestCardType } from "@/lib/types/request.type";
import { Alert } from "@repo/ui/alert";
import { useSession } from "next-auth/react";
import useSWR from "swr";

import VeterinarianLoading from "../../components/VeterinarianLoading";
export enum typeQuery {
  all = "all",
  inPerson = "inPerson",
}

function Index({ type }: { type: string }) {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const {
    data: requests,
    isLoading,
    mutate,
  } = useSWR(!!token ? [`/veterinary/requests/`, token] : null, fetcher);

  if (isLoading || !requests) {
    return <VeterinarianLoading />;
  }
  return (
    <div className="p-4 space-y-4">
      <TitleBack text="درخواست های من" />
      <Tabs type={type} />
      {requests.length === 0 ? (
        <Alert
          message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
          type="info"
        />
      ) : (
        <>
          <div
            className="flex justify-between items-center py-1 lg:py-3"
            dir="rtl"
          >
            <p className="font-bold text-sm lg:text-lg">وضعیت درخواست:</p>
            <select className="select select-bordered max-w-xs border-none focus:outline-none text-xs lg:text-sm">
              <option>در انتظار تایید</option>
              <option>تایید شده</option>
            </select>
          </div>
          <div className="grid gap-4 grid-cols-1 ">
            {requests.map((item: requestCardType) => (
              <RequestCard
                key={item.id}
                request={item}
                token={token}
                mutate={mutate}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
