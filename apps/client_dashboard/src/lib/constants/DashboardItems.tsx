import {
  IconBriefcase,
  IconLayoutListFilled,
  IconMoneybag,
  IconPaw,
  IconUserFilled,
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
    icon: <IconUserFilled />,
    title: "ویرایش پروفایل",
    link: "/profile",
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
    title: "درخواست پزشک شدن",
    link: `${LINK_LANDINGPAGE}/become_a_veterinarian`,
  },
  {
    id: 4,
    icon: <IconBriefcase />,
    title: "دامپزشکان مورد علاقه",
    link: "/favorite_veterinarians",
  },
];
