"use client";
import { Btn } from "@repo/ui/btn";
import { IconAlertCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

enum StatusPaymentEnum {
  C = "CANCELLED",
  D = "OK",
}

function page({
  searchParams,
}: {
  searchParams: { status: StatusPaymentEnum };
}) {
  const { push } = useRouter();
  const { status } = searchParams;
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-lg w-full flex flex-col justify-center items-center gap-y-4 bg-white p-4">
        {status === StatusPaymentEnum.C ? (
          <>
            <IconAlertCircle color="red" size={32} />
            <p className="text-red-700">پرداخت ناموفق</p>
          </>
        ) : (
          <>
            <IconAlertCircle color="green" size={32} />
            <p className="text-green_vetone">پرداخت با موفقیت انجام شد.</p>
          </>
        )}
        <Btn onClick={() => push(`my_wallet`)}>بازگشت به صفحه کیف پول</Btn>
      </div>
    </div>
  );
}

export default page;
