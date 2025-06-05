import "@/app/globals.css";
import { estedad } from "@/lib/local_fonts";
import "@repo/ui/styles.css";
import type { Metadata } from "next";

// ! components

export const metadata: Metadata = {
  title: "ورود به پنل کاربری",
  description: "ورود به وت وان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${estedad.variable} bg-zinc-50`}>
        <div className="w-full h-screen flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
