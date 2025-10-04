import NavigationBottom from "@/components/NavigationBottom";
import UserTitle from "@/components/UserTitle";
import { LinkItems, linksDashboad } from "@/lib/constants/DashboardItems";
import { LINK_LANDINGPAGE } from "@repo/lib/links";
import { IconChevronLeft, IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function PhonePage() {
  const handleSignOut = async (): Promise<void> => {
    await signOut({ redirect: false, callbackUrl: "https://vet-one.ir/login" });
    window.location.href = LINK_LANDINGPAGE;
  };
  return (
    <div className="flex flex-col lg:hidden">
      <UserTitle />
      <div className="mt-4 py-6 ">
        {linksDashboad.map((item: LinkItems) => (
          <Link
            href={item.link}
            key={item.id}
            className="bg-white rounded-md p-6 flex justify-between items-center border-b-2 text-sm border-gray-100"
          >
            <div className="flex justify-start items-center gap-x-3">
              {item.icon}
              <p>{item.title}</p>
            </div>
            <IconChevronLeft />
          </Link>
        ))}
        <div
          className="bg-white rounded-md p-6 flex justify-between text-sm items-center"
          onClick={() => handleSignOut()}
        >
          <div className="flex justify-start items-center gap-x-3 text-red-500">
            <IconLogout />
            <p>خروج</p>
          </div>
        </div>
        <NavigationBottom />
      </div>
    </div>
  );
}

export default PhonePage;
