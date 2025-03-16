"use client"
import React from "react";
import TitleBack from "@/components/TitleBack";
import {
    IconCalendarEventFilled,
    IconPhone,
    IconRadar2
} from "@tabler/icons-react";
import Rasitem from "@/components/Rasitem";
import MediaThemeTailwindAudio from 'player.style/tailwind-audio/react';
import Imageslider from "@/components/Imageslider";
function Indexreqdetail(){
    return(
        <div>
        <div className="p-4 space-y-4 ">
            <div className="flex justify-between items-center">
                <TitleBack text="جزئیات درخواست" />
                <div className="justify-self-end   bg-yellow-50 text-green-00  p-4 text-[10px] lg:text-xs text-yellow-600">
                    در انتظار پرداخت
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
                                    src="https://avatar.iran.liara.run/public"
                                    className="w-10 h-10 lg:w-16 lg:h-16"
                                />
                                <div className="space-y-2 lg:space-y-3 px-2">
                                    <p className="font-bold text-xs lg:text-lg block"> رضا رستمی</p>
                                </div>
                            </div>
                            <div className="flex gap-x-2 justify-self-end text-green-00  text-[11px] lg:text-xs text-green-700">
                                <IconPhone size={20} />
                                09338933927
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
                                    <p className="text-[12px] lg:text-sm font-semibold">تهران  , تهران , روستا, ادامه ادرس</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* نوع دام*/}
                <div>
                    <h1 className="font-bold py-4 text-sm">نوع دام </h1>
                    <div className="p-4  lg:p-6 bg-white rounded-md space-y-2">
                        {[1, 2, 3].map((item) => (
                            <Rasitem key={item} />
                        ))}
                    </div>
                </div>

                {/*بیماری ها */}
                <div>
                    <h1 className="font-bold py-4 text-sm">نوع دام </h1>
                    <div className="p-4 flex items-center lg:p-6 bg-white gap-x-3 rounded-md text-[11px]">
                        <div className="p-2.5 bg-gray-100 rounden-md">معده درد</div>
                        <div className="p-2.5 bg-gray-100 rounden-md">کوچک شدن معده</div>
                    </div>
                </div>


                {/* توضیحات*/}
                <div>
                    <h1 className="font-bold py-4 text-sm">توضیحات</h1>
                    <div className="p-4 flex items-center lg:p-6 bg-white gap-x-3 rounded-md text-[11px]">
                        <p className="leading-7 text-gray-700">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از برداشت
                        </p>
                    </div>
                </div>
                {/* توضیحات*/}
                <div>
                    <h1 className="font-bold py-4 text-sm ">صدای ضبط شده</h1>
                    <div className="">
                        <MediaThemeTailwindAudio className="w-full">
                            <video
                                slot="media"
                                src="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/low.mp4"
                            ></video>
                        </MediaThemeTailwindAudio>
                    </div>
                </div>
                {/* تصاویر و ویدیوها*/}
                <div>
                    <h1 className="font-bold py-4 text-sm">تصاویر و ویدیو</h1>
                    <div className="w-full">
                    <Imageslider/>
                    </div>
                </div>

            </div>
        </div>


        </div>
    )
}

export default Indexreqdetail