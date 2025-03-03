import { useState } from "react";

import {
  cities,
  CitiesType,
  province,
  ProvinceType,
} from "@/lib/constants/cities";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { SubmitHandler, useForm } from "react-hook-form";

import dynamic from "next/dynamic";
import { Btn } from "@repo/ui/btn";

const MapCm = dynamic(() => import("./MapCm"), {
  ssr: false,
});

function FormAddress() {
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

  const [latlong, setLatlong] = useState<[number, number] | undefined>();
  const [loadGetLatLong, setLoadGetLatLong] = useState<boolean>(false);

  const [street_address_2, setStreet_address_2] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {};

  const handleSetCities = (province: ProvinceType) => {
    setCitiesList([]);
    setProvinceName(province.fields.name);
    const res: CitiesType[] = cities.filter(
      (item) => item.fields.province_id === province.pk
    );
    setCitiesList(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="relative">
          <div
            onClick={() => {
              setProvinceModal(!provinceModal);
              setCitiesList([]);
              setCitiesName("");
              setCitiesId(null);
              setCityShow(false);
            }}
            className="border border-zinc-300 p-3.5 cursor-pointer rounded-md"
          >
            <div className="flex justify-between items-center">
              <small>
                {provinceName.length === 0 ? "استان" : provinceName}
              </small>
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
              className="border border-zinc-300 p-3.5 cursor-pointer rounded-md"
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
      </div>

      <div className="divider">ثبت آدرس</div>
      <div className="h-80 w-full">
        <MapCm setLatlong={setLatlong} />
      </div>
      <Btn className="w-full"> ثبت آدرس </Btn>
    </form>
  );
}

export default FormAddress;
