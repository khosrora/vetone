"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Btn } from "@repo/ui/btn";
import OtpInput from "react-otp-input";

function CheckCode({
  phoneNumber,
  setPhoneNumber,
}: {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string | null>>;
}) {
  const [otp, setOtp] = useState<string>("");
  return (
    <div className="w-full flex flex-col justify-start items-start space-y-6">
      <p>کد تایید</p>
      <small>کد تایید به شماره {phoneNumber} ارسال شده است.</small>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
        containerStyle={{
          width: "100%",
          direction: "ltr",
        }}
        inputStyle={{
          width: "20%",
          height: "50px",
          margin: 2,
          outline: "none",
          borderRadius: 5,
          backgroundColor: "#F8FBF8",
        }}
      />
      <div className="flex justify-center items-center w-full">
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setPhoneNumber(null)}
        >
          ویرایش شماره موبایل
        </span>
      </div>
      <Btn className={"w-full"} disabled={otp.length === 6 ? false : true}>
        تایید کد
      </Btn>
    </div>
  );
}

export default CheckCode;
