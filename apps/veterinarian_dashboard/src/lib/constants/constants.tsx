import {
  IconBuildingHospital,
  IconHomeFilled,
  IconUser
} from "@tabler/icons-react";
import { JSX } from "react";
import {LINK_LANDINGPAGE } from "@repo/lib/links";
export type navigationBottomType = {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
};


export type categoryType = {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
};




export const constantsItemsNavigation: navigationBottomType[] = [
  {
    id: 1,
    title: "خانه",
    link: `${LINK_LANDINGPAGE}`,
    icon: <IconHomeFilled />,
  },
  {
    id: 2,
    title: "دامپزشکان",
    link: `${LINK_LANDINGPAGE}search_veterinarians`,
    icon: <IconBuildingHospital />,
  },
  {
    id: 3,
    title: "پنل کاربری",
    link: "/",
    icon: <IconUser />,
  },
];
