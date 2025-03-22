"use client";
import React from "react";
import TitleBack from "@/components/TitleBack";
import { Btn } from "@repo/ui/btn";
import AddRancher from "./AddRancher";
import useSWR from "swr";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { useSession } from "next-auth/react";
import { Alert } from "@repo/ui/alert";

function Index() {
  const { data: session } = useSession();
  const token = session?.token.token;

  const { data: ranchers, isLoading } = useSWR(
    !!token ? ["/veterinary/ranchers", token] : null,
    fetcher
  );
  if (isLoading || !token) return <>please wait ...</>;
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <TitleBack text="دامدارها" />
        <Btn
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          افزودن دامدار
        </Btn>
      </div>
      <div className="overflow-x-auto ">
        {ranchers.results.length === 0 ? (
          <Alert
            message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
            type="info"
          />
        ) : (
          <table className="table table-zebra text-right">
            <thead>
              <tr>
                <th className="text-gray-600 text-xs font-light">
                  نام و نام خانوادگی
                </th>
                <th className="text-gray-600 text-xs font-light">موبایل</th>
                <th className="text-gray-600 text-xs font-light">
                  استان و شهر
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black text-xs font-bold">محمد صابری</td>
                <td className="text-black text-xs font-bold">09365483987</td>
                <td className="text-black text-xs font-bold">تهران - تهران</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <AddRancher />
    </div>
  );
}

export default Index;
