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
    title: "دامپزشک",
    link: "/",
    icon: <IconBuildingHospital />,
  },
  {
    id: 3,
    title: "دامپزشک شوید",
    link: "/become_a_veterinarian",
    icon: <IconAppsFilled />,
  },
];
