"use client"
import { veterinarian } from "@repo/lib/titles";
import { IconBuildingHospital, IconStethoscope, IconCalendarMonthFilled, IconClipboardTextFilled, IconCashBanknoteFilled, IconUserFilled, IconStarFilled } from "@tabler/icons-react";
import { Img } from "@repo/ui/img";
import Loader from "@/components/Loader";
import useSWR from "swr";
import Error from "./Error";
import { useSession } from "next-auth/react";
import React from "react";
import { authFetcher } from "@/lib/fetch/fetch_api";
import TitleBack from "./TitleBack";
import { requestCardType } from "@/lib/types/request.type";
import { Alert } from "@repo/ui/alert";
import { LINK_DASHBOARD_VET } from "@repo/lib/links";
import Link from "next/link";
import { requestsStateEnum } from "@repo/lib/types";
import VeterinarianLoading from "./VeterinarianLoading";
export default function Desktop() {
    const { data: session } = useSession();
    const token: string = session?.token.token!;
    const shouldFetch = !!token;
    const {
        data,
        isLoading,
        error,
    } = useSWR(
        shouldFetch ? ['dashboar-data', token] : null,
        async ([_, token]) => {
            const [info, request] = await Promise.all([
                authFetcher(['/veterinary/me/', token]),
                authFetcher(['/veterinary/requests/', token]),
            ]);
            return { user: info, request };
        });

    if (isLoading) return <VeterinarianLoading />;
    if (error) return <Error />;
    if (!data) return null;
    const { user, request } = data;
    return (
        <div className="p-4 lg:py-1 ">
            <div className="block lg:hidden">
                <TitleBack text="داشبورد" />
            </div>
            <div className="space-y-6">
                <div className="bg-white block items-center lg:grid lg:grid-cols-10 rounded-lg ">
                    <div className="col-span-2 rounded-lg p-4">
                        <Img src={user?.image || "/images/doctor.jpg"} width={2000} height={2000} alt={veterinarian} className="rounded-lg" />
                    </div>
                    <div className="p-4 col-span-8 space-y-4">
                        <div className="flex gap-x-2 items-center">
                            <IconStethoscope size={20} />
                            <p className="text-base font-bold flex items-center">دکتر <p>{user?.fullName}</p></p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <IconBuildingHospital size={20} />
                            <p className="text-sm text-gray-700">{user?.province},{user.city}</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <IconCalendarMonthFilled size={20} />
                            <p className="text-sm text-gray-700">{user?.license_type} سال سابقه کار</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <p className="text-xs leading-6 text-gray-600">
                                {user?.bio}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 lg:gap-x-6 grid-cols-1 lg:grid-cols-3">
                    <div className="p-4 bg-white rounded-md space-y-4">
                        <div className="flex items-center gap-x-4">
                            <div className="border border-1.5 border-green_vetone bg-green_vetone/10 p-3 rounded-md">
                                <IconClipboardTextFilled color="#1e7000" />
                            </div>
                            <p className="text-sm font-bold">درخواست های دریافتی</p>
                        </div>
                        <div className="gap-x-2 flex items-center">
                            <p className="text-2xl font-bold">{request.results.length}</p>  <p className="text-sm">درخواست</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md space-y-4">
                        <div className="flex items-center gap-x-4">
                            <div className="border border-1.5 border-yellow-600 bg-yellow-600/10 p-3 rounded-md">
                                <IconUserFilled color="#ad7600" />
                            </div>
                            <p className="text-sm font-bold">دامداران من</p>

                        </div>
                        <div className="gap-x-2 flex items-center">
                            <p className="text-2xl font-bold">5,000</p>  <p className="text-sm">نفر</p>
                        </div>
                    </div>
                    <div className="p-4 bg-white space-y-4 rounded-md">
                        <div className="flex items-center gap-x-4">
                            <div className="border border-1.5 border-blue-700 bg-blue-700/10 p-3 rounded-md">
                                <IconCashBanknoteFilled color="#040890" />
                            </div>
                            <p className="text-sm font-bold">امتیاز کسب شده</p>
                        </div>
                        <div className="gap-x-2 flex items-center">
                            <IconStarFilled color="yellow" />
                            <p className="text-2xl font-black">{user.rate}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-lg font-bold my-4">درخواست های دریافتی</h3>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra text-right">
                                <thead>
                                    <tr className="bg-white">
                                        <th className="text-gray-600 text-xs font-light">
                                            نام و نام خانوادگی
                                        </th>
                                        <th className="text-gray-600 text-xs font-light">نوع درخواست</th>
                                        <th className="text-gray-600 text-xs font-light">
                                            آدرس
                                        </th>
                                        <th className="text-gray-600 text-xs font-light">
                                            عملیات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {request.results?.length === 0 ? (
                                        <Alert
                                            message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
                                            type="info"
                                        />
                                    ) : (
                                        request.results.map((item: requestCardType) => (
                                            <tr key={item.id}>
                                                <th>{item.rancher.fullName}</th>
                                                <td>{item.rancher.phone}</td>
                                                <td>
                                                    {item.state === requestsStateEnum.Reject ? (
                                                        <p className="text-[12px] lg:text-sm text-red-500 font-semibold">
                                                            رد شده
                                                        </p>
                                                    ) : request.state === requestsStateEnum.New ? (
                                                        <p className="text-[12px] lg:text-sm text-yellow-500 font-semibold">
                                                            درانتطار تایید
                                                        </p>
                                                    ) : (
                                                        <p className="text-[12px] lg:text-sm text-green-600 font-semibold">
                                                            تایید شده
                                                        </p>
                                                    )}

                                                </td>
                                                <td className="text-green_vetone"><Link href={`${LINK_DASHBOARD_VET}/my_requests/${request.id}`}>مشاهده درخواست</Link></td>
                                            </tr>

                                        ))
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}