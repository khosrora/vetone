"use client";
import TitleBack from "@/components/TitleBack";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { walletCardType } from "@/lib/types/wallets.type";
import { Alert } from "@repo/ui/alert";
import { Btn } from "@repo/ui/btn";
import { IconDownload } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";
import Loader from "@/components/Loader";
import VeterinarianLoading from "@/components/VeterinarianLoading";
function Index() {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;;

  const { data: wallets, isLoading } = useSWR(
    !!token ? ["/wallet/transactions", token] : null,
    fetcher
  );
  if (isLoading || !token) {
    return <VeterinarianLoading />;
  }
  return (
    <div className="p-4">
      <TitleBack text="کیف پول" />
      <div className="md:flex justify-between items-center space-y-6">
        <div className="">
          <h3 className="font-light text-sm py-4">موجودی کیف پول</h3>
          <p className="font-bold text-3xl">
            150,000 <small className="font-light">تومان</small>
          </p>
        </div>
        <div className="grid grid-cols-2 lg:flex justify-between gap-x-4 items-center">
          <Btn className=""> واریز وجه </Btn>
        </div>
      </div>
      <div className="divider"></div>
      <p className="font-bold my-4 text-lg">تراکنشات من</p>
      {wallets.length === 0 ? (
        <Alert
          message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
          type="info"
        />
      ) : (
        <div className="space-y-4">
          {wallets.results.map((item: walletCardType) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-md w-full"
            >
              <div className="flex justify-start items-center gap-x-2 lg:gap-x-4">
                <div className="rounded-full p-2 lg:p-3 bg-green_vetone/30">
                  <IconDownload className="text-green_vetone" />
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <p className="text-sm text-gray-600">واریز وجه</p>
                  <p className="text-sm">1403/10/12 12:30</p>
                </div>
              </div>
              <p className="font-bold text-xl text-green_vetone ">
                150,000{" "}
                <small className="font-light text-xs lg:text-sm text-green-700">
                  تومان
                </small>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Index;
