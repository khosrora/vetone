import { JSX } from "react";
import {
  IconClipboardList,
  IconBrandGoogleMaps,
  IconWallet,
  IconPaw,
  IconStethoscope,
  IconUser,
  IconEdit,
  IconRobot,
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
    icon: <IconStethoscope />,
    title: "داشبورد دامپزشک",
    link: "/dashboard",
  },
  {
    id: 2,
    icon: <IconUser />,
    title: "ویرایش پروفایل",
    link: "/profile",
  },
  {
    id: 3,
    icon: <IconRobot />,
    title: "هوش مصنوعی دارو",
    link: "/medicine",
  },
  {
    id: 4,
    icon: <IconClipboardList size={20} />,
    title: "درخواست های من",
    link: "/my_requests",
  },
  {
    id: 5,
    icon: <IconWallet size={20} />,
    title: "کیف پول",
    link: "/my_wallet",
  },
  {
    id: 6,
    icon: <IconPaw size={20} />,
    title: "دامدار ها",
    link: "/ranchers",
  },
  {
    id: 7,
    icon: <IconBrandGoogleMaps size={20} />,
    title: "آدرس محل کار",
    link: "/my_addresses",
  },
];
