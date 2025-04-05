"use client";
import {
  constantsItemsNavigation,
  navigationBottomType,
} from "@/lib/constants/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import { LINK_DASHBOARD_CLIENT, LINK_DASHBOARD_VET, LINK_LANDINGPAGE } from "@repo/lib/links";
import { IUser } from "@/lib/auth/auth";
import { toast } from "sonner";
import { Btn } from "@repo/ui/btn";
import { IconUser } from "@tabler/icons-react";

function NavigationBottom() {
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
    <div className="fixed bottom-0 bg-white left-0 right-0 z-[999] rounded-t-2xl shadow-2xl lg:hidden">
      <div className="grid grid-cols-3">
        
        {constantsItemsNavigation.map((item: navigationBottomType) => (
          <Link
            href={item.link}
            className="flex flex-col items-center gap-y-2 p-3"
            key={item.id}
          >
            {item.icon}
            <small>{item.title}</small>
          </Link>
        ))}
        
        {status === "authenticated" ? (
        <button onClick={() => handleRoute()} className=" flex flex-col items-center gap-y-2 p-3 text-xs">
          <IconUser />
          پنل کاربری
        </button>
      ) : (
        <button onClick={() => push("/login")} className=" flex flex-col items-center gap-y-2 p-3 text-xs">
          <IconUser />
          ورود
        </button>
        
      )}
      </div>
    </div>
  );
}

export default NavigationBottom;
