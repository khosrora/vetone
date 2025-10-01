"use client";
import { Btn } from "@repo/ui/btn";
import { IconPhotoFilled } from "@tabler/icons-react";

import { fetcher, patchDataAPI, postDataAPI } from "@/lib/fetch/fetch_axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { toast } from "sonner";
import { signOut, useSession } from "next-auth/react";
import useSWR from "swr";
import { CentersType } from "@/lib/types/CentersTypes";
import { useRouter } from "next/navigation";
import { BasicInformationType } from "@/lib/types/register_veterinarianTypes";

function StepTwo({
  setStep,
  basicInformation,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  basicInformation: BasicInformationType | undefined;
}) {
  const { push } = useRouter();
  const { data, isLoading } = useSWR(["/veterinary/centers/"], fetcher);

  const { data: session } = useSession();
  const token: string = session?.accessToken!;

  const [date, setDate] = useState<any>();

  const [medicalLicense, setMedicalLicense] = useState<string>();
  const [medicalCenter, setMedicalCenter] = useState<string>();

  const [licenseImage, setLicenseImage] = useState<File | null>(null);
  const [licensePreview, setLicensePreview] = useState<string | null>(null);

  const [idCardImage, setIdCardImage] = useState<File | null>(null);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);

  const [userImage, setUserImage] = useState<File | null>(null);
  const [userImagePreview, setUserImagePreview] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

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

  const handleUserImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setUserImage(file);
      const previewUrl = URL.createObjectURL(file);
      setUserImagePreview(previewUrl);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (
      !licenseImage ||
      !idCardImage ||
      !medicalLicense ||
      !date ||
      !userImage
    ) {
      setLoading(false);
      return toast.error("تمام اطلاعات را وارد کنید.");
    }

    const formData = new FormData();
    const issuance_date = date
      ?.toDate()
      .toLocaleDateString("zh-Hans-CN")
      .replaceAll("/", "-");

    formData.append("license_image", licenseImage);
    formData.append("national_id_image", idCardImage);
    formData.append("issuance_date", issuance_date);
    formData.append("medical_license", medicalLicense);
    formData.append("medical_center", medicalCenter!);
    formData.append("city", basicInformation?.city!);
    formData.append("province", basicInformation?.province!);
    formData.append("latitude", basicInformation?.latitude!);
    formData.append("longitude", basicInformation?.longitude!);
    formData.append("street", basicInformation?.street!);
console.log("👉 token", token);

    try {
      const res = await postDataAPI(
        `/veterinary/register_veterinarian/`,
        formData,
        token
      );
      if (res.status === 201) {
        const userFormData = new FormData();
        userFormData.append("fullName", basicInformation?.fullName!);
        userFormData.append("image", userImage);
        const resUserUpdate = await patchDataAPI(
          `/account/me/`,
          userFormData,
          token
        );
        if (resUserUpdate.status === 200) {
          setLoading(false);
          toast.success("درخواست شما با موفقیت ثبت شد.");
          await signOut({ redirect: false });
          push("/");
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error("دوباره امتحان کنید.");
    }
  };

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      setMedicalCenter(data[0].id);
    }
  }, [isLoading, data]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[14px] font-bold mb-2">تصویر کاربری</p>
            <div className="border-2 border-dashed rounded-full min-h-32 w-32 overflow-hidden space-y-3 flex flex-col justify-center items-center relative">
              {userImagePreview ? (
                <img
                  src={userImagePreview}
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
                onChange={handleUserImageChange}
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-[14px] font-bold mb-2">تصویر مجوز یا تصویر کارت نظام پزشکی فعال</p>
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
          onChange={(e) => setMedicalLicense(e.target.value ?? data[0].id)}
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
      <div className="w-full">
        <div className="label">
          <span className="label-text-alt text-base">نوع خدمت</span>
        </div>
        {!isLoading && (
          <select
            className="select select-md w-full"
            onChange={(e) => setMedicalCenter(e.target.value)}
          >
            {data.map((item: CentersType) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        )}
      </div>
      <Btn className="w-full mt-4" onClick={handleSubmit} loading={loading}>
        ثبت درخواست
      </Btn>
    </div>
  );
}

export default StepTwo;
