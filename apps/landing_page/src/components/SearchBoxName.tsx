"use client";
import { Btn } from "@repo/ui/btn";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

function SearchBoxName({ bgColor }: { bgColor?: string }) {
  const [searchText, setSearchText] = useState<string>();
  return (
    <div
      className={`w-full flex justify-between items-center p-2 rounded-md max-w-2xl m-auto ${!!bgColor ? bgColor : "bg-white"}`}
    >
      <input
        placeholder="جستجو دامپزشک"
        className={`p-4 text-xs focus:outline-none ${!!bgColor ? bgColor : "bg-white"}`}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Btn>
        <IconSearch />
      </Btn>
    </div>
  );
}

export default SearchBoxName;
