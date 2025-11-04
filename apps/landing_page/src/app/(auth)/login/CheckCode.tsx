"use client";
import React, { Dispatch, SetStateAction, useEffect, useState , useRef } from "react";
import { Btn } from "@repo/ui/btn";
import { toast } from "sonner";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { signIn } from "next-auth/react";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";

function CheckCode({
  phoneNumber,
  setPhoneNumber,
}: {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string | null>>;
}) {
  const { push } = useRouter();
  const [otp, setOtp] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const startWebOTP = async () => {
      // بررسی پشتیبانی مرورگر از Web OTP API
      if ("OTPCredential" in window) {
        try {
          abortControllerRef.current = new AbortController();
          
          const otpCredential = await navigator.credentials.get({
            // @ts-ignore
            otp: { transport: ["sms"] },
            signal: abortControllerRef.current.signal,
          });

          if (otpCredential && "code" in otpCredential) {
            // @ts-ignore
            setOtp(otpCredential.code);
            toast.success("کد تایید به صورت خودکار دریافت شد");
          }
        } catch (err: any) {
          // اگر کاربر لغو کرد یا خطایی رخ داد
        }
      }
    };

    startWebOTP();

    // پاکسازی هنگام unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    if (otp.length === 6) {
      setLoad(true);
      signIn("credentials", {
        phoneNumber,
        otp: otp,
        redirect: false,
      })
        .then((res) => {
          if (res?.ok === false || res?.status === 401) {
            setLoad(false);
            return toast.error("کد وارد شده صحیح نمی باشد");
          } else {
            push("/");
            toast.success("خوش آمدید .");
            setLoad(false);
          }
        })
        .catch((err) => {
          toast.error("کد وارد شده صحیح نمی باشد");
          setLoad(false);
        });
    }
  }, [otp]);

  return (
    <div className="w-full flex flex-col justify-start items-start space-y-6">
      <p>کد تایید</p>
      <small>کد تایید به شماره {phoneNumber} ارسال شده است.</small>
      <OtpInput
        value={otp}
        inputType="number"
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props}/>}
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
      <Btn loading={load} className={"w-full"} disabled={true}>
        تایید کد
      </Btn>
    </div>
  );
}

export default CheckCode;
