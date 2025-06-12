"use client";
import RequestCard from "@/components/RequestCard";
import TitleBack from "@/components/TitleBack";
import VeterinarianLoading from "@/components/VeterinarianLoading";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { requestCardType } from "@/lib/types/request.type";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Tabs from "./Tabs";
import { Alert } from "@repo/ui/alert";
export enum typeQuery {
  all = "all",
  inPerson = "inPerson",
  phone = "phone",
}

function Index({ type }: { type: string }) {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const { data: requests, isLoading } = useSWR(
    !!token ? [`/veterinary/requests/`, token] : null,
    fetcher
  );

  if (isLoading || !requests) return <VeterinarianLoading />;
  return (
    <div className="p-4 space-y-4">
      <TitleBack text="درخواست های من" />
      <Tabs type={type} />
      <div className="flex justify-between items-center py-1 lg:py-3" dir="rtl">
        <p className="font-bold text-sm lg:text-lg">وضعیت درخواست:</p>
        <select className="select select-bordered max-w-xs border-none focus:outline-none text-xs lg:text-sm">
          <option>در انتظار تایید</option>
          <option>تایید شده</option>
        </select>
      </div>
      <div className="grid gap-4 grid-cols-1">
        {requests.length === 0 ? (
          <Alert message="در حال حاضر هیچ درخواستی ثبت نشده است" />
        ) : (
          requests.map((item: requestCardType) => (
            <RequestCard key={item.id} request={item} />
          ))
        )}
      </div>
    </div>
  );
}
export default Index;
