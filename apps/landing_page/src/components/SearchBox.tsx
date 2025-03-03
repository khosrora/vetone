"use client";
import { province, ProvinceType } from "@/lib/constants/cities";
import { Btn } from "@repo/ui/btn";
import {
  IconMapPin,
  IconSearch
} from "@tabler/icons-react";
import { useState } from "react";

import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

function SearchBox() {
  const [open, setOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>();

  const [searchProvince, setSearchProvince] = useState<string>("");
  const [provinceValue, setProvinceValue] = useState<string | undefined>();

  function onDismiss() {
    setOpen(false);
  }

  return (
    <div className="w-full flex justify-between items-center bg-white p-4 rounded-md max-w-2xl m-auto">
      <input
        placeholder="جستجو دامپزشک"
        className="p-4 focus:outline-none text-xs"
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText ? (
        <Btn>
          <IconSearch /> جستجو
        </Btn>
      ) : (
        <Btn onClick={() => setOpen(true)}>
          <IconMapPin /> انتخاب استان
        </Btn>
      )}
  
      <BottomSheet
        onDismiss={onDismiss}
        snapPoints={({ minHeight, maxHeight }) => [
          maxHeight / 1,
          maxHeight / 1.5,
        ]}
        open={open}
      >
        <div className="space-y-2 p-4 text-xs">
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
                  <div key={item.pk} className="bg-zinc-100 p-2 rounded-md cursor-pointer">
                    <p>{item.fields.name}</p>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}

export default SearchBox;
