import { JSX } from "react";
import {
  IconBriefcase,
  IconLayoutListFilled,
  IconMapPinFilled,
  IconMoneybag,
  IconPaw,
  IconUserFilled,
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
    icon: <IconUserFilled />,
    title: "اطلاعات دامپزشک",
    link: "/",
  },
  {
    id: 2,
    icon: <IconLayoutListFilled />,
    title: "درخواست های من",
    link: "/my_requests",
  },
  {
    id: 3,
    icon: <IconMoneybag />,
    title: "کیف پول",
    link: "/my_wallet",
  },
  {
    id: 5,
    icon: <IconPaw />,
    title: "دامدار ها",
    link: "/ranchers",
  },
  {
    id: 6,
    icon: <IconMapPinFilled />,
    title: "آدرس محل کار",
    link: "/my_addresses",
  },
];
