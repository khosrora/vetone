import "@/app/globals.css";
import { estedad } from "@/lib/local_fonts";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import Providers from "@/app/Provider";
import { Toaster } from "sonner";

// ! components
import Header from "@/components/Header";
import NavigationBottom from "@/components/NavigationBottom";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "خانه | وت وان ",
  description: "وت وان | رزرو نوبت دامپزشک  , درمان پت , درمان دام , رزرو نوبت برای دام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${estedad.variable} bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen`}>
        <Providers>
          <Toaster
            richColors
            position="bottom-center"
            toastOptions={{
              style: {
                fontFamily: "var(--font-dana)",
              },
            }}
          />
          <div className="min-h-screen overflow-y-scroll  m-auto">
            <Header />
            {children}
            <NavigationBottom />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
