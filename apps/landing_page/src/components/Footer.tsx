"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconDeviceWatch, IconMail, IconPhone } from "@tabler/icons-react";
import { Img } from "@repo/ui/img";
import { desc_project_footer, name_project } from "@repo/lib/titles";

function Footer() {
  return (
    <div className="bg-[#FFFFFF] p-8 mb-32 lg:mb-4 rounded-xl mx-auto max-w-7xl">
      <ul className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 justify-between items-start gap-x-4">
        <li className="w-full lg:w-1/4">
          <div className="flex justify-start items-center gap-x-4">
            <Img
              src="/images/logo.png"
              width={30}
              height={30}
              alt={name_project}
            />
            <small className="font-black text-green_vetone">
              {name_project}
            </small>
          </div>
          <p className="text-sm font-light lg:mt-2">{desc_project_footer}</p>
        </li>
        <li className="w-full lg:w-1/4">
          <p className="font-bold">دسترسی های سریع</p>
          <ul className="space-y-4 mt-2">
            <li className="text-xs font-semibold">
              <Link href="/">خانه</Link>
            </li>
            <li className="text-xs font-semibold">
              <Link href={`/contactus`}>ارتباط با ما</Link>
            </li>
            <li className="text-xs font-semibold">
              <Link href={`/aboutus`}>درباره ما</Link>
            </li>
            <li className="text-xs font-semibold">
              <Link href={`/question`}>قوانین مقررات</Link>
            </li>
          </ul>
        </li>
        <li className="w-full lg:w-1/4">
          <p className="font-bold">تماس با ما</p>
          <ul className="space-y-4 mt-2">
            <li className="text-xs font-semibold flex justify-start items-center">
              <IconDeviceWatch stroke={1} />
              <small> 8 صبح تا 5 غروب </small>
            </li>
            <li className="text-xs font-semibold flex justify-start items-center">
              <IconPhone stroke={1} />
              <small> تماس باما: 02144166955 </small>
            </li>
            <li className="text-xs font-semibold flex justify-start items-center">
              <IconMail stroke={1} />
              <small> siranguav@gmail.com </small>
            </li>
          </ul>
        </li>

        <li className="w-full lg:w-1/4">
          <p className="font-bold mb-2">همراه ما باشید</p>
          <ul className="flex justify-start items-center gap-4">
            <li className="text-xs font-semibold">
              <Link href={"https://www.instagram.com/sirangco/"}>
                <Image
                  src={`/shared/Instagram.png`}
                  width={24}
                  height={24}
                  alt="instagram"
                />
              </Link>
            </li>
            <li className="text-xs font-semibold">
              <Link href={"https://www.aparat.com/sirangco"}>
                <Image
                  src={`/shared/aparat.png`}
                  width={24}
                  height={24}
                  alt="meta"
                />
              </Link>
            </li>
            <li className="text-xs font-semibold">
              <Link href={"https://ir.linkedin.com/in/sirang"}>
                <Image
                  src={`/shared/linkdin.png`}
                  width={24}
                  height={24}
                  alt="meta"
                />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
