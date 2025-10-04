import NavigationBottom from "@/components/NavigationBottom";
import { LinkItems, linksDashboad } from "@/lib/constants/DashboardItems";
import { base_path_vet, LINK_LANDINGPAGE } from "@repo/lib/links";
import { Img } from "@repo/ui/img";
import { IconChevronLeft, IconLogout } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { veterinarian } from "@repo/lib/titles";

function PhonePage() {
  const { data: session } = useSession();

  const handleSignOut = async (): Promise<void> => {
    await signOut({ redirect: true, callbackUrl: "https://vet-one.ir/login" });
    window.location.href = LINK_LANDINGPAGE;
  };

  return (
    <div className="flex flex-col lg:hidden">
      <div className="bg-green_vetone p-4 flex justify-start items-center gap-x-3">
        <div className="avatar">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Img
                src={
                  session?.user.image || `${base_path_vet}/images/doctor.jpg`
                }
                width={2000}
                height={2000}
                alt={veterinarian}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-bold text-lg">
            {session?.user.fullName}{" "}
            <Link
              className="mr-2 text-blue-900 text-xs underline"
              href={"/profile"}
            >
              ویرایش
            </Link>
          </p>
          {/* <small className="text-[12px]">دامپزشک</small> */}
        </div>
      </div>
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
