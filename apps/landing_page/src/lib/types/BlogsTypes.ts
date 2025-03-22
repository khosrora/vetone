export type blogCardType = {
  id: number;
  image: {
    id: number;
    title: string;
    image: string;
    is_show: boolean;
    url: string;
  };
  is_active: boolean;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  short_desc: string;
  desc: string;
  image_alt: string;
  image_title: string;
};
