import {
  IconHeart,
  IconClipboardList,
  IconStethoscope,
  IconUser,
  IconRobot,
  IconWallet,
} from "@tabler/icons-react";
import { JSX } from "react";
import { LINK_LANDINGPAGE } from "@repo/lib/links";

export type LinkItems = {
  id: number;
  icon: JSX.Element;
  title: string;
  link: string;
};

export const linksDashboad: LinkItems[] = [
  {
    id: 1,
    icon: <IconUser size={20} />,
    title: "داشبورد دامدار",
    link: "/dashboard",
  },
  {
    id: 2,
    icon: <IconUser size={20} />,
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
    icon: <IconStethoscope size={20} />,
    title: "درخواست دامپزشک شدن",
    link: `${LINK_LANDINGPAGE}become_a_veterinarian`,
  },
  {
    id: 7,
    icon: <IconHeart size={20} />,
    title: "دامپزشکان مورد علاقه",
    link: "/favorite_veterinarians",
  },
];
