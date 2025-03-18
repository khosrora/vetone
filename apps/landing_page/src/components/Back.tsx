"use client"
import { IconChevronLeft,IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
function Back({
  title,
  linkText,
  address,
}: {
  title: string;
  linkText?: string;
  address?: string;
}) {
  const { back } = useRouter();
  return (
 
    <div className="flex justify-between items-center py-4  lg:px-0 lg:py-6 cursor-pointer" onClick={() => back()}>
      <p className="font-bold text-base lg:text-2xl flex items-center gap-x-2">
        <IconArrowRight/>
        {title}
        </p>
      {!!address && (
        <Link href={address} className="flex justify-end items-center gap-x-2">
          <p className="text-green_vetone texxt-sm">{linkText}</p>
          <IconChevronLeft className="text-green_vetone" />
        </Link>
      )}
    </div>
  );
}

export default Back;
