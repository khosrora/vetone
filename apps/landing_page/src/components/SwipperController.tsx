import React from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function SwipperController({ next, prev }: { next: any; prev: any }) {
  return (
    <div className="flex justify-start items-center gap-x-4">
      <div
        onClick={prev}
        className="bg-zinc-100 flex justify-center items-center cursor-pointer rounded-lg p-2"
      >
        <IconChevronRight size={32} />
      </div>
      <div
        onClick={next}
        className="bg-green_vetone flex justify-center items-center cursor-pointer rounded-lg p-2"
      >
        <IconChevronLeft color="white" size={32} />
      </div>
    </div>
  );
}

export default SwipperController;
