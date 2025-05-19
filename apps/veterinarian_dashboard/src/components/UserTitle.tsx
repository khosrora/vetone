"use client";
import { IUser } from "@/lib/auth/auth";
import { useSession } from "next-auth/react";
import React from "react";

function UserTitle() {
  const { data: session } = useSession();
  const user: IUser | undefined = session?.user;
  
  return (
    <div className="bg-green_vetone p-6 flex justify-start items-center gap-x-3 rounded-lg">
      <div className="avatar">
        <div className="ring-white ring-offset-base-100 ring ring-offset-1 w-16 rounded-full">
          <img src="https://avatar.iran.liara.run/public" />
        </div>
      </div>
      <div className="flex flex-col text-white space-y-3">
        <p className="font-bold text-lg lg:text-xl">{user?.fullName}</p>
        <small className="text-[12px]">
          {user?.is_veterinarian ? "دامپزشک" : "دامدار"}
        </small>
      </div>
    </div>
  );
}

export default UserTitle;
