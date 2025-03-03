"use client";

import { LinkItems, linksDashboad } from "@/lib/constants/DashboardItems";
import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";

function SideBar() {
  return (
    <div className="hidden lg:flex col-span-2 p-8 rounded-xl bg-[#FFFFFF]">
      <ul className="flex flex-col gap-y-2 gap-x-4 w-full">
        {linksDashboad.map((item: LinkItems) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className="flex justify-start items-center gap-x-2 cursor-pointer p-4 rounded-md"
            >
              {item.icon}
              <span className="text-[14px]">{item.title}</span>
            </Link>
          </li>
        ))}
        <li className="rounded-md flex justify-between items-center bg-red-500 p-4 w-full cursor-pointer">
          <div className="flex justify-start items-center gap-x-3 text-white">
            <IconLogout />
            <p>خروج</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
