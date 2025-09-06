"use client";
import { BasicInformationType } from "@/lib/types/register_veterinarianTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StepTwo from "./StepTwo";
import TitleBack from "@/components/TitleBack";

function Index() {
  // const { data: session } = useSession();
  // const token: string = session?.accessToken!;
  // const {
  //   data: me,
  //   isLoading,
  //   mutate,
  // } = useSWR(!!token ? [`/veterinary/me/ `, token] : null, fetcher);

  const { back } = useRouter();
  const [basicInformation, setBasicInformation] =
    useState<BasicInformationType>();

  // if (isLoading) return <p>در حال دریافت اطلاعات</p>;
  return (
    <div className="max-w-lg m-auto p-4 space-y-4">
      <TitleBack text="ویرایش اطلاعات دامپزشک" />
      <StepTwo basicInformation={basicInformation} />
    </div>
  );
}

export default Index;
