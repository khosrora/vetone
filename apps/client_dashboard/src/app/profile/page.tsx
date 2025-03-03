import TitleBack from "@/components/TitleBack";
import UserTitle from "@/components/UserTitle";
import React from "react";
import FormProfile from "./FormProfile";

function page() {
  return (
    <div className="space-y-4">
      <TitleBack text="پروفایل" />
      <UserTitle />
      <div className="p-4">
        <FormProfile />
      </div>
    </div>
  );
}

export default page;
