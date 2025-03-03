"use client";
import { Btn } from "@repo/ui/btn";
import { IconPictureInPicture } from "@tabler/icons-react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { Dispatch, SetStateAction, useState } from "react";

function StepTwo({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  const [date, setDate] = useState<any>();
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-2">
        <div className="">
          <p className="text-[14px] font-bold mb-2">تصویر مجوز</p>
          <div className="border-2 border-dashed rounded-md min-h-32 flex flex-col justify-center items-center relative">
            <IconPictureInPicture />
            <p className="text-[10px]">افزودن عکس</p>
            <input
              className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
              type="file"
            />
          </div>
        </div>
        <div className="">
          <p className="text-[14px] font-bold mb-2">تصویر کارت ملی</p>
          <div className="border-2 border-dashed rounded-md min-h-32 flex flex-col justify-center items-center relative">
            <IconPictureInPicture />
            <p className="text-[10px]">افزودن عکس</p>
            <input
              className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
              type="file"
            />
          </div>
        </div>
      </div>
      <label className="form-control w-full mt-6">
        <div className="label">
          <span className="label-text-alt">کد مجوز نظام پزشکی</span>
        </div>
        <input
          type="text"
          placeholder="کد مجوز نظام پزشکی خود را وارد نمایید"
          className="input input-bordered w-full"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div>
      </label>
      <div className="w-full">
        <div className="label">
          <span className="label-text-alt">تاریخ صدور</span>
        </div>
        <DatePicker
          value={date}
          onChange={setDate}
          key={`${1}`}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "1.3rem",
            marginTop: ".5rem",
            border: "1px solid rgb(226 232 240)",
          }}
          containerStyle={{
            width: "100%",
          }}
          placeholder="مثال :‌ 1 / 2 / 1400"
          className="rmdp-mobile"
        />
      </div>
      <Btn className="w-full mt-4"> ثبت درخواست </Btn>
    </div>
  );
}

export default StepTwo;
