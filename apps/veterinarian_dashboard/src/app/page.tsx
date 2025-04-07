"use client"
import PhonePage from "./PhonePage";

import Desktop from "@/components/Desktop";
export default function Home() {
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
