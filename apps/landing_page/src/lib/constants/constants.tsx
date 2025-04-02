import {
  IconBuildingHospital,
  IconHomeFilled,
} from "@tabler/icons-react";
import { JSX } from "react";
import PetIcon from "../icon/PetIcon";
import ClinikIcon from "../icon/ClinikIcon";
import HospitalIcon from "../icon/HospitalIcon";
import Labicon from "../icon/LabIcon";
import PharmacyIcon from "../icon/PharmacyIcon";




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
    link: "/",
    icon: <IconHomeFilled />,
  },
  {
    id: 2,
    title: "دامپزشکان",
    link: "/search_veterinarians",
    icon: <IconBuildingHospital />,
  },
 
];





export const category: categoryType[] = [
  {
    id: 1,
    title: "کلینیک",
    link: "/",
    icon: <ClinikIcon/>,
  },
  {
    id: 2,
    title: "بیمارستان",
    link: "/veterinarian",
    icon: <HospitalIcon />,
  },
  {
    id: 1,
    title: "پت شاپ",
    link: "/",
    icon: <PetIcon/>,
  },
  {
    id: 2,
    title: "آزمایشگاه",
    link: "/veterinarian",
    icon: <Labicon />,
  },
  {
    id: 2,
    title: "داروخانه",
    link: "/veterinarian",
    icon: <PharmacyIcon />,
  },
];