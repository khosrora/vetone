import React from "react";

function UserTitle() {
  return (
    <div className="bg-green_vetone p-4 flex justify-start items-center gap-x-3">
      <div className="avatar">
        <div className="ring-white ring-offset-base-100 ring ring-offset-2 w-16 rounded-full">
          <img src="https://avatar.iran.liara.run/public" />
        </div>
      </div>
      <div className="flex flex-col text-white">
        <p className="font-bold">رضا خانزاده</p>
        <small className="text-[10px]">دامدار</small>
      </div>
    </div>
  );
}

export default UserTitle;
