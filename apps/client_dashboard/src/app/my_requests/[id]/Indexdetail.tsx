"use client";
import Rasitem from "@/components/Rasitem";
import TitleBack from "@/components/TitleBack";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { animalType, requestCardType } from "@/lib/types/request.type";
import { IMAGE_PLACEHOLDER } from "@repo/lib/links";
import { Alert } from "@repo/ui/alert";
import { IconPhone, IconRadar2 } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";
import useSWR from "swr";

function Indexreqdetail({ id }: { id: string }) {
  const { data: session } = useSession();
  const token: string = session?.token.token!;
  const { data, isLoading } = useSWR(
    !!token ? [`/veterinary/requests/${id}/`, token] : null,
    fetcher
  );

  if (isLoading || !data) return <p> please wait ... </p>;
  const request: requestCardType = data;
  return (
    <div>
      <div className="p-4 space-y-4 ">
        <div className="flex justify-between items-center">
          <TitleBack text="جزئیات درخواست" />
          <div className="justify-self-end  bg-yellow-50 text-green-00  p-4 text-[10px] lg:text-xs text-yellow-600">
            در انتظار تایید
          </div>
        </div>

        <div className="space-y-4">
          {/* مشخصات دامدار*/}
          <div>
            <h1 className="font-bold py-4 text-sm">دامدار </h1>
            <div className="p-4  lg:p-6 bg-white rounded-md space-y-2">
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
                  <div className="space-y-2 lg:space-y-3 px-2">
                    <p className="font-bold text-xs lg:text-lg block">
                      {request.rancher.fullName}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2 justify-self-end text-green-00  text-[11px] lg:text-xs text-green-700">
                  <IconPhone size={20} />
                  {request.rancher.phone}
                </div>
              </div>
              <div className="divider"></div>
              <div className="grid grid-cols-1">
                <div className="flex lg:grid-cols-4 gap-4 gap-x-8 items-center py-3 ">
                  <div className="lg:flex lg:items-center lg:space-y-0 lg:gap-x-4 space-y-3">
                    <p className="text-[12px] lg:text-xs text-gray-600 font-regular flex gap-x-2 items-center">
                      <IconRadar2 size={20} color="blue" />
                      آدرس:
                    </p>
                    <Link
                      href={`https://www.google.com/maps/dir/?api=1&origin=&destination=${request.latitude},${request.longitude}&travelmode=driving`}
                      target="_blank"
                      className="text-blue-700"
                    >
                      {" "}
                      مسیریابی{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* نوع دام*/}
          <div>
            <h1 className="font-bold py-4 text-sm">نوع دام </h1>
            <div className="p-4  lg:p-6 bg-white rounded-md space-y-2">
              {request.animals.map((item: animalType) => (
                <Rasitem key={item.id} animal={item} />
              ))}
            </div>
          </div>

          {/*بیماری ها */}
          {/* <div>
            <h1 className="font-bold py-4 text-sm">نوع دام </h1>
            <div className="p-4 flex items-center lg:p-6 bg-white gap-x-3 rounded-md text-[11px]">
              <div className="p-2.5 bg-gray-100 rounden-md">معده درد</div>
              <div className="p-2.5 bg-gray-100 rounden-md">کوچک شدن معده</div>
            </div>
          </div> */}

          {/* توضیحات*/}
          <div>
            <h1 className="font-bold py-4 text-sm">توضیحات</h1>
            <div className="p-4 flex items-center lg:p-6 bg-white gap-x-3 rounded-md text-[11px]">
              <p className="leading-7 text-gray-700">{request.description}</p>
            </div>
          </div>
          {/* توضیحات*/}
          <div>
            <h1 className="font-bold py-4 text-sm ">صدای ضبط شده</h1>
            {!!request.voice ? (
              <div className="">
                <MediaThemeTailwindAudio className="w-full">
                  <video slot="media" src={request.voice}></video>
                </MediaThemeTailwindAudio>
              </div>
            ) : (
              <Alert message="صدا ارسال نشده است" />
            )}
          </div>
          {/* تصاویر و ویدیوها*/}
          <div>
            <h1 className="font-bold py-4 text-sm">تصویر و ویدیو</h1>
            <div className="grid grid-cols-2 gap-4">
              <img src={request.image!} alt="image animal" className="h-full" />
              <video controls className="h-full">
                <source src={request.video!} />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indexreqdetail;
