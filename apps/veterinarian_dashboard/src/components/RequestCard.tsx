"use client";
import { Btn } from "@repo/ui/btn";
import Link from "next/link";

function RequestCard() {
  return (
    <div className="p-4 bg-white rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <img
            src="https://avatar.iran.liara.run/public"
            className="w-12 h-12"
          />
          <p className="font-bold">دکتر رضا رستمی</p>
        </div>
        <div className="badge badge-success p-4 text-[10px] text-white">
          درخواست حضوری
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>
          تاریخ : <small>10 / 08 / 1403</small>
        </p>
        <p className="text-[12px]">
          وضعیت :{" "}
          <small className="text-yellow-400 mr-2">در انتظار تایید</small>
        </p>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between items-center">
        <Btn>تایید درخواست</Btn>
        <Link href={`/my_requests/1`} className="text-blue-500 ">
          جزيیات درخواست
        </Link>
      </div>
    </div>
  );
}

export default RequestCard;
