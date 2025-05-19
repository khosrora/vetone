"use client";

import { LinkItems, linksDashboad } from "@/lib/constants/DashboardItems";
import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";

function SideBar() {
  return (
    <div className="hidden lg:flex col-span-2 rounded-xl bg-[#FFFFFF]">
      <ul className="flex flex-col gap-x-4 w-full ">
        {linksDashboad.map((item: LinkItems) => (
          <li
            key={item.id}
            className=" cursor-pointer p-5 border-b  relative border-solid border-b-gray-100 text-sm hover:bg-green-50 hover:text-green-900 hover:before:contents{` `} hover:before:bg-green-950 hover:before:h-full hover:before:w-1 hover:before:absolute hover:before:right-0 hover:before:inline-block hover:before:top-0"
          >
            <Link
              href={item.link}
              className="flex justify-start items-center gap-x-2"
            >
              {item.icon}
              <span className="text-[14px]">{item.title}</span>
            </Link>
          </li>
        ))}
        <li className="rounded-md flex justify-between items-center p-5 w-full cursor-pointer text-sm">
          <div className="flex justify-start items-center gap-x-3  text-[#C80000]">
            <IconLogout color="#C80000" />
            <p>خروج</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
