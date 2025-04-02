"use client";
import {
  constantsItemsNavigation,
  navigationBottomType,
} from "@/lib/constants/constants";
import { name_project } from "@repo/lib/titles";
import { Btn } from "@repo/ui/btn";
import { Img } from "@repo/ui/img";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { LINK_DASHBOARD_CLIENT, LINK_DASHBOARD_VET, LINK_LANDINGPAGE } from "@repo/lib/links";
import { IUser } from "@/lib/auth/auth";
import { toast } from "sonner";

function Header() {
  const { push } = useRouter();
  const { data: session, status } = useSession();
  const user: IUser | undefined = session?.user;

  const handleRoute = () => {
    if (user?.is_veterinarian) {
      push(LINK_DASHBOARD_VET);
    } else {
      push(LINK_DASHBOARD_CLIENT);
    }
  };

  const handleRequestVest = () => {
    if (status === "authenticated") {
      push("/become_a_veterinarian");
    } else {
      toast.error("ابتدا وارد شوید.");
    }
  };

  return (
    <div className="flex justify-between items-center bg-white mb-4 lg:my-8 p-4 lg:bg-white lg:rounded-md max-w-7xl mx-auto">
      <Link href={LINK_LANDINGPAGE} className="flex justify-start items-center gap-x-4">
        <Img src="/images/logo.png" width={50} height={50} alt={name_project} />
        <small className="font-black text-green_vetone">{name_project}</small>
      </Link>
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
      <div className="flex items-center gap-x-4">
      <button
          className="text-[14px] bg-white text-green_vetone border border-green_vetone block btn hover:text-white-800 cursor-pointer hover:text-green_vetone mt-[3px]"
          onClick={() => handleRequestVest()}
        >
          دامپزشک شوید
        </button>
        <div className="hidden md:block">
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
     </div>

    </div>
  );
}

export default Header;
