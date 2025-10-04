"use client";

import { LinkItems, linksDashboad } from "@/lib/constants/DashboardItems";
import { IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { toast } from "sonner";

function SideBar() {
  
  const handleSignOut = async (): Promise<void> => {
    await signOut({ redirect: false });
  };

  const askConfirmLogout = () => {
    // یک toast سفارشی با دکمه‌های تأیید/انصراف
    toast.custom(
      (t) => (
        <div className="rtl text-right p-4 w-80 rounded-xl bg-white shadow border">
          <div className="font-semibold mb-1">تأیید خروج</div>
          <div className="text-sm text-gray-600 mb-4">
            مطمئن هستید می‌خواهید خارج شوید؟
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              className="px-3 py-1.5 rounded-lg border text-gray-700 hover:bg-gray-50"
              onClick={() => toast.dismiss(t)}
            >
              انصراف
            </button>
            <button
              className="px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700"
              onClick={() => {
                toast.dismiss(t);
                const p = handleSignOut();

                // وضعیت خروج (لودینگ/موفق/خطا)
                toast.promise(p, {
                  loading: "در حال خروج…",
                  success: () => ({
                    message: "با موفقیت خارج شدید",
                    duration: 2000,
                  }),
                  error: () => ({
                    message: "خروج با خطا مواجه شد",
                    duration: 3000,
                  }),
                });

                p.then(async () => {
                  await signOut({
                    redirect: false,
                    callbackUrl: "https://vet-one.ir/login",
                  });
                });
              }}
            >
              بله، خروج
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    ); // تا کاربر یکی از دکمه‌ها را بزند باز بماند
  };

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
        <li
          className="rounded-md flex justify-between items-center p-5 w-full cursor-pointer text-sm"
          onClick={askConfirmLogout}
        >
          <div className="flex justify-start items-center gap-x-3 text-[#C80000]">
            <IconLogout color="#C80000" />
            <p>خروج</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
