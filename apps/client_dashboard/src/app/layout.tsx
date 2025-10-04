import "@/app/globals.css";
import Provider from "@/app/Provider";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import SessionErrorHandler from "@/components/SessionErrorHandler";
import { estedad } from "@/lib/local_fonts";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "پنل کاربری | دامدار",
  description: "پنل کاربری دامدار | پت دار |داشبورد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${estedad.variable} bg-zinc-50 min-h-screen`}>
        <Provider>
          <SessionErrorHandler />
          <Toaster
            richColors
            position="bottom-center"
            toastOptions={{
              style: {
                fontFamily: "var(--font-dana)",
              },
            }}
          />
          <div className="max-w-7xl m-auto lg:py-4">
            <Header />
            <div className="grid grid-cols-7 gap-x-6 lg:mt-4">
              <SideBar />
              <div className="col-span-7 lg:col-span-5">
                <div className="mb-32">{children}</div>
              </div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
