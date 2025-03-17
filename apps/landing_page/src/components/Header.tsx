"use client";
import { Img } from "@repo/ui/img";
import { name_project } from "@repo/lib/titles";
import {
  constantsItemsNavigation,
  navigationBottomType,
} from "@/lib/constants/constants";
import Link from "next/link";
import { Btn } from "@repo/ui/btn";
import { useRouter } from "next/navigation";
import { IconUser } from "@tabler/icons-react";

import { useSession } from "next-auth/react";
import { IUser } from "@/lib/auth/auth";

function Header() {
  const { push } = useRouter();
  const { data: session, status } = useSession();

  const handleRoute = () => {
    console.log(session?.user);
  };

  return (
    <div className="flex justify-between items-center bg-white mb-4 lg:my-8 p-4 lg:bg-white lg:rounded-md max-w-7xl mx-auto">
      <div className="flex justify-start items-center gap-x-4">
        <Img src="/images/logo.png" width={50} height={50} alt={name_project} />
        <small className="font-black text-green_vetone">{name_project}</small>
      </div>
      <ul className="hidden lg:flex gap-x-6">
        {constantsItemsNavigation.map((item: navigationBottomType) => (
          <li key={item.id}>
            <Link
              className="text-[14px] text-gray-800 hover:text-green_vetone"
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {status === "authenticated" ? (
        <Btn onClick={() => handleRoute()}>
          <IconUser />
          پنل کاربری
        </Btn>
      ) : (
        <Btn onClick={() => push("/login")}>
          <IconUser />
          ورود
        </Btn>
      )}
    </div>
  );
}

export default Header;
