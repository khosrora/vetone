import {
  IconBuildingHospital,
  IconHomeFilled,
} from "@tabler/icons-react";
import { JSX } from "react";
import { LINK_DASHBOARD_CLIENT, LINK_DASHBOARD_VET, LINK_LANDINGPAGE } from "@repo/lib/links";
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
    link: "/search_veterinarians",
    icon: <IconBuildingHospital />,
  },
 
];
