"use client";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

function TitleLink({
  title,
  linkText,
  address,
}: {
  title: string;
  linkText?: string;
  address?: string;
}) {
  return (
    <div className="flex justify-between items-center py-4  lg:px-0 lg:py-6 cursor-pointer">
      <p className="font-bold text-lg lg:text-2xl flex items-center gap-x-2">
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

export default TitleLink;
