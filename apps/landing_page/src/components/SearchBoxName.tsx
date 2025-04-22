"use client";
import { Btn } from "@repo/ui/btn";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBoxName({
  bgColor,
  onDismiss,
}: {
  bgColor?: string;
  onDismiss?: any;
}) {
  const { push } = useRouter();
  const [searchText, setSearchText] = useState<string>();

  const handleRoute = (fullName: string): void => {
    let url = "/search_veterinarians/?";

    const currentQuery = new URLSearchParams(window.location.search);

    if (fullName) {
      currentQuery.set("fullName", fullName);
    }

    url += currentQuery.toString();

    push(url);
    if (!!onDismiss) {
      onDismiss();
    }
  };

  return (
    <div
      className={`w-full flex justify-between items-center p-2 rounded-md max-w-2xl m-auto ${!!bgColor ? bgColor : "bg-white"}`}
    >
      <input
        placeholder="جستجو دامپزشک"
        className={`p-4 text-xs focus:outline-none ${!!bgColor ? bgColor : "bg-white"}`}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Btn onClick={() => handleRoute(searchText!)}>
        <IconSearch />
      </Btn>
    </div>
  );
}

export default SearchBoxName;
