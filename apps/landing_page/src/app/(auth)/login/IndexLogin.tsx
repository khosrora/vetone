"use client";
import { Img } from "@repo/ui/img";
import React, { useState } from "react";
import GetPhoneNumber from "./GetPhoneNumber";
import CheckCode from "./CheckCode";
import Link from "next/link";
import { LINK_LANDINGPAGE } from "@repo/lib/links";

function IndexLogin() {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  return (
    <div className="bg-white p-4 rounded-md w-full lg:w-1/3 m-auto space-y-6">
      <div className="flex justify-center items-center">
        <Img src="/images/logo.png" width={80} height={80} alt="لوگو وت وانس" />
      </div>
      <div className="flex justify-center items-center">
        {phoneNumber === null ? (
          <GetPhoneNumber setPhoneNumber={setPhoneNumber} />
        ) : (
          <CheckCode
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber!}
          />
        )}
      </div>
      <span className="text-xs"> ورود به منزله قبول <Link className="text-blue-500" target="_blank" href={`${LINK_LANDINGPAGE}/question`}>قوانین و مقررات</Link> است .</span>
    </div>
  );
}

export default IndexLogin;
