"use client";
import React from "react";
import TitleBack from "@/components/TitleBack";
import { Btn } from "@repo/ui/btn";
import AddRancher from "./AddRancher";
import useSWR from "swr";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { useSession } from "next-auth/react";
import { Alert } from "@repo/ui/alert";
import { RanchersCardTypes } from "@/lib/types/ranchers.type";
import Link from "next/link";
import Loader from "@/components/Loader";
import VeterinarianLoading from "@/components/VeterinarianLoading";
function Index() {
  const { data: session } = useSession();
  const token = session?.token.token;

  const { data: ranchers, isLoading } = useSWR(
    !!token ? ["/veterinary/ranchers/", token] : null,
    fetcher
  );

  if (isLoading || !token) {
    return <VeterinarianLoading />;
  }
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
        {ranchers.length === 0 ? (
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
              {ranchers.map((item: RanchersCardTypes) => (
                <tr>
                  <td className="text-black text-xs font-bold">
                    {item.fullName}
                  </td>
                  <td className="text-black text-xs font-bold">{item.phone}</td>
                  <td className="text-blue-400 text-xs font-bold">
                    <Link
                      href={`https://www.google.com/maps/dir/?api=1&origin=&destination=${item.latitude},${item.longitude}&travelmode=driving`}
                      target="_blank"
                    >
                      {" "}
                      مسیریابی{" "}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <AddRancher />
    </div>
  );
}

export default Index;
