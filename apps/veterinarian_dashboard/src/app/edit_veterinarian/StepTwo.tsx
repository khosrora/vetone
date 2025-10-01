"use client";

import { Btn } from "@repo/ui/btn";
import { IconPhotoFilled } from "@tabler/icons-react";
import { fetcher, patchDataAPI } from "@/lib/fetch/fetch_axios";
import { CentersType } from "@/lib/types/CentersTypes";
import { BasicInformationType } from "@/lib/types/register_veterinarianTypes";
import { useSession } from "next-auth/react";
import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { toast } from "sonner";
import useSWR from "swr";
import ImageUpload from "@/components/ImageUpload";

type Props = {
  basicInformation?: BasicInformationType;
};

export default function StepTwo({ basicInformation }: Props) {
  const { data, isLoading } = useSWR(["/veterinary/centers/"], fetcher);
  const { data: session, update } = useSession();
  const token = session?.accessToken;

  const [medicalCenter, setMedicalCenter] = useState<string>();

  const [date, setDate] = useState<string | null>(
    basicInformation?.issuance_date ?? null
  );

  const [medicalLicense, setMedicalLicense] = useState<string>(
    basicInformation?.medical_license ?? ""
  );
    const [bio, setBio] = useState<string>(
    basicInformation?.bio ?? ""
  );

  const [licenseImage, setLicenseImage] = useState<File | null>(null);
  const [licensePreview, setLicensePreview] = useState<string | null>(
    basicInformation?.license_image ?? null
  );

  const [idCardImage, setIdCardImage] = useState<File | null>(null);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(
    basicInformation?.national_id_image ?? null
  );

  const [loading, setLoading] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: (f: File | null) => void,
    setPreview: (p: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!token) {
      toast.error("لطفا ابتدا وارد شوید.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    if (licenseImage) formData.append("license_image", licenseImage);
    if (idCardImage) formData.append("national_id_image", idCardImage);
    if (date) formData.append("issuance_date", date);
    if (medicalLicense) formData.append("medical_license", medicalLicense);
    if (bio) formData.append("bio", bio);

    formData.append("medical_center", medicalCenter!);

    try {
      const res = await patchDataAPI(`/veterinary/me/`, formData, token);
      update({ ...session, user: res.data });
      toast.success("اطلاعات با موفقیت ثبت شد.");
    } catch (error) {
      toast.error("دوباره امتحان کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <ImageUpload
          label="تصویر مجوز یا تصویر کارت نظام پزشکی فعال"
          preview={licensePreview}
          onChange={(e) =>
            handleFileChange(e, setLicenseImage, setLicensePreview)
          }
        />
        <ImageUpload
          label="تصویر کارت ملی"
          preview={idCardPreview}
          onChange={(e) =>
            handleFileChange(e, setIdCardImage, setIdCardPreview)
          }
        />
      </div>

      {/* Medical License Code */}
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt text-base">کد مجوز نظام پزشکی</span>
        </div>
        <input
          type="text"
          placeholder="کد مجوز نظام پزشکی خود را وارد نمایید"
          className="input input-lg w-full placeholder:text-sm"
          value={medicalLicense}
          onChange={(e) => setMedicalLicense(e.target.value)}
        />
      </label>

      {/* Issuance Date */}
      <div>
        <div className="label">
          <span className="label-text-alt text-base">تاریخ صدور</span>
        </div>
        <DatePicker
          value={date}
          onChange={(d) => {
            if (Array.isArray(d)) return; // prevent range mode
            setDate(d?.format?.("YYYY-MM-DD") ?? null);
          }}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          format="YYYY-MM-DD"
          style={{
            width: "100%",
            padding: "1.8rem",
            marginTop: ".5rem",
            border: "1px solid rgb(255 255 255)",
          }}
          containerStyle={{ width: "100%" }}
          placeholder="مثال :‌ 1400-02-01"
          className="rmdp-mobile"
        />
      </div>

      {/* Request Type */}
      <div>
        <div className="label">
          <span className="label-text-alt text-base">نوع درخواست</span>
        </div>
        <select
          className="select select-md w-full"
          onChange={(e) => setMedicalCenter(e.target.value)}
        >
          {!isLoading &&
            data.map((item: CentersType) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
        </select>
      </div>
          <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt text-base">بیوگرافی</span>
        </div>
        <textarea
          placeholder="توضیحاتی درباره خود وارد نمایید"
          className="input input-lg w-full placeholder:text-sm h-48 p-4"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
      {/* Submit */}
      <Btn className="w-full mt-4" onClick={handleSubmit} loading={loading}>
        ثبت درخواست
      </Btn>
    </div>
  );
}
