import TitleBack from "@/components/TitleBack";
import UserTitle from "@/components/UserTitle";
import React from "react";
import FormProfile from "@/app/profile/FormProfile";

function page() {
  return (
    <div className="space-y-4 p-4">
      <TitleBack text="پروفایل" />
      <UserTitle />
      <div className="">
        <FormProfile />
      </div>
    </div>
  );
}

export default page;
