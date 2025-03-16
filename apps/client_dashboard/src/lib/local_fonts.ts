import localFont from "next/font/local";
export const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/Estedad-ExtraLight.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/dana-light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/dana-medium.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/dana-demiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/dana-bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Estedad-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Estedad-Thin.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Estedad-Black.ttf",
      weight: "500",
    },
  ],
  variable: "--font-morabba",
});
