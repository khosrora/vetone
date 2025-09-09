"use client";
import { province, ProvinceType } from "@/lib/constants/cities";
import { Btn } from "@repo/ui/btn";
import { IconMapPin, IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

function SearchBox() {
  const { push } = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>();

  const [searchProvince, setSearchProvince] = useState<string>("");
  const [provinceValue, setProvinceValue] = useState<string | undefined>();

  function onDismiss() {
    setOpen(false);
  }

  const handleRoute = (fullName: string): void => {
    let url = "/search_veterinarians/?";

    const currentQuery = new URLSearchParams(window.location.search);

    if (fullName) {
      currentQuery.set("fullName", fullName);
    }

    url += currentQuery.toString();

    push(url);
  };

  return (
    <div className="px-4">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-between items-center bg-white p-2 lg:p-4 rounded-md max-w-2xl m-auto">
        <input
          placeholder="جستجو دامپزشک"
          className="p-4 lg:col-span-3 focus:outline-none text-sm placeholder:text-[10px] md:placeholder:text-sm "
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText ? (
          <Btn
            onClick={() => push(`/search_veterinarians?fullName=${searchText}`)}
          >
            <IconSearch /> جستجو
          </Btn>
        ) : (
          <Btn onClick={() => setOpen(true)}>
            <IconMapPin className="md:block" size={16} /> انتخاب استان
          </Btn>
        )}

        <BottomSheet
          className="!z-[9999]"
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
                  placeholder="نام دامپزشک مورد نظر را بنویسید"
                  className="w-full focus:outline-none bg-zinc-100 rounded-md p-2 text-xs"
                  onChange={(e) => handleRoute(e.target.value)}
                />
                {province.map((item: ProvinceType) => {
                  return item.fields.name.includes(searchProvince) ? (
                    <div
                      key={item.pk}
                      className="bg-zinc-100 px-4 py-3 lg:p-3 rounded-md cursor-pointer"
                      onClick={() =>
                        push(`/search_veterinarians?province=${item.pk}`)
                      }
                    >
                      <p>{item.fields.name}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </BottomSheet>
      </div>
    </div>
  );
}

export default SearchBox;
