"use client";
import NavigationBottom from "@/components/NavigationBottom";
import PhonePage from "./PhonePage";
import Desktop from "@/components/Desktop";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 hidden md:block">
        داشبورد دامدار
      </h1>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <PhonePage />
      <NavigationBottom />
    </div>
  );
}
