import "@/app/globals.css";
import { estedad } from "@/lib/local_fonts";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import Providers from "@/app/Provider";
import { Toaster } from "sonner";
import Script from "next/script";

// ! components
import Header from "@/components/Header";
import NavigationBottom from "@/components/NavigationBottom";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "خانه | وت وان ",
  description:
    "وت وان | رزرو نوبت دامپزشک  , درمان پت , درمان دام , رزرو نوبت برای دام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/ios/ios-128.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="google-site-verification"
          content="ZZbd1DxrAvOLP9YJxqkJ8tPtgQOf0jmmh910GUEUU6Y"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-27JREDZ1V2`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-27JREDZ1V2', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script type="text/javascript">
          {`
                (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "u2quyfaqet");
              `}
        </Script>
      </head>
      <body
        className={`${estedad.variable} bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen`}
      >
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
