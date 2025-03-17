import React from "react";
import { Btn } from "@repo/ui/btn";
import { IconDeviceMobile,IconHeadset,IconMail,IconMapPins} from "@tabler/icons-react";
function IndexContactus() {
    return (
        <div className="px-4 lg:px-0 gap-y-8 lg:gap-y-0 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 my-12 lg:my-20">
            <form className="space-y-4">
                <h3  className="text-lg lg:text-xl font-bold">ثبت درخواست ارتباط باما</h3>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text-alt text-sm">نام و نام خانوادگی</span>
                    </div>
                    <input
                        type="text"
                        placeholder="نام و نام خانوادگی خود را وارد نمایید"
                        className="input w-full  placeholder:text-xs  focus:ring-green-500 focus:ring-1 focus:outline-none focus:border-none"
                    />

                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text-alt text-sm">شماره تلفن</span>
                    </div>
                    <input
                        type="text"
                        placeholder="شماره تلفن خود را وارد نمایید"
                        className="input w-full  placeholder:text-xs  focus:ring-green-500 focus:ring-1 focus:outline-none focus:border-none"
                    />
                </label>


                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text-alt text-sm">ایمیل</span>
                    </div>
                    <input
                        type="text"
                        placeholder="ایمیل خود را وارد نمایید"
                        className="input w-full  placeholder:text-xs  focus:ring-green-500 focus:ring-1 focus:outline-none focus:border-none"
                    />
                </label>


                <label className="form-control">
                    <div className="label">
                        <span className="label-text-alt text-sm">توضیحات</span>
                    </div>
                    <textarea
                        className="input w-full h-24 py-4  placeholder:text-xs  focus:ring-green-500 focus:ring-1 focus:outline-none focus:border-none"
                        placeholder="توضیحات خود را بنویسید"
                    ></textarea>

                </label>
                <Btn className="w-full">
                    {" "}
                    ثبت درخواست{" "}
                </Btn>
            </form>


            <div className="space-y-8">
            <h3  className="text-lg lg:text-xl font-bold">راه های ارتباطی</h3>
                <div className="flex flex-row gap-x-2 items-center">
                    <IconDeviceMobile size={24}  className="w-6 h-6" />
                    <p className="text-sm">021-33240567</p>
                </div>
              
                <div className="flex flex-row gap-x-2 items-center">
                    <IconHeadset size={24} className="w-8 h-8 lg:w-6 lg:h-6" />
                    <p className="text-xs lg:text-sm">
                    شنبه تا چهارشنبه از 9:00 تا 22:00 - پنجشنبه ها از 9:00 تا 14:00 - به غیر از روزهای تعطیل
                    </p>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                    <IconMail size={24}  className="w-6 h-6"  />
                    <p className="text-sm">info@vetone.ir</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <IconMapPins size={24}  className="w-8 h-8 lg:w-6 lg:h-6" />
                    <p className="text-sm">تبریز سعادت آباد، بالاتر از میدان كاج، خیابان ششم ، پلاك 34، طبقه 3 ،واحد 10</p>
                </div>
            </div>
        </div>
    )
}
export default IndexContactus