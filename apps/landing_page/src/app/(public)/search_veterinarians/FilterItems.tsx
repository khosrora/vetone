"use client";
import SearchBoxName from "@/components/SearchBoxName";
import { province, ProvinceType } from "@/lib/constants/cities";
import {
  IconAdjustmentsAlt,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function FilterItems({ onDismiss }: { onDismiss?: any }) {
  const router = useRouter();
  // const [type, setType] = useState<boolean>(false);
  // const [category, setCategory] = useState<boolean>(false);
  const [activity, setActivity] = useState<boolean>(true);
  const [searchProvince, setSearchProvince] = useState<string>("");

  const handleRoute = (provinceValue: string): void => {
    let url = "/search_veterinarians/?";

    const currentQuery = new URLSearchParams(window.location.search);

    if (provinceValue) {
      currentQuery.set("province", provinceValue);
    }

    url += currentQuery.toString();

    router.push(url);
    if (!!onDismiss) {
      onDismiss();
    }
  };

  return (
    <div className="bg-white rounded-md w-full p-4 lg:p-6 space-y-6 sticky top-0">
      <div className="flex gap-x-2">
        <IconAdjustmentsAlt />
        <p>فیلتر</p>
      </div>
      <SearchBoxName bgColor="bg-zinc-100 py-3" onDismiss={onDismiss} />
      {/* <div className="">
        <div
          className={`label flex justify-between items-center cursor-pointer border-b-2 border-solid border-b-gray-100 py-3 ${!!type && "border-b-2 border-solid border-b-gray-100 py-3 my-2"}`}
          onClick={() => {
            setType(!type);
          }}
        >
          <span className="label-text">نوع نوبت گیری</span>
          {type ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {!!type && (
          <div className="space-y-4 lg:space-y-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="form-control">
                <label className="label cursor-pointer flex justify-start gap-x-4">
                  <input
                    type="radio"
                    name="type"
                    className="radio radio-success"
                  />
                  <span className="label-text">حضوری</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="">
        <div
          className={`label flex justify-between items-center cursor-pointer border-b-2 border-solid border-b-gray-100 py-3 ${!!category && "border-b-2 border-solid border-b-gray-200 py-3 my-2"}`}
          onClick={() => {
            setCategory(!category);
          }}
        >
          <span className="label-text">دسته بندی</span>
          {!!category ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {!!category && (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="form-control">
                <label className="label cursor-pointer flex justify-start gap-x-4">
                  <input
                    type="radio"
                    name="category"
                    className="radio radio-success"
                  />
                  <span className="label-text">داروخانه</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div> */}
      <div className="">
        <div
          className={`label flex justify-between items-center cursor-pointer border-b-2 border-solid border-b-gray-100 py-3 ${!!activity && "border-b-2 border-solid border-b-gray-200 py-3 my-2"}`}
          onClick={() => setActivity(!activity)}
        >
          <span className="label-text">استان محل فعالیت</span>
          {!!activity ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {!!activity && (
          <div className="space-y-2 p-2 text-xs max-h-64 overflow-y-scroll">
            <div className="">
              <div className="h-full overflow-y-scroll mt-2 space-y-2">
                <input
                  type="text"
                  placeholder="نام استان مورد نظر را بنویسید"
                  className="w-full focus:outline-none bg-zinc-100 rounded-md p-3 text-xs"
                  onChange={(e) => setSearchProvince(e.target.value)}
                />
                {province.map((item: ProvinceType) => {
                  return item.fields.name.includes(searchProvince) ? (
                    <div key={item.pk} className="form-control">
                      <label className="label cursor-pointer flex justify-start gap-x-4">
                        <input
                          type="radio"
                          name="activity"
                          className="radio radio-success"
                          value={item.pk}
                          // defaultChecked={provinceId === item.pk ? true : false}
                          onChange={(e) => {
                            handleRoute(e.target.value as string);
                          }}
                        />
                        <span className="label-text">{item.fields.name}</span>
                      </label>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="flex justify-between items-center">
        <p>فقط دامپزشکان دارای نوبت باز</p>
        <input type="checkbox" className="toggle toggle-success" />
      </div> */}
    </div>
  );
}

export default FilterItems;
