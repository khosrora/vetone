import { estedad } from "@/lib/local_fonts";
import type { Metadata } from "next";
import "@/app/globals.css";
import "@repo/ui/styles.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Provider from "@/app/Provider";
import { Toaster } from "sonner";
import NavigationBottom from "@/components/NavigationBottom";

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
          <NavigationBottom/>
        </Provider>
      </body>
    </html>
  );
}
