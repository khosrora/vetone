import "@/app/globals.css";
import { estedad } from "@/lib/local_fonts";
import "@repo/ui/styles.css";
import type { Metadata } from "next";

// ! components
import Header from "@/components/Header";
import NavigationBottom from "@/components/NavigationBottom";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${estedad.variable} bg-zinc-50`}>
        <div className="min-h-screen overflow-y-scroll  m-auto">
          <Header />
          {children}
          <NavigationBottom />
          <Footer />
        </div>
      </body>
    </html>
  );
}
