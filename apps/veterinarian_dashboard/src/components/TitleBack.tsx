"use client";
import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function TitleBack({ text }: { text: string }) {
  const { back } = useRouter();
  return (
    <div
      className="flex justify-start items-center cursor-pointer"
      onClick={() => back()}
    >
      <IconChevronRight />
      <p className="font-bold">{text}</p>
    </div>
  );
}

export default TitleBack;
