"use client";
import TitleBack from "@/components/TitleBack";
import VeterinarianLoading from "@/components/VeterinarianLoading";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { AiMedicineType } from "@/lib/types/ai.type";
import { Alert } from "@repo/ui/alert";
import { Btn } from "@repo/ui/btn";
import { IconChevronLeft } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

function Index() {
  const router = useRouter();
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const { data: medicines, isLoading } = useSWR(
    !!token ? ["/veterinary/medicines/", token] : null,
    fetcher
  );

  if (isLoading || !medicines) {
    return <VeterinarianLoading />;
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <TitleBack text="درخواست هوش مصنوعی" />
        <Btn
          onClick={() => {
            router.push(`/medicine/add`);
          }}
        >
          سوال جدید
        </Btn>
      </div>
      {medicines && medicines.length === 0 ? (
        <Alert message="پیامی جهت نمایش وجود ندارد." />
      ) : (
        <div className="mt-4 space-y-4">
          {medicines.map((item: AiMedicineType) => (
            <div className="bg-white p-6 rounded-md space-y-2 ">
              <div className="flex justify-start items-center gap-x-2">
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src={item.image} />
                  </div>
                </div>
                <p className="text-sm font-bold">{item.name}</p>
              </div>
              <div className="divider"></div>
              <div className="">
                <span>
                  {!!item?.analysis_result
                    ? item?.analysis_result.length > 100
                      ? item.analysis_result.slice(0, 100) + "..."
                      : item.analysis_result
                    : "در حال ایجاد پاسخ ... "}
                </span>
              </div>
              <div className="divider"></div>
              {!!item.analysis_result && (
                <Link
                  href={`/medicine/${item.id}`}
                  className="flex justify-start items-center gap-x-4 text-sm text-blue-400"
                >
                  <span>مشاهده جزئیات </span>
                  <IconChevronLeft />
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Index;
