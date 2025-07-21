"use client";
import {
  cities,
  CitiesType,
  province,
  ProvinceType,
} from "@/lib/constants/cities";
import { BasicInformationType } from "@/lib/types/register_veterinarianTypes";
import { Btn } from "@repo/ui/btn";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const MapCm = dynamic(() => import("./MapCm"), {
  ssr: false,
});

type Inputs = {
  fullName: string;
  street: string;
};

function StepOne({
  setStep,
  setBasicInformation,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setBasicInformation: Dispatch<
    SetStateAction<BasicInformationType | undefined>
  >;
}) {
  const [latlong, setLatlong] = useState<[number, number] | undefined>();
  const [search, setSearch] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");

  const [cityModal, setCityModal] = useState<boolean>(false);
  const [cityShow, setCityShow] = useState<boolean>(false);

  const [citiesList, setCitiesList] = useState<CitiesType[]>([]);
  const [citiesName, setCitiesName] = useState<string>("");
  const [provinceModal, setProvinceModal] = useState<boolean>(false);
  const [provinceName, setProvinceName] = useState<string>("");

  const [citiesId, setCitiesId] = useState<null | number>(null);
  const [provinceId, setProvinceId] = useState<null | number>(null);

  const handleSetCities = (province: ProvinceType) => {
    setCitiesList([]);
    setProvinceName(province.fields.name);
    const res: CitiesType[] = cities.filter(
      (item) => item.fields.province_id === province.pk
    );
    setCitiesList(res);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!latlong) return;

    let payload: BasicInformationType = {
      fullName: data.fullName,
      street: data.street,
      city: String(citiesId),
      province: String(provinceId),
      latitude: String(latlong[0]),
      longitude: String(latlong[1]),
    };
    setBasicInformation(payload);
    setStep(2);
  };

  return (
    <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text-alt text-base">نام و نام خانوادگی</span>
        </div>
        <input
          type="text"
          placeholder="نام و نام خانوادگی خود را وارد نمایید"
          className="input input-bordered w-full placeholder:text-sm"
          {...register("fullName", {
            required: {
              value: true,
              message: "وارد کردن این فیلد الزامی است",
            },
          })}
        />
      </label>
      <div className="relative">
        <div
          onClick={() => {
            setProvinceModal(!provinceModal);
            setCitiesList([]);
            setCitiesName("");
            setCitiesId(null);
            setCityShow(false);
          }}
          className="border border-zinc-300 p-3.5 cursor-pointer rounded-md bg-white"
        >
          <div className="flex justify-between items-center">
            <small>{provinceName.length === 0 ? "استان" : provinceName}</small>
            {!!provinceModal ? <IconChevronUp /> : <IconChevronDown />}
          </div>
        </div>
        {!!provinceModal && (
          <div className="border border-zinc-300 p-3.5 rounded-md mt-2 absolute left-0 right-0 bg-white z-[999] h-32 overflow-y-scroll">
            <ul>
              <div className="">
                <input
                  className="w-full focus:outline-none p-2 text-xs"
                  type="search"
                  placeholder="نام استان را جست و جو کنید"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {province.map((item) => {
                return item.fields.name.includes(search) ? (
                  <li
                    onClick={() => {
                      setCityShow(true);
                      setProvinceId(item.pk);
                      handleSetCities(item);
                      setProvinceModal(false);
                    }}
                    className="cursor-pointer p-2 hover:bg-zinc-100 text-xs rounded-md"
                    key={item.pk}
                  >
                    {item.fields.name}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        )}
      </div>
      {cityShow && (
        <div className="relative">
          <div
            onClick={() => {
              setCityModal(!cityModal);
            }}
            className="border border-zinc-300 p-3.5 cursor-pointer rounded-md bg-white"
          >
            <div className="flex justify-between items-center">
              <small>{citiesName.length === 0 ? "شهر" : citiesName}</small>
              {!!cityModal ? <IconChevronUp /> : <IconChevronDown />}
            </div>
          </div>
          {!!cityModal && (
            <div className="border border-zinc-300 p-3.5 rounded-md mt-2 absolute z-[999] left-0 right-0 bg-white h-32 overflow-y-scroll">
              <ul>
                <div className="">
                  <input
                    className="w-full focus:outline-none p-2 text-xs"
                    type="search"
                    placeholder="نام شهر را جست و جو کنید"
                    onChange={(e) => setSearchCity(e.target.value)}
                  />
                </div>
                {citiesList.map((item) => {
                  return item.fields.name.includes(searchCity) ? (
                    <li
                      onClick={() => {
                        setCitiesId(item.pk);
                        setCitiesName(item.fields.name);
                        setCityModal(false);
                      }}
                      className="cursor-pointer p-2 hover:bg-zinc-100 text-xs rounded-md"
                      key={item.pk}
                    >
                      {item.fields.name}
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="col-span-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text-alt">آدرس (نام روستا و خیابان ..)</span>
          </div>
          <textarea
            className="input input-bordered p-4 w-full focus:outline-none"
            placeholder="به عنوان مثال : روستا آب اسک خیابان سیران"
            {...register("street", {
              required: {
                value: true,
                message: "وارد کردن این فیلد الزامی است",
              },
            })}
          ></textarea>
        </label>
      </div>
      <MapCm setLatlong={setLatlong} />
      {!!citiesId && (
        <Btn className="w-full" type="submit">
          مرحله بعدی
        </Btn>
      )}
    </form>
  );
}

export default StepOne;
