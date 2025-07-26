"use client";
import TitleBack from "@/components/TitleBack";
import { Alert } from "@repo/ui/alert";
import { Btn } from "@repo/ui/btn";
import { useSession } from "next-auth/react";
import AddPaymentModal from "./AddPaymentModal";
import WalletList from "./WalletList";
import useSWR from "swr";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { Loader } from "@repo/ui/loader";

function Index() {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;

  const { data: wallet } = useSWR(
    !!token ? ["/wallet/wallet", token] : null,
    fetcher
  );

  return (
    <>
      <div className="p-4">
        <TitleBack text="کیف پول" />
        <div className="md:flex justify-between items-center space-y-6">
          <div className="">
            <h3 className="font-light text-sm py-4">موجودی کیف پول</h3>
            {!wallet ? (
              <Loader />
            ) : (
              <p className="font-bold text-3xl">
                {new Intl.NumberFormat().format(Number(wallet.balance))} <small className="font-light">تومان</small>
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 lg:flex justify-between gap-x-4 items-center">
            <Btn
              className=""
              onClick={() => {
                if (document) {
                  (
                    document.getElementById("my_modal_2") as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              واریز وجه{" "}
            </Btn>
          </div>
        </div>
        <div className="divider"></div>
        <p className="font-bold my-4 text-lg">تراکنشات من</p>
        <WalletList token={token} />
      </div>
      <AddPaymentModal />
    </>
  );
}

export default Index;
