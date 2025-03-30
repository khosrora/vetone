"use client";
import Link from "next/link";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { requestCardType } from "@/lib/types/request.type";
import { IMAGE_PLACEHOLDER, LINK_DASHBOARD_CLIENT } from "@repo/lib/links";
function RequestCard({ request }: { request: requestCardType }) {
  console.log(request);
  return (
    <div className="p-4 bg-white rounded-md space-y-2">
      <div className="p-0  lg:p-6 bg-white rounded-md space-y-2">
        <div className="grid grid-cols-3 lg:flex justify-between items-center">
          <div className="flex col-span-2 justify-start items-center gap-x-2">
            <img
              src={
                !!request.rancher.image
                  ? request.rancher.image
                  : IMAGE_PLACEHOLDER
              }
              className="w-10 h-10 lg:w-16 lg:h-16"
            />
            <div className="space-y-2 lg:space-y-3 px-4">
              <p className="font-bold text-xs lg:text-lg block">
                {request.veterinarian.fullName}
              </p>
              <p className="text-[10px] lg:tet-sm texxt-gray-500 ">
                {request.veterinarian.experience} سال سابقه
              </p>
            </div>
          </div>
          <div className="justify-self-end badge  bg-green-50 text-green-00  p-4 text-[10px] lg:text-xs text-green-600">
            حضوری
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-1">
          <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4 gap-x-8 items-center py-3 col-span-2">
            <div className="flex flex-row items-center gap-x-3 ">
              <p className="text-[10px] lg:text-xs text-gray-600 font-regular">
                {" "}
                تاریخ:
              </p>
              <p className="text-[10px] lg:text-sm font-semibold">
                {request.date}
              </p>
            </div>
            <div className="flex items-center gap-x-3 justify-self-end md:justify-self-start">
              <p className="text-[11px] lg:text-xs text-gray-600 font-regular">
                وضعیت:
              </p>
              <p className="text-[11px] lg:text-sm text-yellow-500 font-semibold">
                درانتطار تایید
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="text-[11px] lg:text-xs text-gray-600 font-regular">
                کدرهگیری:
              </p>
              <p className="text-[11px] lg:text-sm font-semibold">
                {request.tracking_code}
              </p>
            </div>
            <div className="flex justify-self-end items-center">
              <Link
                href={`${LINK_DASHBOARD_CLIENT}/my_requests/${request.id}`}
                className="text-[11px] lg:text-sm font-bold text-green-700 flex items-center gap-x-2"
              >
                جزئیات درخواست
                <IconCaretLeftFilled />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
