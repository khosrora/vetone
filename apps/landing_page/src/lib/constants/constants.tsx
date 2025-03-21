import {
  IconAppsFilled,
  IconBuildingHospital,
  IconHomeFilled,
} from "@tabler/icons-react";
import { JSX } from "react";

export type navigationBottomType = {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
};

export const constantsItemsNavigation: navigationBottomType[] = [
  {
    id: 1,
    title: "خانه",
    link: "/",
    icon: <IconHomeFilled />,
  },
  {
    id: 2,
    title: "دامپزشکان",
    link: "/veterinarian",
    icon: <IconBuildingHospital />,
  },
];
