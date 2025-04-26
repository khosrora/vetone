export type AnimalsCardType = {
  id: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  name: string;
  image: {
    id: number;
    title: null | string;
    image: string;
    is_show: boolean;
    url: string;
  };
};
