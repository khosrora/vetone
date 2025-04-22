"use client";
import SearchBoxName from "@/components/SearchBoxName";
import {
  IconAdjustmentsAlt,
  IconSortAscendingShapes,
} from "@tabler/icons-react";
import Tags from "./Tags";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import FilterItems from "./FilterItems";
import SortItems from "./SortItems";

enum filterEnum {
  filter = "filter",
  sort = "sort",
}

function FilterBtns() {
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>(filterEnum.filter);
  const handleOpenModal = (typeClicked: string) => {
    setType(typeClicked);
    setOpen(true);
  };

  function onDismiss() {
    setOpen(false);
  }

  return (
    <>
      <div className="px-4 py-6 space-y-4 lg:hidden">
        <SearchBoxName />
        <div className="flex justify-between items-center bg-white rounded-md p-4">
          <div
            className="flex justify-center items-center gap-x-4"
            onClick={() => handleOpenModal(filterEnum.filter)}
          >
            <IconAdjustmentsAlt />
            <p className="font-bold text-sm lg:text-lg">فیلترها</p>
          </div>
          {/* <div className="divider divider-horizontal"></div>
          <div
            className="flex justify-center items-center gap-x-4"
            onClick={() => handleOpenModal(filterEnum.sort)}
          >
            <IconSortAscendingShapes />
            <p className="font-bold text-sm lg:text-lg">مرتب سازی</p>
          </div> */}
        </div>
      </div>
      {/* <div className="lg:hidden">
        <Tags />
      </div> */}
      <BottomSheet
        onDismiss={onDismiss}
        snapPoints={({ minHeight, maxHeight }) => [
          maxHeight / 1,
          maxHeight / 1.5,
        ]}
        open={open}
      >
        <>{type === filterEnum.filter ? <FilterItems onDismiss={onDismiss} /> : <SortItems />}</>
      </BottomSheet>
    </>
  );
}

export default FilterBtns;
