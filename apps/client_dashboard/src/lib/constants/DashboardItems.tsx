import {
  IconHeart,
  IconClipboardList,
  IconStethoscope,
  IconUser,
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
    icon: <IconUser size={20}/>,
    title: "داشبورد دامدار",
    link: "/dashboard",
  },
  {
    id: 1,
    icon: <IconUser size={20}/>,
    title: "ویرایش پروفایل",
    link: "/profile",
  },
  {
    id: 2,
    icon: <IconClipboardList size={20}/>,
    title: "درخواست های من",
    link: "/my_requests",
  },
  {
    id: 3,
    icon: <IconStethoscope size={20}/>,
    title: "درخواست پزشک شدن",
    link: `${LINK_LANDINGPAGE}become_a_veterinarian`,
  },
  {
    id: 4,
    icon: <IconHeart size={20}/>,
    title: "دامپزشکان مورد علاقه",
    link: "/favorite_veterinarians",
  },
];
