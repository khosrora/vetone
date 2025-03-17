"use client";
import { Btn } from "@repo/ui/btn";
import { IconPhotoFilled } from "@tabler/icons-react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { postDataAPI } from "@/lib/fetch/fetch_axios";

function StepTwo({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  const [date, setDate] = useState<any>();

  const [medicalLicense, setMedicalLicense] = useState<string>();

  const [licenseImage, setLicenseImage] = useState<File | null>(null);
  const [licensePreview, setLicensePreview] = useState<string | null>(null);

  const [idCardImage, setIdCardImage] = useState<File | null>(null);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);

  const handleLicenseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLicenseImage(file);
      const previewUrl = URL.createObjectURL(file);
      setLicensePreview(previewUrl);
    }
  };

  const handleIdCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIdCardImage(file);
      const previewUrl = URL.createObjectURL(file);
      setIdCardPreview(previewUrl);
    }
  };

  const handleSubmit = async () => {
    if (!licenseImage || !idCardImage || !medicalLicense || !date)
      return toast.error("تمام اطلاعات را وارد کنید.");
    const formData = new FormData();
    const issuance_date = date
      ?.toDate()
      .toLocaleDateString("zh-Hans-CN")
      .replaceAll("/", "-");
    formData.append("license_image", licenseImage);
    formData.append("national_id_image", idCardImage);
    formData.append("issuance_date", issuance_date);
    formData.append("medical_license", idCardImage);

    try {
      const res = await postDataAPI(
        `/veterinary/register_veterinarian/`,
        formData
      );
      console.log(res.data);
    } catch (error) {
      toast.error("دوباره امتحان کنید.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-x-2">
        <div className="">
          <p className="text-[14px] font-bold mb-2">تصویر مجوز</p>
          <div className="border-2 border-dashed rounded-md min-h-32 space-y-3 flex flex-col justify-center items-center relative">
            {licensePreview ? (
              <img
                src={licensePreview}
                alt="License Preview"
                className="max-h-32"
              />
            ) : (
              <>
                <IconPhotoFilled size={36} />
                <p className="text-[10px] lg:text-sm">افزودن عکس</p>
              </>
            )}
            <input
              className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
              type="file"
              onChange={handleLicenseChange}
            />
          </div>
        </div>
        <div className="">
          <p className="text-[14px] font-bold mb-2">تصویر کارت ملی</p>
          <div className="border-2 border-dashed rounded-md min-h-32 space-y-3 flex flex-col justify-center items-center relative">
            {idCardPreview ? (
              <img
                src={idCardPreview}
                alt="ID Card Preview"
                className="max-h-32"
              />
            ) : (
              <>
                <IconPhotoFilled size={36} />
                <p className="text-[10px] lg:text-sm">افزودن عکس</p>
              </>
            )}
            <input
              className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
              type="file"
              onChange={handleIdCardChange}
            />
          </div>
        </div>
      </div>
      <label className="form-control w-full mt-6">
        <div className="label">
          <span className="label-text-alt  text-base">کد مجوز نظام پزشکی</span>
        </div>
        <input
          type="text"
          placeholder="کد مجوز نظام پزشکی خود را وارد نمایید"
          className="input  w-full input-lg placeholder:text-sm"
          onChange={(e) => setMedicalLicense(e.target.value)}
        />
      </label>
      <div className="w-full">
        <div className="label">
          <span className="label-text-alt text-base">تاریخ صدور</span>
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
            padding: "1.8rem",
            marginTop: ".5rem",
            border: "1px solid rgb(255 255 255)",
          }}
          containerStyle={{
            width: "100%",
          }}
          placeholder="مثال :‌ 1 / 2 / 1400"
          className="rmdp-mobile"
        />
      </div>
      <Btn className="w-full mt-4" onClick={handleSubmit}>
        ثبت درخواست
      </Btn>
    </div>
  );
}

export default StepTwo;
