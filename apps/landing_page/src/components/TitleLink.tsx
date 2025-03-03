import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

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
    <div className="flex justify-between items-center p-4">
      <p className="font-bold">{title}</p>
      {!!address && (
        <Link href={address} className="flex justify-end items-center gap-x-2">
          <p className="text-green_vetone">{linkText}</p>
          <IconChevronLeft className="text-green_vetone" />
        </Link>
      )}
    </div>
  );
}

export default TitleLink;
