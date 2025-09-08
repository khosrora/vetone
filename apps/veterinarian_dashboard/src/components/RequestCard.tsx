"use client";
import { patchDataAPI } from "@/lib/fetch/fetch_axios";
import { requestCardType } from "@/lib/types/request.type";
import { IMAGE_PLACEHOLDER, LINK_DASHBOARD_VET } from "@repo/lib/links";
import { requestsEnum, requestsStateEnum } from "@repo/lib/types";
import { Btn } from "@repo/ui/btn";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "sonner";
import Moment from "./Moment";

function RequestCard({
  request,
  token,
  mutate,
}: {
  request: requestCardType;
  token: string;
  mutate: any;
}) {
  const handleChangeRequestState = async (newState: requestsStateEnum) => {
    try {
      const res = await patchDataAPI(
        `/veterinary/requests/${request.id}/`,
        {
          state: newState,
        },
        token
      );
      if (res.status === 200) {
        toast.success("وضعیت درخواست تغییر کرد");
        mutate();
      }
    } catch (error) {
      toast.error("دوباره امتحان کنید");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 lg:p-6 space-y-4 border border-gray-100">
      {/* بخش بالایی */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={request.image || IMAGE_PLACEHOLDER}
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover shadow-sm border border-gray-200"
            alt="request"
          />
          <div>
            <p className="font-bold text-sm lg:text-base text-gray-800">
              {request.fullname ?? "کاربر ناشناس"}
            </p>
            <p className="text-xs text-gray-500">{request.phone}</p>
          </div>
        </div>

        {request.type === requestsEnum.InPerson ? (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            حضوری
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
            تماس
          </span>
        )}
      </div>

      <hr className="border-gray-100" />

      {/* بخش اطلاعات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">تاریخ:</span>
          <Moment time={request.date} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">وضعیت:</span>
          {request.state === requestsStateEnum.Reject ? (
            <span className="text-red-600 font-semibold">رد شده</span>
          ) : request.state === requestsStateEnum.New ? (
            <span className="text-yellow-500 font-semibold">
              در انتظار تایید
            </span>
          ) : (
            <span className="text-green-600 font-semibold">تایید شده</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">کد رهگیری:</span>
          <span className="font-semibold">{request.tracking_code}</span>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* بخش پایینی */}
      <div className="flex justify-between items-center">
        {request.state === requestsStateEnum.New && (
          <div className="flex gap-2">
            <Btn
              className="rounded-lg"
              onClick={() =>
                handleChangeRequestState(requestsStateEnum.Confirm)
              }
            >
              تایید
            </Btn>
            <Btn
              className="rounded-lg bg-red-600 hover:bg-red-700"
              onClick={() =>
                handleChangeRequestState(requestsStateEnum.Reject)
              }
            >
              رد
            </Btn>
          </div>
        )}
        <Link
          href={`${LINK_DASHBOARD_VET}/my_requests/${request.id}`}
          className="text-xs lg:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          جزئیات درخواست
          <IconCaretLeftFilled size={16} />
        </Link>
      </div>
    </div>
  );
}

export default RequestCard;
