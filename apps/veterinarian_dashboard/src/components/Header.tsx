"use client";
import { errorSession } from "@/lib/auth/auth";
import {
  base_path_vet,
  LINK_LANDINGPAGE,
  LINK_LANDINGPAGE_LOGIN,
} from "@repo/lib/links";
import { name_project } from "@repo/lib/titles";
import { Img } from "@repo/ui/img";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

function Header() {
  const { data: session } = useSession();
  useEffect(() => {
    if (session === null) {
      signOut({ redirect: false, callbackUrl: "https://vet-one.ir/login" });
      window.location.href = LINK_LANDINGPAGE_LOGIN;
    }
    if (session?.error === errorSession.RefreshAccessTokenError) {
      signOut({ redirect: false, callbackUrl: "https://vet-one.ir/login" });
      window.location.href = LINK_LANDINGPAGE_LOGIN;
    }
  }, [session]);

  return (
    <div className="flex justify-between items-center p-4 lg:bg-white lg:rounded-md">
      <Link
        href={LINK_LANDINGPAGE}
        className="flex justify-start items-center gap-x-4"
      >
        <Img
          src={`${base_path_vet}/images/logo.png`}
          width={50}
          height={50}
          alt={name_project}
        />
        <small className="font-black text-green_vetone">{name_project}</small>
      </Link>

      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={session?.user.image!} />
        </div>
      </div>
    </div>
  );
}

export default Header;
