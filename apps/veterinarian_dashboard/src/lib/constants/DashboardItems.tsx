import { JSX } from "react";
import {
  IconClipboardList,
  IconBrandGoogleMaps,
  IconWallet,
  IconPaw,
  IconStethoscope,
} from "@tabler/icons-react";

export type LinkItems = {
  id: number;
  icon: JSX.Element;
  title: string;
  link: string;
};

export const linksDashboad: LinkItems[] = [
  {
    id: 1,
    icon: <IconStethoscope/>,
    title: "اطلاعات دامپزشک",
    link: "/",
  },
  {
    id: 2,
    icon: <IconClipboardList size={20}/>,
    title: "درخواست های من",
    link: "/my_requests",
  },
  {
    id: 3,
    icon: <IconWallet size={20}/>,
    title: "کیف پول",
    link: "/my_wallet",
  },
  {
    id: 5,
    icon: <IconPaw size={20}/>,
    title: "دامدار ها",
    link: "/ranchers",
  },
  {
    id: 6,
    icon: <IconBrandGoogleMaps size={20}/>,
    title: "آدرس محل کار",
    link: "/my_addresses",
  },
];
