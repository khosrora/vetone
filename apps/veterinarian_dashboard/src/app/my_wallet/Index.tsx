"use client";
import TitleBack from "@/components/TitleBack";
import VeterinarianLoading from "@/components/VeterinarianLoading";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { Alert } from "@repo/ui/alert";
import { Btn } from "@repo/ui/btn";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import WalletList from "./WalletList";
import AddPaymentModal from "./AddPaymentModal";

function Index() {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;

  const { data: wallets, isLoading } = useSWR(
    !!token ? ["/wallet/transactions", token] : null,
    fetcher
  );

  if (isLoading || !token) {
    return <VeterinarianLoading />;
  }
  return (
    <>
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
        {!wallets || wallets.length === 0 ? (
          <Alert
            message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
            type="info"
          />
        ) : (
          <WalletList wallets={wallets} />
        )}
      </div>
      <AddPaymentModal />
    </>
  );
}

export default Index;
