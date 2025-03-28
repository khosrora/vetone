import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

function SortItems() {
  return (
    <div className="">
      <div className="label flex justify-between items-center">
        <span className="label-text">مرتب سازی بر اساس</span>
        <IconChevronDown />
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="form-control">
            <label className="label cursor-pointer flex justify-start gap-x-4">
              <input type="checkbox" className="checkbox checkbox-xs" />
              <span className="label-text">نزدیک ترین نوبت آزاد</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortItems;
