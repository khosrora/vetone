export type BasicInformationType = {
  id: number;
  fullName: string;
  phone: string;
  image: string;
  city: {
    id: number;
    name: string;
  };
  province: {
    id: number;
    name: string;
  };
  medical_center: {
    id: number;
    title: string;
  };
  request_counts: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  slug: string;
  clinic_name: null | string;
  medical_license: string;
  license_type: string;
  license_image: string;
  national_id_image: string;
  issuance_date: string;
  bio: null | string;
  status: string;
  background_image: null | string;
  rate: number;
  surgery: number;
  experience: number;
  code: string;
  state: string;
  user: number;
};
