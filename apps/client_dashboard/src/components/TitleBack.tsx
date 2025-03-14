"use client";
import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function TitleBack({ text }: { text: string }) {
  const { back } = useRouter();
  return (
    <div
      className="flex justify-start items-center cursor-pointer py-1 lg:py-4"
      onClick={() => back()}
    >
      <IconChevronRight />
      <p className="font-bold text-base lg:text-xl px-2">{text}</p>
    </div>
  );
}

export default TitleBack;
