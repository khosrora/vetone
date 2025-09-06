"use client";
import TitleBack from "@/components/TitleBack";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import StepTwo from "./StepTwo";

function Index() {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const { data: me, isLoading } = useSWR(
    !!token ? [`/veterinary/me/ `, token] : null,
    fetcher
  );

  if (isLoading) return <p>در حال دریافت اطلاعات</p>;
  return (
    <div className="max-w-lg m-auto p-4 space-y-4">
      <TitleBack text="ویرایش اطلاعات دامپزشک" />
      <StepTwo basicInformation={me} />
    </div>
  );
}

export default Index;
