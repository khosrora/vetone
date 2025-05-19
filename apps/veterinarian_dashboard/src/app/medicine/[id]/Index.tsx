"use client";
import ParsedText from "@/components/ParsedText";
import VeterinarianLoading from "@/components/VeterinarianLoading";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { IconMessageChatbotFilled } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";

function Index({ id }: { id: string }) {
  const { data: session } = useSession();
  const token = session?.token.token;
  const { data: request, isLoading } = useSWR(
    !!token ? [`/veterinary/medicines/${id}`, token] : null,
    fetcher
  );

  if (isLoading || !request) return <VeterinarianLoading />;
  return (
    <div className="bg-white border-l-4 border-green-600 shadow-md rounded-xl p-4 my-6 flex items-start gap-4">
      <div className="bg-green-100 text-green-700 p-2 rounded-full">
        <IconMessageChatbotFilled />
      </div>
      <div className="">
        <p className="text-sm text-black mb-1 font-black">
          نظر هوش مصنوعی درباره این درخواست:
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          <ParsedText content={request.analysis_result} />
        </p>
      </div>
    </div>
  );
}

export default Index;
