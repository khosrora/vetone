"use client"
import PhonePage from "./PhonePage";
import Loader from "@/components/Loader";
import Desktop from "@/components/Desktop";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") return <Loader />;
  const user = session!.user;
  return (
    <div>
      <div  className="hidden lg:block">
      <Desktop/>
      </div>
      <div className="min-h-screen overflow-y-scroll">
        <PhonePage />
      </div>
    </div>
  );
}
