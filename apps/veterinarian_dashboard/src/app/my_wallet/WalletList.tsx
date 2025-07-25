import Moment from "@/components/Moment";
import VeterinarianLoading from "@/components/VeterinarianLoading";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { WalletType, WalletTypeEnum } from "@/lib/types/wallet.type";
import { Alert } from "@repo/ui/alert";
import { IconDownload, IconUpload } from "@tabler/icons-react";
import React from "react";
import useSWR from "swr";

function WalletList({ token }: { token: string }) {
  const { data: wallets, isLoading } = useSWR(
    !!token ? ["/wallet/transactions", token] : null,
    fetcher
  );

  if (isLoading || !token) {
    return <VeterinarianLoading />;
  }

  return (
    <>
      {!wallets || wallets.length === 0 ? (
        <Alert
          message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
          type="info"
        />
      ) : (
        <div className="space-y-4">
          {wallets.map((item: WalletType) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-md w-full"
            >
              <div className="flex justify-start items-center gap-x-2 lg:gap-x-4">
                {item.type === WalletTypeEnum.C ? (
                  <div className="rounded-full p-2 lg:p-3 bg-green_vetone/30">
                    <IconUpload className="text-green_vetone" />
                  </div>
                ) : (
                  <div className="rounded-full p-2 lg:p-3 bg-red-700/30">
                    <IconDownload className="text-red-700" />
                  </div>
                )}
                <div className="flex flex-col justify-start items-start gap-3">
                  {item.type === WalletTypeEnum.C ? (
                    <p className="text-sm text-gray-600">واریز وجه</p>
                  ) : (
                    <p className="text-sm text-red-700">برداشت وجه</p>
                  )}
                  <Moment time={item.date} />
                </div>
              </div>
              <p
                className={`font-bold text-xl ${item.type === WalletTypeEnum.C ? "text-green_vetone" : "text-red-700"}`}
              >
                {new Intl.NumberFormat().format(Number(item.amount))}
                <small
                  className={`font-light text-xs lg:text-sm ${item.type === WalletTypeEnum.C ? "text-green_vetone" : "text-red-700"}`}
                >
                  تومان
                </small>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default WalletList;
