"use client";
import SearchBoxName from "@/components/SearchBoxName";
import { province, ProvinceType } from "@/lib/constants/cities";
import {
  IconChevronDown,
  IconChevronUp,
  IconFilter,
} from "@tabler/icons-react";
import React, { useState } from "react";

function FilterItems() {
  const [type, setType] = useState<boolean>(false);
  const [category, setCategory] = useState<boolean>(false);
  const [activity, setActivity] = useState<boolean>(false);
  const [searchProvince, setSearchProvince] = useState<string>("");

  return (
    <div className="bg-white rounded-md w-full p-4 space-y-6">
      <div className="flex gap-x-2">
        <IconFilter />
        <p>فیلتره</p>
      </div>
      <SearchBoxName bgColor="bg-zinc-100" />
      <div className="">
        <div
          className={`label flex justify-between items-center cursor-pointer ${!!type && "bg-zinc-100 rounded-md"}`}
          onClick={() => {
            setType(!type);
          }}
        >
          <span className="label-text">نوع نوبت گیری</span>
          {type ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {!!type && (
          <div className="space-y-4">
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
          className={`label flex justify-between items-center cursor-pointer ${!!category && "bg-zinc-100 rounded-md"}`}
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
      </div>
      <div className="">
        <div
          className={`label flex justify-between items-center cursor-pointer ${!!activity && "bg-zinc-100 rounded-md"}`}
          onClick={() => setActivity(!activity)}
        >
          <span className="label-text">استان محل فعالیت</span>
          {!!activity ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {!!activity && (
          <div className="space-y-2 p-4 text-xs max-h-64 overflow-y-scroll">
            <div className="">
              <div className="h-full overflow-y-scroll mt-2 space-y-2">
                <input
                  type="text"
                  placeholder="نام استان مورد نظر را بنویسید"
                  className="w-full focus:outline-none bg-zinc-100 rounded-md p-2 text-xs"
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
      <div className="flex justify-between items-center">
        <p>فقط دامپزشکان دارای نوبت باز</p>
        <input type="checkbox" className="toggle toggle-success" />
      </div>
    </div>
  );
}

export default FilterItems;
