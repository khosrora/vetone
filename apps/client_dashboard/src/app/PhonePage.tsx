import UserTitle from "@/components/UserTitle";
import { LinkItems, linksDashboad } from "@/lib/constants/DashboardItems";
import { IconChevronLeft, IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function PhonePage() {
  return (
    <div className="flex flex-col lg:hidden">
      <UserTitle />
      <div className="space-y-4 mt-4 p-4">
        {linksDashboad.map((item: LinkItems) => (
          <Link
            href={item.link}
            key={item.id}
            className="bg-white rounded-md p-4 flex justify-between items-center"
          >
            <div className="flex justify-start items-center gap-x-3">
              {item.icon}
              <p>{item.title}</p>
            </div>
            <IconChevronLeft />
          </Link>
        ))}
        <div className="bg-white rounded-md p-4 flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-3 text-red-500">
            <IconLogout />
            <p>خروج</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonePage;
