"use client";
import { name_project } from "@repo/lib/titles";
import { Img } from "@repo/ui/img";

function Header() {
  
  return (
    <div className="flex justify-between items-center p-4 lg:bg-white lg:rounded-md">
      <div className="flex justify-start items-center gap-x-4">
        <Img src="/images/logo.png" width={50} height={50} alt={name_project} />
        <small className="font-black text-green_vetone">{name_project}</small>
      </div>

      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://avatar.iran.liara.run/public" />
        </div>
      </div>
    </div>
  );
}

export default Header;
