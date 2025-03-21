import { estedad } from "@/lib/local_fonts";
import type { Metadata } from "next";
import "@/app/globals.css";
import "@repo/ui/styles.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "داشبورد دامپزشک",
  description: "داشیورد دامپزشک| دکتر پت و دام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${estedad.variable} bg-zinc-50 min-h-screen`}>
        <div className="max-w-7xl m-auto lg:py-4">
          <Header />
          <div className="grid grid-cols-7 gap-x-6 lg:mt-4">
            <SideBar />
            <div className="col-span-7 lg:col-span-5">
              <div className="mb-32">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
