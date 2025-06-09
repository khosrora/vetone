"use client";
import { LINK_LANDINGPAGE } from "@repo/lib/links";
import { name_project } from "@repo/lib/titles";
import { Img } from "@repo/ui/img";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="flex justify-between items-center p-4 lg:bg-white lg:rounded-md">
      <Link
        href={LINK_LANDINGPAGE}
        className="flex justify-start items-center gap-x-4"
      >
        <Img src="/images/logo.png" width={50} height={50} alt={name_project} />
        <small className="font-black text-green_vetone">{name_project}</small>
      </Link>

      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://avatar.iran.liara.run/public" />
        </div>
      </div>
    </div>
  );
}

export default Header;
