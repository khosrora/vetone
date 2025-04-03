import { requestsEnum } from "@repo/lib/types";

export type animalType = {
  id: number;
  count: number;
  animal: string;
  request: number;
};

export type rancherType = {
  image: string | null;
  phone: string;
  fullName: string | null;
  address: string | null;
  latitude: string | null;
  longitude: string | null;
};

export type veterinarianType = {
  id: number;
  fullName: string;
  phone: string;
  image: null | string;
  city: string;
  province: string;
  medical_center: string;
  is_active: true;
  created_at: string;
  updated_at: string;
  slug: string;
  clinic_name: string;
  medical_license: string;
  license_type: string;
  license_image: string;
  national_id_image: string;
  issuance_date: string;
  bio: null | string;
  background_image: null | string;
  rate: number;
  surgery: number;
  experience: number;
  code: number;
  state: "C";
  user: number;
};

export type requestCardType = {
  id: number;
  description: string;
  voice: null | string;
  video: null | string;
  type: requestsEnum;
  date: string;
  time: string;
  rancher: rancherType;
  veterinarian: veterinarianType;
  animals: animalType[];
  image: null | string;
  tracking_code: string;
  latitude: string;
  longitude: string;
};
