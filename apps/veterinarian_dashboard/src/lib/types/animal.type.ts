export type animalType = {
  id: number;
  image: {
    id: number;
    title: null | string;
    image: string;
    is_show: boolean;
    url: string;
  };
  is_active: boolean;
  created_at: string;
  updated_at: string;
  name: string;
};
