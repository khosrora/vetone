export type ProvinceType = {
  model: string;
  pk: number;
  fields: {
    name: string;
    slug: string;
  };
};

export type CitiesType = {
  model: string;
  pk: number;
  fields: {
    name: string;
    province_id: number;
    slug: string;
  };
};

export const cities: CitiesType[] = [
  {
    model: "province.city",
    pk: 1,
    fields: {
      name: "تبریز",
      province_id: 1,
      slug: "تبریز",
    },
  },
  {
    model: "province.city",
    pk: 2,
    fields: {
      name: "اسکو",
      province_id: 1,
      slug: "اسکو",
    },
  },
  {
    model: "province.city",
    pk: 3,
    fields: {
      name: "اهر",
      province_id: 1,
      slug: "اهر",
    },
  },
  {
    model: "province.city",
    pk: 4,
    fields: {
      name: "ایلخچی",
      province_id: 1,
      slug: "ایلخچی",
    },
  },
  {
    model: "province.city",
    pk: 5,
    fields: {
      name: "آبش احمد",
      province_id: 1,
      slug: "آبش احمد",
    },
  },
  {
    model: "province.city",
    pk: 6,
    fields: {
      name: "آذرشهر",
      province_id: 1,
      slug: "آذرشهر",
    },
  },
  {
    model: "province.city",
    pk: 7,
    fields: {
      name: "آقکند",
      province_id: 1,
      slug: "آقکند",
    },
  },
  {
    model: "province.city",
    pk: 8,
    fields: {
      name: "باسمنج",
      province_id: 1,
      slug: "باسمنج",
    },
  },
  {
    model: "province.city",
    pk: 9,
    fields: {
      name: "بخشایش",
      province_id: 1,
      slug: "بخشایش",
    },
  },
  {
    model: "province.city",
    pk: 10,
    fields: {
      name: "بستان آباد",
      province_id: 1,
      slug: "بستان آباد",
    },
  },
  {
    model: "province.city",
    pk: 11,
    fields: {
      name: "بناب",
      province_id: 1,
      slug: "بناب",
    },
  },
  {
    model: "province.city",
    pk: 12,
    fields: {
      name: "بناب جدید",
      province_id: 1,
      slug: "بناب جدید",
    },
  },
  {
    model: "province.city",
    pk: 13,
    fields: {
      name: "ترک",
      province_id: 1,
      slug: "ترک",
    },
  },
  {
    model: "province.city",
    pk: 14,
    fields: {
      name: "ترکمانچای",
      province_id: 1,
      slug: "ترکمانچای",
    },
  },
  {
    model: "province.city",
    pk: 15,
    fields: {
      name: "تسوج",
      province_id: 1,
      slug: "تسوج",
    },
  },
  {
    model: "province.city",
    pk: 16,
    fields: {
      name: "تیکمه داش",
      province_id: 1,
      slug: "تیکمه داش",
    },
  },
  {
    model: "province.city",
    pk: 17,
    fields: {
      name: "جلفا",
      province_id: 1,
      slug: "جلفا",
    },
  },
  {
    model: "province.city",
    pk: 18,
    fields: {
      name: "خاروانا",
      province_id: 1,
      slug: "خاروانا",
    },
  },
  {
    model: "province.city",
    pk: 19,
    fields: {
      name: "خامنه",
      province_id: 1,
      slug: "خامنه",
    },
  },
  {
    model: "province.city",
    pk: 20,
    fields: {
      name: "خراجو",
      province_id: 1,
      slug: "خراجو",
    },
  },
  {
    model: "province.city",
    pk: 21,
    fields: {
      name: "خسروشهر",
      province_id: 1,
      slug: "خسروشهر",
    },
  },
  {
    model: "province.city",
    pk: 22,
    fields: {
      name: "خمارلو",
      province_id: 1,
      slug: "خمارلو",
    },
  },
  {
    model: "province.city",
    pk: 23,
    fields: {
      name: "خواجه",
      province_id: 1,
      slug: "خواجه",
    },
  },
  {
    model: "province.city",
    pk: 24,
    fields: {
      name: "دوزدوزان",
      province_id: 1,
      slug: "دوزدوزان",
    },
  },
  {
    model: "province.city",
    pk: 25,
    fields: {
      name: "زرنق",
      province_id: 1,
      slug: "زرنق",
    },
  },
  {
    model: "province.city",
    pk: 26,
    fields: {
      name: "زنوز",
      province_id: 1,
      slug: "زنوز",
    },
  },
  {
    model: "province.city",
    pk: 27,
    fields: {
      name: "سراب",
      province_id: 1,
      slug: "سراب",
    },
  },
  {
    model: "province.city",
    pk: 28,
    fields: {
      name: "سردرود",
      province_id: 1,
      slug: "سردرود",
    },
  },
  {
    model: "province.city",
    pk: 29,
    fields: {
      name: "سهند",
      province_id: 1,
      slug: "سهند",
    },
  },
  {
    model: "province.city",
    pk: 30,
    fields: {
      name: "سیس",
      province_id: 1,
      slug: "سیس",
    },
  },
  {
    model: "province.city",
    pk: 31,
    fields: {
      name: "سیه رود",
      province_id: 1,
      slug: "سیه رود",
    },
  },
  {
    model: "province.city",
    pk: 32,
    fields: {
      name: "شبستر",
      province_id: 1,
      slug: "شبستر",
    },
  },
  {
    model: "province.city",
    pk: 33,
    fields: {
      name: "شربیان",
      province_id: 1,
      slug: "شربیان",
    },
  },
  {
    model: "province.city",
    pk: 34,
    fields: {
      name: "شرفخانه",
      province_id: 1,
      slug: "شرفخانه",
    },
  },
  {
    model: "province.city",
    pk: 35,
    fields: {
      name: "شندآباد",
      province_id: 1,
      slug: "شندآباد",
    },
  },
  {
    model: "province.city",
    pk: 36,
    fields: {
      name: "شهرجدیدسهند",
      province_id: 1,
      slug: "شهرجدیدسهند",
    },
  },
  {
    model: "province.city",
    pk: 37,
    fields: {
      name: "صوفیان",
      province_id: 1,
      slug: "صوفیان",
    },
  },
  {
    model: "province.city",
    pk: 38,
    fields: {
      name: "عجب شیر",
      province_id: 1,
      slug: "عجب شیر",
    },
  },
  {
    model: "province.city",
    pk: 39,
    fields: {
      name: "قره آغاج",
      province_id: 1,
      slug: "قره آغاج",
    },
  },
  {
    model: "province.city",
    pk: 40,
    fields: {
      name: "کشکسرای",
      province_id: 1,
      slug: "کشکسرای",
    },
  },
  {
    model: "province.city",
    pk: 41,
    fields: {
      name: "کلوانق",
      province_id: 1,
      slug: "کلوانق",
    },
  },
  {
    model: "province.city",
    pk: 42,
    fields: {
      name: "کلیبر",
      province_id: 1,
      slug: "کلیبر",
    },
  },
  {
    model: "province.city",
    pk: 43,
    fields: {
      name: "کوزه کنان",
      province_id: 1,
      slug: "کوزه کنان",
    },
  },
  {
    model: "province.city",
    pk: 44,
    fields: {
      name: "گوگان",
      province_id: 1,
      slug: "گوگان",
    },
  },
  {
    model: "province.city",
    pk: 45,
    fields: {
      name: "لیلان",
      province_id: 1,
      slug: "لیلان",
    },
  },
  {
    model: "province.city",
    pk: 46,
    fields: {
      name: "مراغه",
      province_id: 1,
      slug: "مراغه",
    },
  },
  {
    model: "province.city",
    pk: 47,
    fields: {
      name: "مرند",
      province_id: 1,
      slug: "مرند",
    },
  },
  {
    model: "province.city",
    pk: 48,
    fields: {
      name: "ملکان",
      province_id: 1,
      slug: "ملکان",
    },
  },
  {
    model: "province.city",
    pk: 49,
    fields: {
      name: "ممقان",
      province_id: 1,
      slug: "ممقان",
    },
  },
  {
    model: "province.city",
    pk: 50,
    fields: {
      name: "مهربان",
      province_id: 1,
      slug: "مهربان",
    },
  },
  {
    model: "province.city",
    pk: 51,
    fields: {
      name: "میانه",
      province_id: 1,
      slug: "میانه",
    },
  },
  {
    model: "province.city",
    pk: 52,
    fields: {
      name: "نظرکهریزی",
      province_id: 1,
      slug: "نظرکهریزی",
    },
  },
  {
    model: "province.city",
    pk: 53,
    fields: {
      name: "وایقان",
      province_id: 1,
      slug: "وایقان",
    },
  },
  {
    model: "province.city",
    pk: 54,
    fields: {
      name: "ورزقان",
      province_id: 1,
      slug: "ورزقان",
    },
  },
  {
    model: "province.city",
    pk: 55,
    fields: {
      name: "هادیشهر",
      province_id: 1,
      slug: "هادیشهر",
    },
  },
  {
    model: "province.city",
    pk: 56,
    fields: {
      name: "هریس",
      province_id: 1,
      slug: "هریس",
    },
  },
  {
    model: "province.city",
    pk: 57,
    fields: {
      name: "هشترود",
      province_id: 1,
      slug: "هشترود",
    },
  },
  {
    model: "province.city",
    pk: 58,
    fields: {
      name: "هوراند",
      province_id: 1,
      slug: "هوراند",
    },
  },
  {
    model: "province.city",
    pk: 59,
    fields: {
      name: "یامچی",
      province_id: 1,
      slug: "یامچی",
    },
  },
  {
    model: "province.city",
    pk: 60,
    fields: {
      name: "ارومیه",
      province_id: 2,
      slug: "ارومیه",
    },
  },
  {
    model: "province.city",
    pk: 61,
    fields: {
      name: "اشنویه",
      province_id: 2,
      slug: "اشنویه",
    },
  },
  {
    model: "province.city",
    pk: 62,
    fields: {
      name: "ایواوغلی",
      province_id: 2,
      slug: "ایواوغلی",
    },
  },
  {
    model: "province.city",
    pk: 63,
    fields: {
      name: "آواجیق",
      province_id: 2,
      slug: "آواجیق",
    },
  },
  {
    model: "province.city",
    pk: 64,
    fields: {
      name: "باروق",
      province_id: 2,
      slug: "باروق",
    },
  },
  {
    model: "province.city",
    pk: 65,
    fields: {
      name: "بازرگان",
      province_id: 2,
      slug: "بازرگان",
    },
  },
  {
    model: "province.city",
    pk: 66,
    fields: {
      name: "بوکان",
      province_id: 2,
      slug: "بوکان",
    },
  },
  {
    model: "province.city",
    pk: 67,
    fields: {
      name: "پلدشت",
      province_id: 2,
      slug: "پلدشت",
    },
  },
  {
    model: "province.city",
    pk: 68,
    fields: {
      name: "پیرانشهر",
      province_id: 2,
      slug: "پیرانشهر",
    },
  },
  {
    model: "province.city",
    pk: 69,
    fields: {
      name: "تازه شهر",
      province_id: 2,
      slug: "تازه شهر",
    },
  },
  {
    model: "province.city",
    pk: 70,
    fields: {
      name: "تکاب",
      province_id: 2,
      slug: "تکاب",
    },
  },
  {
    model: "province.city",
    pk: 71,
    fields: {
      name: "چهاربرج",
      province_id: 2,
      slug: "چهاربرج",
    },
  },
  {
    model: "province.city",
    pk: 72,
    fields: {
      name: "خلیفان",
      province_id: 2,
      slug: "خلیفان",
    },
  },
  {
    model: "province.city",
    pk: 73,
    fields: {
      name: "خوی",
      province_id: 2,
      slug: "خوی",
    },
  },
  {
    model: "province.city",
    pk: 74,
    fields: {
      name: "دیزج دیز",
      province_id: 2,
      slug: "دیزج دیز",
    },
  },
  {
    model: "province.city",
    pk: 75,
    fields: {
      name: "ربط",
      province_id: 2,
      slug: "ربط",
    },
  },
  {
    model: "province.city",
    pk: 76,
    fields: {
      name: "سردشت",
      province_id: 2,
      slug: "سردشت",
    },
  },
  {
    model: "province.city",
    pk: 77,
    fields: {
      name: "سرو",
      province_id: 2,
      slug: "سرو",
    },
  },
  {
    model: "province.city",
    pk: 78,
    fields: {
      name: "سلماس",
      province_id: 2,
      slug: "سلماس",
    },
  },
  {
    model: "province.city",
    pk: 79,
    fields: {
      name: "سیلوانه",
      province_id: 2,
      slug: "سیلوانه",
    },
  },
  {
    model: "province.city",
    pk: 80,
    fields: {
      name: "سیمینه",
      province_id: 2,
      slug: "سیمینه",
    },
  },
  {
    model: "province.city",
    pk: 81,
    fields: {
      name: "سیه چشمه",
      province_id: 2,
      slug: "سیه چشمه",
    },
  },
  {
    model: "province.city",
    pk: 82,
    fields: {
      name: "شاهین دژ",
      province_id: 2,
      slug: "شاهین دژ",
    },
  },
  {
    model: "province.city",
    pk: 83,
    fields: {
      name: "شوط",
      province_id: 2,
      slug: "شوط",
    },
  },
  {
    model: "province.city",
    pk: 84,
    fields: {
      name: "فیرورق",
      province_id: 2,
      slug: "فیرورق",
    },
  },
  {
    model: "province.city",
    pk: 85,
    fields: {
      name: "قره ضیاءالدین",
      province_id: 2,
      slug: "قره ضیاءالدین",
    },
  },
  {
    model: "province.city",
    pk: 86,
    fields: {
      name: "قطور",
      province_id: 2,
      slug: "قطور",
    },
  },
  {
    model: "province.city",
    pk: 87,
    fields: {
      name: "قوشچی",
      province_id: 2,
      slug: "قوشچی",
    },
  },
  {
    model: "province.city",
    pk: 88,
    fields: {
      name: "کشاورز",
      province_id: 2,
      slug: "کشاورز",
    },
  },
  {
    model: "province.city",
    pk: 89,
    fields: {
      name: "گردکشانه",
      province_id: 2,
      slug: "گردکشانه",
    },
  },
  {
    model: "province.city",
    pk: 90,
    fields: {
      name: "ماکو",
      province_id: 2,
      slug: "ماکو",
    },
  },
  {
    model: "province.city",
    pk: 91,
    fields: {
      name: "محمدیار",
      province_id: 2,
      slug: "محمدیار",
    },
  },
  {
    model: "province.city",
    pk: 92,
    fields: {
      name: "محمودآباد",
      province_id: 2,
      slug: "محمودآباد",
    },
  },
  {
    model: "province.city",
    pk: 93,
    fields: {
      name: "مهاباد",
      province_id: 2,
      slug: "مهاباد",
    },
  },
  {
    model: "province.city",
    pk: 94,
    fields: {
      name: "میاندوآب",
      province_id: 2,
      slug: "میاندوآب",
    },
  },
  {
    model: "province.city",
    pk: 95,
    fields: {
      name: "میرآباد",
      province_id: 2,
      slug: "میرآباد",
    },
  },
  {
    model: "province.city",
    pk: 96,
    fields: {
      name: "نالوس",
      province_id: 2,
      slug: "نالوس",
    },
  },
  {
    model: "province.city",
    pk: 97,
    fields: {
      name: "نقده",
      province_id: 2,
      slug: "نقده",
    },
  },
  {
    model: "province.city",
    pk: 98,
    fields: {
      name: "نوشین",
      province_id: 2,
      slug: "نوشین",
    },
  },
  {
    model: "province.city",
    pk: 99,
    fields: {
      name: "اردبیل",
      province_id: 3,
      slug: "اردبیل",
    },
  },
  {
    model: "province.city",
    pk: 100,
    fields: {
      name: "اصلاندوز",
      province_id: 3,
      slug: "اصلاندوز",
    },
  },
  {
    model: "province.city",
    pk: 101,
    fields: {
      name: "آبی بیگلو",
      province_id: 3,
      slug: "آبی بیگلو",
    },
  },
  {
    model: "province.city",
    pk: 102,
    fields: {
      name: "بیله سوار",
      province_id: 3,
      slug: "بیله سوار",
    },
  },
  {
    model: "province.city",
    pk: 103,
    fields: {
      name: "پارس آباد",
      province_id: 3,
      slug: "پارس آباد",
    },
  },
  {
    model: "province.city",
    pk: 104,
    fields: {
      name: "تازه کند",
      province_id: 3,
      slug: "تازه کند",
    },
  },
  {
    model: "province.city",
    pk: 105,
    fields: {
      name: "تازه کندانگوت",
      province_id: 3,
      slug: "تازه کندانگوت",
    },
  },
  {
    model: "province.city",
    pk: 106,
    fields: {
      name: "جعفرآباد",
      province_id: 3,
      slug: "جعفرآباد",
    },
  },
  {
    model: "province.city",
    pk: 107,
    fields: {
      name: "خلخال",
      province_id: 3,
      slug: "خلخال",
    },
  },
  {
    model: "province.city",
    pk: 108,
    fields: {
      name: "رضی",
      province_id: 3,
      slug: "رضی",
    },
  },
  {
    model: "province.city",
    pk: 109,
    fields: {
      name: "سرعین",
      province_id: 3,
      slug: "سرعین",
    },
  },
  {
    model: "province.city",
    pk: 110,
    fields: {
      name: "عنبران",
      province_id: 3,
      slug: "عنبران",
    },
  },
  {
    model: "province.city",
    pk: 111,
    fields: {
      name: "فخرآباد",
      province_id: 3,
      slug: "فخرآباد",
    },
  },
  {
    model: "province.city",
    pk: 112,
    fields: {
      name: "کلور",
      province_id: 3,
      slug: "کلور",
    },
  },
  {
    model: "province.city",
    pk: 113,
    fields: {
      name: "کوراییم",
      province_id: 3,
      slug: "کوراییم",
    },
  },
  {
    model: "province.city",
    pk: 114,
    fields: {
      name: "گرمی",
      province_id: 3,
      slug: "گرمی",
    },
  },
  {
    model: "province.city",
    pk: 115,
    fields: {
      name: "گیوی",
      province_id: 3,
      slug: "گیوی",
    },
  },
  {
    model: "province.city",
    pk: 116,
    fields: {
      name: "لاهرود",
      province_id: 3,
      slug: "لاهرود",
    },
  },
  {
    model: "province.city",
    pk: 117,
    fields: {
      name: "مرادلو",
      province_id: 3,
      slug: "مرادلو",
    },
  },
  {
    model: "province.city",
    pk: 118,
    fields: {
      name: "مشکین شهر",
      province_id: 3,
      slug: "مشکین شهر",
    },
  },
  {
    model: "province.city",
    pk: 119,
    fields: {
      name: "نمین",
      province_id: 3,
      slug: "نمین",
    },
  },
  {
    model: "province.city",
    pk: 120,
    fields: {
      name: "نیر",
      province_id: 3,
      slug: "نیر",
    },
  },
  {
    model: "province.city",
    pk: 121,
    fields: {
      name: "هشتجین",
      province_id: 3,
      slug: "هشتجین",
    },
  },
  {
    model: "province.city",
    pk: 122,
    fields: {
      name: "هیر",
      province_id: 3,
      slug: "هیر",
    },
  },
  {
    model: "province.city",
    pk: 123,
    fields: {
      name: "اصفهان",
      province_id: 4,
      slug: "اصفهان",
    },
  },
  {
    model: "province.city",
    pk: 124,
    fields: {
      name: "ابریشم",
      province_id: 4,
      slug: "ابریشم",
    },
  },
  {
    model: "province.city",
    pk: 125,
    fields: {
      name: "ابوزیدآباد",
      province_id: 4,
      slug: "ابوزیدآباد",
    },
  },
  {
    model: "province.city",
    pk: 126,
    fields: {
      name: "اردستان",
      province_id: 4,
      slug: "اردستان",
    },
  },
  {
    model: "province.city",
    pk: 127,
    fields: {
      name: "اژیه",
      province_id: 4,
      slug: "اژیه",
    },
  },
  {
    model: "province.city",
    pk: 128,
    fields: {
      name: "افوس",
      province_id: 4,
      slug: "افوس",
    },
  },
  {
    model: "province.city",
    pk: 129,
    fields: {
      name: "انارک",
      province_id: 4,
      slug: "انارک",
    },
  },
  {
    model: "province.city",
    pk: 130,
    fields: {
      name: "ایمانشهر",
      province_id: 4,
      slug: "ایمانشهر",
    },
  },
  {
    model: "province.city",
    pk: 131,
    fields: {
      name: "آران وبیدگل",
      province_id: 4,
      slug: "آران وبیدگل",
    },
  },
  {
    model: "province.city",
    pk: 132,
    fields: {
      name: "بادرود",
      province_id: 4,
      slug: "بادرود",
    },
  },
  {
    model: "province.city",
    pk: 133,
    fields: {
      name: "باغ بهادران",
      province_id: 4,
      slug: "باغ بهادران",
    },
  },
  {
    model: "province.city",
    pk: 134,
    fields: {
      name: "بافران",
      province_id: 4,
      slug: "بافران",
    },
  },
  {
    model: "province.city",
    pk: 135,
    fields: {
      name: "برزک",
      province_id: 4,
      slug: "برزک",
    },
  },
  {
    model: "province.city",
    pk: 136,
    fields: {
      name: "برف انبار",
      province_id: 4,
      slug: "برف انبار",
    },
  },
  {
    model: "province.city",
    pk: 137,
    fields: {
      name: "بوئین ومیاندشت",
      province_id: 4,
      slug: "بوئین ومیاندشت",
    },
  },
  {
    model: "province.city",
    pk: 138,
    fields: {
      name: "بهاران شهر",
      province_id: 4,
      slug: "بهاران شهر",
    },
  },
  {
    model: "province.city",
    pk: 139,
    fields: {
      name: "بهارستان",
      province_id: 4,
      slug: "بهارستان",
    },
  },
  {
    model: "province.city",
    pk: 140,
    fields: {
      name: "پیربکران",
      province_id: 4,
      slug: "پیربکران",
    },
  },
  {
    model: "province.city",
    pk: 141,
    fields: {
      name: "تودشک",
      province_id: 4,
      slug: "تودشک",
    },
  },
  {
    model: "province.city",
    pk: 142,
    fields: {
      name: "تیران",
      province_id: 4,
      slug: "تیران",
    },
  },
  {
    model: "province.city",
    pk: 143,
    fields: {
      name: "جندق",
      province_id: 4,
      slug: "جندق",
    },
  },
  {
    model: "province.city",
    pk: 144,
    fields: {
      name: "جوزدان",
      province_id: 4,
      slug: "جوزدان",
    },
  },
  {
    model: "province.city",
    pk: 145,
    fields: {
      name: "جوشقان وکامو",
      province_id: 4,
      slug: "جوشقان وکامو",
    },
  },
  {
    model: "province.city",
    pk: 146,
    fields: {
      name: "چادگان",
      province_id: 4,
      slug: "چادگان",
    },
  },
  {
    model: "province.city",
    pk: 147,
    fields: {
      name: "چرمهین",
      province_id: 4,
      slug: "چرمهین",
    },
  },
  {
    model: "province.city",
    pk: 148,
    fields: {
      name: "چمگردان",
      province_id: 4,
      slug: "چمگردان",
    },
  },
  {
    model: "province.city",
    pk: 149,
    fields: {
      name: "حبیب آباد",
      province_id: 4,
      slug: "حبیب آباد",
    },
  },
  {
    model: "province.city",
    pk: 150,
    fields: {
      name: "حسن آباد",
      province_id: 4,
      slug: "حسن آباد",
    },
  },
  {
    model: "province.city",
    pk: 151,
    fields: {
      name: "حنا",
      province_id: 4,
      slug: "حنا",
    },
  },
  {
    model: "province.city",
    pk: 152,
    fields: {
      name: "خالدآباد",
      province_id: 4,
      slug: "خالدآباد",
    },
  },
  {
    model: "province.city",
    pk: 153,
    fields: {
      name: "خمینی شهر",
      province_id: 4,
      slug: "خمینی شهر",
    },
  },
  {
    model: "province.city",
    pk: 154,
    fields: {
      name: "خوانسار",
      province_id: 4,
      slug: "خوانسار",
    },
  },
  {
    model: "province.city",
    pk: 155,
    fields: {
      name: "خور",
      province_id: 4,
      slug: "خور",
    },
  },
  {
    model: "province.city",
    pk: 156,
    fields: {
      name: "خوراسگان",
      province_id: 4,
      slug: "خوراسگان",
    },
  },
  {
    model: "province.city",
    pk: 157,
    fields: {
      name: "خورزوق",
      province_id: 4,
      slug: "خورزوق",
    },
  },
  {
    model: "province.city",
    pk: 158,
    fields: {
      name: "داران",
      province_id: 4,
      slug: "داران",
    },
  },
  {
    model: "province.city",
    pk: 159,
    fields: {
      name: "دامنه",
      province_id: 4,
      slug: "دامنه",
    },
  },
  {
    model: "province.city",
    pk: 160,
    fields: {
      name: "درچه پیاز",
      province_id: 4,
      slug: "درچه پیاز",
    },
  },
  {
    model: "province.city",
    pk: 161,
    fields: {
      name: "دستگرد",
      province_id: 4,
      slug: "دستگرد",
    },
  },
  {
    model: "province.city",
    pk: 162,
    fields: {
      name: "دولت آباد",
      province_id: 4,
      slug: "دولت آباد",
    },
  },
  {
    model: "province.city",
    pk: 163,
    fields: {
      name: "دهاقان",
      province_id: 4,
      slug: "دهاقان",
    },
  },
  {
    model: "province.city",
    pk: 164,
    fields: {
      name: "دهق",
      province_id: 4,
      slug: "دهق",
    },
  },
  {
    model: "province.city",
    pk: 165,
    fields: {
      name: "دیزیچه",
      province_id: 4,
      slug: "دیزیچه",
    },
  },
  {
    model: "province.city",
    pk: 166,
    fields: {
      name: "رزوه",
      province_id: 4,
      slug: "رزوه",
    },
  },
  {
    model: "province.city",
    pk: 167,
    fields: {
      name: "رضوانشهر",
      province_id: 4,
      slug: "رضوانشهر",
    },
  },
  {
    model: "province.city",
    pk: 168,
    fields: {
      name: "زاینده رود",
      province_id: 4,
      slug: "زاینده رود",
    },
  },
  {
    model: "province.city",
    pk: 169,
    fields: {
      name: "زرین شهر",
      province_id: 4,
      slug: "زرین شهر",
    },
  },
  {
    model: "province.city",
    pk: 170,
    fields: {
      name: "زواره",
      province_id: 4,
      slug: "زواره",
    },
  },
  {
    model: "province.city",
    pk: 171,
    fields: {
      name: "زیباشهر",
      province_id: 4,
      slug: "زیباشهر",
    },
  },
  {
    model: "province.city",
    pk: 172,
    fields: {
      name: "سده لنجان",
      province_id: 4,
      slug: "سده لنجان",
    },
  },
  {
    model: "province.city",
    pk: 173,
    fields: {
      name: "سفیدشهر",
      province_id: 4,
      slug: "سفیدشهر",
    },
  },
  {
    model: "province.city",
    pk: 174,
    fields: {
      name: "سگزی",
      province_id: 4,
      slug: "سگزی",
    },
  },
  {
    model: "province.city",
    pk: 175,
    fields: {
      name: "سمیرم",
      province_id: 4,
      slug: "سمیرم",
    },
  },
  {
    model: "province.city",
    pk: 176,
    fields: {
      name: "شاپورآباد",
      province_id: 4,
      slug: "شاپورآباد",
    },
  },
  {
    model: "province.city",
    pk: 177,
    fields: {
      name: "شاهین شهر",
      province_id: 4,
      slug: "شاهین شهر",
    },
  },
  {
    model: "province.city",
    pk: 178,
    fields: {
      name: "شهرضا",
      province_id: 4,
      slug: "شهرضا",
    },
  },
  {
    model: "province.city",
    pk: 179,
    fields: {
      name: "طالخونچه",
      province_id: 4,
      slug: "طالخونچه",
    },
  },
  {
    model: "province.city",
    pk: 180,
    fields: {
      name: "عسگران",
      province_id: 4,
      slug: "عسگران",
    },
  },
  {
    model: "province.city",
    pk: 181,
    fields: {
      name: "علویچه",
      province_id: 4,
      slug: "علویچه",
    },
  },
  {
    model: "province.city",
    pk: 182,
    fields: {
      name: "فرخی",
      province_id: 4,
      slug: "فرخی",
    },
  },
  {
    model: "province.city",
    pk: 183,
    fields: {
      name: "فریدونشهر",
      province_id: 4,
      slug: "فریدونشهر",
    },
  },
  {
    model: "province.city",
    pk: 184,
    fields: {
      name: "فلاورجان",
      province_id: 4,
      slug: "فلاورجان",
    },
  },
  {
    model: "province.city",
    pk: 185,
    fields: {
      name: "فولادشهر",
      province_id: 4,
      slug: "فولادشهر",
    },
  },
  {
    model: "province.city",
    pk: 186,
    fields: {
      name: "قمصر",
      province_id: 4,
      slug: "قمصر",
    },
  },
  {
    model: "province.city",
    pk: 187,
    fields: {
      name: "قهجاورستان",
      province_id: 4,
      slug: "قهجاورستان",
    },
  },
  {
    model: "province.city",
    pk: 188,
    fields: {
      name: "قهدریجان",
      province_id: 4,
      slug: "قهدریجان",
    },
  },
  {
    model: "province.city",
    pk: 189,
    fields: {
      name: "کاشان",
      province_id: 4,
      slug: "کاشان",
    },
  },
  {
    model: "province.city",
    pk: 190,
    fields: {
      name: "کرکوند",
      province_id: 4,
      slug: "کرکوند",
    },
  },
  {
    model: "province.city",
    pk: 191,
    fields: {
      name: "کلیشادوسودرجان",
      province_id: 4,
      slug: "کلیشادوسودرجان",
    },
  },
  {
    model: "province.city",
    pk: 192,
    fields: {
      name: "کمشچه",
      province_id: 4,
      slug: "کمشچه",
    },
  },
  {
    model: "province.city",
    pk: 193,
    fields: {
      name: "کمه",
      province_id: 4,
      slug: "کمه",
    },
  },
  {
    model: "province.city",
    pk: 194,
    fields: {
      name: "کوشک",
      province_id: 4,
      slug: "کوشک",
    },
  },
  {
    model: "province.city",
    pk: 195,
    fields: {
      name: "کوهپایه",
      province_id: 4,
      slug: "کوهپایه",
    },
  },
  {
    model: "province.city",
    pk: 196,
    fields: {
      name: "کهریزسنگ",
      province_id: 4,
      slug: "کهریزسنگ",
    },
  },
  {
    model: "province.city",
    pk: 197,
    fields: {
      name: "گرگاب",
      province_id: 4,
      slug: "گرگاب",
    },
  },
  {
    model: "province.city",
    pk: 198,
    fields: {
      name: "گزبرخوار",
      province_id: 4,
      slug: "گزبرخوار",
    },
  },
  {
    model: "province.city",
    pk: 199,
    fields: {
      name: "گلپایگان",
      province_id: 4,
      slug: "گلپایگان",
    },
  },
  {
    model: "province.city",
    pk: 200,
    fields: {
      name: "گلدشت",
      province_id: 4,
      slug: "گلدشت",
    },
  },
  {
    model: "province.city",
    pk: 201,
    fields: {
      name: "گلشن",
      province_id: 4,
      slug: "گلشن",
    },
  },
  {
    model: "province.city",
    pk: 202,
    fields: {
      name: "گلشهر",
      province_id: 4,
      slug: "گلشهر",
    },
  },
  {
    model: "province.city",
    pk: 203,
    fields: {
      name: "گوگد",
      province_id: 4,
      slug: "گوگد",
    },
  },
  {
    model: "province.city",
    pk: 204,
    fields: {
      name: "لای بید",
      province_id: 4,
      slug: "لای بید",
    },
  },
  {
    model: "province.city",
    pk: 205,
    fields: {
      name: "مبارکه",
      province_id: 4,
      slug: "مبارکه",
    },
  },
  {
    model: "province.city",
    pk: 206,
    fields: {
      name: "محمدآباد",
      province_id: 4,
      slug: "محمدآباد",
    },
  },
  {
    model: "province.city",
    pk: 207,
    fields: {
      name: "مشکات",
      province_id: 4,
      slug: "مشکات",
    },
  },
  {
    model: "province.city",
    pk: 208,
    fields: {
      name: "منظریه",
      province_id: 4,
      slug: "منظریه",
    },
  },
  {
    model: "province.city",
    pk: 209,
    fields: {
      name: "مهاباد",
      province_id: 4,
      slug: "مهاباد",
    },
  },
  {
    model: "province.city",
    pk: 210,
    fields: {
      name: "میمه",
      province_id: 4,
      slug: "میمه",
    },
  },
  {
    model: "province.city",
    pk: 211,
    fields: {
      name: "نائین",
      province_id: 4,
      slug: "نائین",
    },
  },
  {
    model: "province.city",
    pk: 212,
    fields: {
      name: "نجف آباد",
      province_id: 4,
      slug: "نجف آباد",
    },
  },
  {
    model: "province.city",
    pk: 213,
    fields: {
      name: "نصرآباد",
      province_id: 4,
      slug: "نصرآباد",
    },
  },
  {
    model: "province.city",
    pk: 214,
    fields: {
      name: "نطنز",
      province_id: 4,
      slug: "نطنز",
    },
  },
  {
    model: "province.city",
    pk: 215,
    fields: {
      name: "نوش آباد",
      province_id: 4,
      slug: "نوش آباد",
    },
  },
  {
    model: "province.city",
    pk: 216,
    fields: {
      name: "نیاسر",
      province_id: 4,
      slug: "نیاسر",
    },
  },
  {
    model: "province.city",
    pk: 217,
    fields: {
      name: "نیک آباد",
      province_id: 4,
      slug: "نیک آباد",
    },
  },
  {
    model: "province.city",
    pk: 218,
    fields: {
      name: "ورزنه",
      province_id: 4,
      slug: "ورزنه",
    },
  },
  {
    model: "province.city",
    pk: 219,
    fields: {
      name: "ورنامخواست",
      province_id: 4,
      slug: "ورنامخواست",
    },
  },
  {
    model: "province.city",
    pk: 220,
    fields: {
      name: "وزوان",
      province_id: 4,
      slug: "وزوان",
    },
  },
  {
    model: "province.city",
    pk: 221,
    fields: {
      name: "ونک",
      province_id: 4,
      slug: "ونک",
    },
  },
  {
    model: "province.city",
    pk: 222,
    fields: {
      name: "هرند",
      province_id: 4,
      slug: "هرند",
    },
  },
  {
    model: "province.city",
    pk: 1140,
    fields: {
      name: "لنجان",
      province_id: 4,
      slug: "لنجان",
    },
  },
  {
    model: "province.city",
    pk: 223,
    fields: {
      name: "کرج",
      province_id: 5,
      slug: "کرج",
    },
  },
  {
    model: "province.city",
    pk: 224,
    fields: {
      name: "اشتهارد",
      province_id: 5,
      slug: "اشتهارد",
    },
  },
  {
    model: "province.city",
    pk: 225,
    fields: {
      name: "آسارا",
      province_id: 5,
      slug: "آسارا",
    },
  },
  {
    model: "province.city",
    pk: 226,
    fields: {
      name: "تنکمان",
      province_id: 5,
      slug: "تنکمان",
    },
  },
  {
    model: "province.city",
    pk: 227,
    fields: {
      name: "چهارباغ",
      province_id: 5,
      slug: "چهارباغ",
    },
  },
  {
    model: "province.city",
    pk: 228,
    fields: {
      name: "سیف آباد",
      province_id: 5,
      slug: "سیف آباد",
    },
  },
  {
    model: "province.city",
    pk: 229,
    fields: {
      name: "شهرجدیدهشتگرد",
      province_id: 5,
      slug: "شهرجدیدهشتگرد",
    },
  },
  {
    model: "province.city",
    pk: 230,
    fields: {
      name: "طالقان",
      province_id: 5,
      slug: "طالقان",
    },
  },
  {
    model: "province.city",
    pk: 231,
    fields: {
      name: "کمال شهر",
      province_id: 5,
      slug: "کمال شهر",
    },
  },
  {
    model: "province.city",
    pk: 232,
    fields: {
      name: "کوهسار",
      province_id: 5,
      slug: "کوهسار",
    },
  },
  {
    model: "province.city",
    pk: 233,
    fields: {
      name: "گرمدره",
      province_id: 5,
      slug: "گرمدره",
    },
  },
  {
    model: "province.city",
    pk: 234,
    fields: {
      name: "ماهدشت",
      province_id: 5,
      slug: "ماهدشت",
    },
  },
  {
    model: "province.city",
    pk: 235,
    fields: {
      name: "محمدشهر",
      province_id: 5,
      slug: "محمدشهر",
    },
  },
  {
    model: "province.city",
    pk: 236,
    fields: {
      name: "مشکین دشت",
      province_id: 5,
      slug: "مشکین دشت",
    },
  },
  {
    model: "province.city",
    pk: 237,
    fields: {
      name: "نظرآباد",
      province_id: 5,
      slug: "نظرآباد",
    },
  },
  {
    model: "province.city",
    pk: 238,
    fields: {
      name: "هشتگرد",
      province_id: 5,
      slug: "هشتگرد",
    },
  },
  {
    model: "province.city",
    pk: 1143,
    fields: {
      name: "فردیس",
      province_id: 5,
      slug: "فردیس",
    },
  },
  {
    model: "province.city",
    pk: 239,
    fields: {
      name: "ایلام",
      province_id: 6,
      slug: "ایلام",
    },
  },
  {
    model: "province.city",
    pk: 240,
    fields: {
      name: "ارکواز",
      province_id: 6,
      slug: "ارکواز",
    },
  },
  {
    model: "province.city",
    pk: 241,
    fields: {
      name: "ایوان",
      province_id: 6,
      slug: "ایوان",
    },
  },
  {
    model: "province.city",
    pk: 242,
    fields: {
      name: "آبدانان",
      province_id: 6,
      slug: "آبدانان",
    },
  },
  {
    model: "province.city",
    pk: 243,
    fields: {
      name: "آسمان آباد",
      province_id: 6,
      slug: "آسمان آباد",
    },
  },
  {
    model: "province.city",
    pk: 244,
    fields: {
      name: "بدره",
      province_id: 6,
      slug: "بدره",
    },
  },
  {
    model: "province.city",
    pk: 245,
    fields: {
      name: "پهله",
      province_id: 6,
      slug: "پهله",
    },
  },
  {
    model: "province.city",
    pk: 246,
    fields: {
      name: "توحید",
      province_id: 6,
      slug: "توحید",
    },
  },
  {
    model: "province.city",
    pk: 247,
    fields: {
      name: "چوار",
      province_id: 6,
      slug: "چوار",
    },
  },
  {
    model: "province.city",
    pk: 248,
    fields: {
      name: "دره شهر",
      province_id: 6,
      slug: "دره شهر",
    },
  },
  {
    model: "province.city",
    pk: 249,
    fields: {
      name: "دلگشا",
      province_id: 6,
      slug: "دلگشا",
    },
  },
  {
    model: "province.city",
    pk: 250,
    fields: {
      name: "دهلران",
      province_id: 6,
      slug: "دهلران",
    },
  },
  {
    model: "province.city",
    pk: 251,
    fields: {
      name: "زرنه",
      province_id: 6,
      slug: "زرنه",
    },
  },
  {
    model: "province.city",
    pk: 252,
    fields: {
      name: "سراب باغ",
      province_id: 6,
      slug: "سراب باغ",
    },
  },
  {
    model: "province.city",
    pk: 253,
    fields: {
      name: "سرابله",
      province_id: 6,
      slug: "سرابله",
    },
  },
  {
    model: "province.city",
    pk: 254,
    fields: {
      name: "صالح آباد",
      province_id: 6,
      slug: "صالح آباد",
    },
  },
  {
    model: "province.city",
    pk: 255,
    fields: {
      name: "لومار",
      province_id: 6,
      slug: "لومار",
    },
  },
  {
    model: "province.city",
    pk: 256,
    fields: {
      name: "مورموری",
      province_id: 6,
      slug: "مورموری",
    },
  },
  {
    model: "province.city",
    pk: 257,
    fields: {
      name: "موسیان",
      province_id: 6,
      slug: "موسیان",
    },
  },
  {
    model: "province.city",
    pk: 258,
    fields: {
      name: "مهران",
      province_id: 6,
      slug: "مهران",
    },
  },
  {
    model: "province.city",
    pk: 259,
    fields: {
      name: "میمه",
      province_id: 6,
      slug: "میمه",
    },
  },
  {
    model: "province.city",
    pk: 260,
    fields: {
      name: "بوشهر",
      province_id: 7,
      slug: "بوشهر",
    },
  },
  {
    model: "province.city",
    pk: 261,
    fields: {
      name: "امام حسن",
      province_id: 7,
      slug: "امام حسن",
    },
  },
  {
    model: "province.city",
    pk: 262,
    fields: {
      name: "انارستان",
      province_id: 7,
      slug: "انارستان",
    },
  },
  {
    model: "province.city",
    pk: 263,
    fields: {
      name: "اهرم",
      province_id: 7,
      slug: "اهرم",
    },
  },
  {
    model: "province.city",
    pk: 264,
    fields: {
      name: "آبپخش",
      province_id: 7,
      slug: "آبپخش",
    },
  },
  {
    model: "province.city",
    pk: 265,
    fields: {
      name: "آبدان",
      province_id: 7,
      slug: "آبدان",
    },
  },
  {
    model: "province.city",
    pk: 266,
    fields: {
      name: "برازجان",
      province_id: 7,
      slug: "برازجان",
    },
  },
  {
    model: "province.city",
    pk: 267,
    fields: {
      name: "بردخون",
      province_id: 7,
      slug: "بردخون",
    },
  },
  {
    model: "province.city",
    pk: 268,
    fields: {
      name: "بردستان",
      province_id: 7,
      slug: "بردستان",
    },
  },
  {
    model: "province.city",
    pk: 269,
    fields: {
      name: "بندر دیر",
      province_id: 7,
      slug: "بندر دیر",
    },
  },
  {
    model: "province.city",
    pk: 270,
    fields: {
      name: "بندر دیلم",
      province_id: 7,
      slug: "بندر دیلم",
    },
  },
  {
    model: "province.city",
    pk: 271,
    fields: {
      name: "بندر ریگ",
      province_id: 7,
      slug: "بندر ریگ",
    },
  },
  {
    model: "province.city",
    pk: 272,
    fields: {
      name: "بندر کنگان",
      province_id: 7,
      slug: "بندر کنگان",
    },
  },
  {
    model: "province.city",
    pk: 273,
    fields: {
      name: "بندر گناوه",
      province_id: 7,
      slug: "بندر گناوه",
    },
  },
  {
    model: "province.city",
    pk: 274,
    fields: {
      name: "بنک",
      province_id: 7,
      slug: "بنک",
    },
  },
  {
    model: "province.city",
    pk: 275,
    fields: {
      name: "تنگ ارم",
      province_id: 7,
      slug: "تنگ ارم",
    },
  },
  {
    model: "province.city",
    pk: 276,
    fields: {
      name: "جم",
      province_id: 7,
      slug: "جم",
    },
  },
  {
    model: "province.city",
    pk: 277,
    fields: {
      name: "چغادک",
      province_id: 7,
      slug: "چغادک",
    },
  },
  {
    model: "province.city",
    pk: 278,
    fields: {
      name: "خارک",
      province_id: 7,
      slug: "خارک",
    },
  },
  {
    model: "province.city",
    pk: 279,
    fields: {
      name: "خورموج",
      province_id: 7,
      slug: "خورموج",
    },
  },
  {
    model: "province.city",
    pk: 280,
    fields: {
      name: "دالکی",
      province_id: 7,
      slug: "دالکی",
    },
  },
  {
    model: "province.city",
    pk: 281,
    fields: {
      name: "دلوار",
      province_id: 7,
      slug: "دلوار",
    },
  },
  {
    model: "province.city",
    pk: 282,
    fields: {
      name: "ریز",
      province_id: 7,
      slug: "ریز",
    },
  },
  {
    model: "province.city",
    pk: 283,
    fields: {
      name: "سعدآباد",
      province_id: 7,
      slug: "سعدآباد",
    },
  },
  {
    model: "province.city",
    pk: 284,
    fields: {
      name: "سیراف",
      province_id: 7,
      slug: "سیراف",
    },
  },
  {
    model: "province.city",
    pk: 285,
    fields: {
      name: "شبانکاره",
      province_id: 7,
      slug: "شبانکاره",
    },
  },
  {
    model: "province.city",
    pk: 286,
    fields: {
      name: "شنبه",
      province_id: 7,
      slug: "شنبه",
    },
  },
  {
    model: "province.city",
    pk: 287,
    fields: {
      name: "عسلویه",
      province_id: 7,
      slug: "عسلویه",
    },
  },
  {
    model: "province.city",
    pk: 288,
    fields: {
      name: "کاکی",
      province_id: 7,
      slug: "کاکی",
    },
  },
  {
    model: "province.city",
    pk: 289,
    fields: {
      name: "کلمه",
      province_id: 7,
      slug: "کلمه",
    },
  },
  {
    model: "province.city",
    pk: 290,
    fields: {
      name: "نخل تقی",
      province_id: 7,
      slug: "نخل تقی",
    },
  },
  {
    model: "province.city",
    pk: 291,
    fields: {
      name: "وحدتیه",
      province_id: 7,
      slug: "وحدتیه",
    },
  },
  {
    model: "province.city",
    pk: 292,
    fields: {
      name: "تهران",
      province_id: 8,
      slug: "تهران",
    },
  },
  {
    model: "province.city",
    pk: 293,
    fields: {
      name: "ارجمند",
      province_id: 8,
      slug: "ارجمند",
    },
  },
  {
    model: "province.city",
    pk: 294,
    fields: {
      name: "اسلامشهر",
      province_id: 8,
      slug: "اسلامشهر",
    },
  },
  {
    model: "province.city",
    pk: 295,
    fields: {
      name: "اندیشه",
      province_id: 8,
      slug: "اندیشه",
    },
  },
  {
    model: "province.city",
    pk: 296,
    fields: {
      name: "آبسرد",
      province_id: 8,
      slug: "آبسرد",
    },
  },
  {
    model: "province.city",
    pk: 297,
    fields: {
      name: "آبعلی",
      province_id: 8,
      slug: "آبعلی",
    },
  },
  {
    model: "province.city",
    pk: 298,
    fields: {
      name: "باغستان",
      province_id: 8,
      slug: "باغستان",
    },
  },
  {
    model: "province.city",
    pk: 299,
    fields: {
      name: "باقرشهر",
      province_id: 8,
      slug: "باقرشهر",
    },
  },
  {
    model: "province.city",
    pk: 300,
    fields: {
      name: "بومهن",
      province_id: 8,
      slug: "بومهن",
    },
  },
  {
    model: "province.city",
    pk: 301,
    fields: {
      name: "پاکدشت",
      province_id: 8,
      slug: "پاکدشت",
    },
  },
  {
    model: "province.city",
    pk: 302,
    fields: {
      name: "پردیس",
      province_id: 8,
      slug: "پردیس",
    },
  },
  {
    model: "province.city",
    pk: 303,
    fields: {
      name: "پرند",
      province_id: 8,
      slug: "پرند",
    },
  },
  {
    model: "province.city",
    pk: 304,
    fields: {
      name: "پیشوا",
      province_id: 8,
      slug: "پیشوا",
    },
  },
  {
    model: "province.city",
    pk: 305,
    fields: {
      name: "تجریش",
      province_id: 8,
      slug: "تجریش",
    },
  },
  {
    model: "province.city",
    pk: 306,
    fields: {
      name: "جوادآباد",
      province_id: 8,
      slug: "جوادآباد",
    },
  },
  {
    model: "province.city",
    pk: 307,
    fields: {
      name: "چهاردانگه",
      province_id: 8,
      slug: "چهاردانگه",
    },
  },
  {
    model: "province.city",
    pk: 308,
    fields: {
      name: "حسن آباد",
      province_id: 8,
      slug: "حسن آباد",
    },
  },
  {
    model: "province.city",
    pk: 309,
    fields: {
      name: "دماوند",
      province_id: 8,
      slug: "دماوند",
    },
  },
  {
    model: "province.city",
    pk: 310,
    fields: {
      name: "رباط کریم",
      province_id: 8,
      slug: "رباط کریم",
    },
  },
  {
    model: "province.city",
    pk: 311,
    fields: {
      name: "رودهن",
      province_id: 8,
      slug: "رودهن",
    },
  },
  {
    model: "province.city",
    pk: 312,
    fields: {
      name: "ری",
      province_id: 8,
      slug: "ری",
    },
  },
  {
    model: "province.city",
    pk: 313,
    fields: {
      name: "شاهدشهر",
      province_id: 8,
      slug: "شاهدشهر",
    },
  },
  {
    model: "province.city",
    pk: 314,
    fields: {
      name: "شریف آباد",
      province_id: 8,
      slug: "شریف آباد",
    },
  },
  {
    model: "province.city",
    pk: 315,
    fields: {
      name: "شهریار",
      province_id: 8,
      slug: "شهریار",
    },
  },
  {
    model: "province.city",
    pk: 316,
    fields: {
      name: "صالح آباد",
      province_id: 8,
      slug: "صالح آباد",
    },
  },
  {
    model: "province.city",
    pk: 317,
    fields: {
      name: "صباشهر",
      province_id: 8,
      slug: "صباشهر",
    },
  },
  {
    model: "province.city",
    pk: 318,
    fields: {
      name: "صفادشت",
      province_id: 8,
      slug: "صفادشت",
    },
  },
  {
    model: "province.city",
    pk: 319,
    fields: {
      name: "فردوسیه",
      province_id: 8,
      slug: "فردوسیه",
    },
  },
  {
    model: "province.city",
    pk: 320,
    fields: {
      name: "فرون آباد",
      province_id: 8,
      slug: "فرون آباد",
    },
  },
  {
    model: "province.city",
    pk: 321,
    fields: {
      name: "فشم",
      province_id: 8,
      slug: "فشم",
    },
  },
  {
    model: "province.city",
    pk: 322,
    fields: {
      name: "فیروزکوه",
      province_id: 8,
      slug: "فیروزکوه",
    },
  },
  {
    model: "province.city",
    pk: 323,
    fields: {
      name: "قدس",
      province_id: 8,
      slug: "قدس",
    },
  },
  {
    model: "province.city",
    pk: 324,
    fields: {
      name: "قرچک",
      province_id: 8,
      slug: "قرچک",
    },
  },
  {
    model: "province.city",
    pk: 325,
    fields: {
      name: "کهریزک",
      province_id: 8,
      slug: "کهریزک",
    },
  },
  {
    model: "province.city",
    pk: 326,
    fields: {
      name: "کیلان",
      province_id: 8,
      slug: "کیلان",
    },
  },
  {
    model: "province.city",
    pk: 327,
    fields: {
      name: "گلستان",
      province_id: 8,
      slug: "گلستان",
    },
  },
  {
    model: "province.city",
    pk: 328,
    fields: {
      name: "لواسان",
      province_id: 8,
      slug: "لواسان",
    },
  },
  {
    model: "province.city",
    pk: 329,
    fields: {
      name: "ملارد",
      province_id: 8,
      slug: "ملارد",
    },
  },
  {
    model: "province.city",
    pk: 330,
    fields: {
      name: "نسیم شهر",
      province_id: 8,
      slug: "نسیم شهر",
    },
  },
  {
    model: "province.city",
    pk: 331,
    fields: {
      name: "نصیرآباد",
      province_id: 8,
      slug: "نصیرآباد",
    },
  },
  {
    model: "province.city",
    pk: 332,
    fields: {
      name: "وحیدیه",
      province_id: 8,
      slug: "وحیدیه",
    },
  },
  {
    model: "province.city",
    pk: 333,
    fields: {
      name: "ورامین",
      province_id: 8,
      slug: "ورامین",
    },
  },
  {
    model: "province.city",
    pk: 334,
    fields: {
      name: "شهرکرد",
      province_id: 9,
      slug: "شهرکرد",
    },
  },
  {
    model: "province.city",
    pk: 335,
    fields: {
      name: "اردل",
      province_id: 9,
      slug: "اردل",
    },
  },
  {
    model: "province.city",
    pk: 336,
    fields: {
      name: "آلونی",
      province_id: 9,
      slug: "آلونی",
    },
  },
  {
    model: "province.city",
    pk: 337,
    fields: {
      name: "باباحیدر",
      province_id: 9,
      slug: "باباحیدر",
    },
  },
  {
    model: "province.city",
    pk: 338,
    fields: {
      name: "بروجن",
      province_id: 9,
      slug: "بروجن",
    },
  },
  {
    model: "province.city",
    pk: 339,
    fields: {
      name: "بلداجی",
      province_id: 9,
      slug: "بلداجی",
    },
  },
  {
    model: "province.city",
    pk: 340,
    fields: {
      name: "بن",
      province_id: 9,
      slug: "بن",
    },
  },
  {
    model: "province.city",
    pk: 341,
    fields: {
      name: "جونقان",
      province_id: 9,
      slug: "جونقان",
    },
  },
  {
    model: "province.city",
    pk: 342,
    fields: {
      name: "چلگرد",
      province_id: 9,
      slug: "چلگرد",
    },
  },
  {
    model: "province.city",
    pk: 343,
    fields: {
      name: "سامان",
      province_id: 9,
      slug: "سامان",
    },
  },
  {
    model: "province.city",
    pk: 344,
    fields: {
      name: "سفیددشت",
      province_id: 9,
      slug: "سفیددشت",
    },
  },
  {
    model: "province.city",
    pk: 345,
    fields: {
      name: "سودجان",
      province_id: 9,
      slug: "سودجان",
    },
  },
  {
    model: "province.city",
    pk: 346,
    fields: {
      name: "سورشجان",
      province_id: 9,
      slug: "سورشجان",
    },
  },
  {
    model: "province.city",
    pk: 347,
    fields: {
      name: "شلمزار",
      province_id: 9,
      slug: "شلمزار",
    },
  },
  {
    model: "province.city",
    pk: 348,
    fields: {
      name: "طاقانک",
      province_id: 9,
      slug: "طاقانک",
    },
  },
  {
    model: "province.city",
    pk: 349,
    fields: {
      name: "فارسان",
      province_id: 9,
      slug: "فارسان",
    },
  },
  {
    model: "province.city",
    pk: 350,
    fields: {
      name: "فرادنبه",
      province_id: 9,
      slug: "فرادنبه",
    },
  },
  {
    model: "province.city",
    pk: 351,
    fields: {
      name: "فرخ شهر",
      province_id: 9,
      slug: "فرخ شهر",
    },
  },
  {
    model: "province.city",
    pk: 352,
    fields: {
      name: "کیان",
      province_id: 9,
      slug: "کیان",
    },
  },
  {
    model: "province.city",
    pk: 353,
    fields: {
      name: "گندمان",
      province_id: 9,
      slug: "گندمان",
    },
  },
  {
    model: "province.city",
    pk: 354,
    fields: {
      name: "گهرو",
      province_id: 9,
      slug: "گهرو",
    },
  },
  {
    model: "province.city",
    pk: 355,
    fields: {
      name: "لردگان",
      province_id: 9,
      slug: "لردگان",
    },
  },
  {
    model: "province.city",
    pk: 356,
    fields: {
      name: "مال خلیفه",
      province_id: 9,
      slug: "مال خلیفه",
    },
  },
  {
    model: "province.city",
    pk: 357,
    fields: {
      name: "ناغان",
      province_id: 9,
      slug: "ناغان",
    },
  },
  {
    model: "province.city",
    pk: 358,
    fields: {
      name: "نافچ",
      province_id: 9,
      slug: "نافچ",
    },
  },
  {
    model: "province.city",
    pk: 359,
    fields: {
      name: "نقنه",
      province_id: 9,
      slug: "نقنه",
    },
  },
  {
    model: "province.city",
    pk: 360,
    fields: {
      name: "هفشجان",
      province_id: 9,
      slug: "هفشجان",
    },
  },
  {
    model: "province.city",
    pk: 361,
    fields: {
      name: "بیرجند",
      province_id: 10,
      slug: "بیرجند",
    },
  },
  {
    model: "province.city",
    pk: 362,
    fields: {
      name: "ارسک",
      province_id: 10,
      slug: "ارسک",
    },
  },
  {
    model: "province.city",
    pk: 363,
    fields: {
      name: "اسدیه",
      province_id: 10,
      slug: "اسدیه",
    },
  },
  {
    model: "province.city",
    pk: 364,
    fields: {
      name: "اسفدن",
      province_id: 10,
      slug: "اسفدن",
    },
  },
  {
    model: "province.city",
    pk: 365,
    fields: {
      name: "اسلامیه",
      province_id: 10,
      slug: "اسلامیه",
    },
  },
  {
    model: "province.city",
    pk: 366,
    fields: {
      name: "آرین شهر",
      province_id: 10,
      slug: "آرین شهر",
    },
  },
  {
    model: "province.city",
    pk: 367,
    fields: {
      name: "آیسک",
      province_id: 10,
      slug: "آیسک",
    },
  },
  {
    model: "province.city",
    pk: 368,
    fields: {
      name: "بشرویه",
      province_id: 10,
      slug: "بشرویه",
    },
  },
  {
    model: "province.city",
    pk: 369,
    fields: {
      name: "حاجی آباد",
      province_id: 10,
      slug: "حاجی آباد",
    },
  },
  {
    model: "province.city",
    pk: 370,
    fields: {
      name: "خضری دشت بیاض",
      province_id: 10,
      slug: "خضری دشت بیاض",
    },
  },
  {
    model: "province.city",
    pk: 371,
    fields: {
      name: "خوسف",
      province_id: 10,
      slug: "خوسف",
    },
  },
  {
    model: "province.city",
    pk: 372,
    fields: {
      name: "زهان",
      province_id: 10,
      slug: "زهان",
    },
  },
  {
    model: "province.city",
    pk: 373,
    fields: {
      name: "سرایان",
      province_id: 10,
      slug: "سرایان",
    },
  },
  {
    model: "province.city",
    pk: 374,
    fields: {
      name: "سربیشه",
      province_id: 10,
      slug: "سربیشه",
    },
  },
  {
    model: "province.city",
    pk: 375,
    fields: {
      name: "سه قلعه",
      province_id: 10,
      slug: "سه قلعه",
    },
  },
  {
    model: "province.city",
    pk: 376,
    fields: {
      name: "شوسف",
      province_id: 10,
      slug: "شوسف",
    },
  },
  {
    model: "province.city",
    pk: 377,
    fields: {
      name: "طبس مسینا",
      province_id: 10,
      slug: "طبس مسینا",
    },
  },
  {
    model: "province.city",
    pk: 378,
    fields: {
      name: "فردوس",
      province_id: 10,
      slug: "فردوس",
    },
  },
  {
    model: "province.city",
    pk: 379,
    fields: {
      name: "قائن",
      province_id: 10,
      slug: "قائن",
    },
  },
  {
    model: "province.city",
    pk: 380,
    fields: {
      name: "قهستان",
      province_id: 10,
      slug: "قهستان",
    },
  },
  {
    model: "province.city",
    pk: 381,
    fields: {
      name: "گزیک",
      province_id: 10,
      slug: "گزیک",
    },
  },
  {
    model: "province.city",
    pk: 382,
    fields: {
      name: "محمدشهر",
      province_id: 10,
      slug: "محمدشهر",
    },
  },
  {
    model: "province.city",
    pk: 383,
    fields: {
      name: "مود",
      province_id: 10,
      slug: "مود",
    },
  },
  {
    model: "province.city",
    pk: 384,
    fields: {
      name: "نهبندان",
      province_id: 10,
      slug: "نهبندان",
    },
  },
  {
    model: "province.city",
    pk: 385,
    fields: {
      name: "نیمبلوک",
      province_id: 10,
      slug: "نیمبلوک",
    },
  },
  {
    model: "province.city",
    pk: 386,
    fields: {
      name: "مشهد",
      province_id: 11,
      slug: "مشهد",
    },
  },
  {
    model: "province.city",
    pk: 387,
    fields: {
      name: "احمدآبادصولت",
      province_id: 11,
      slug: "احمدآبادصولت",
    },
  },
  {
    model: "province.city",
    pk: 388,
    fields: {
      name: "انابد",
      province_id: 11,
      slug: "انابد",
    },
  },
  {
    model: "province.city",
    pk: 389,
    fields: {
      name: "باجگیران",
      province_id: 11,
      slug: "باجگیران",
    },
  },
  {
    model: "province.city",
    pk: 390,
    fields: {
      name: "باخرز",
      province_id: 11,
      slug: "باخرز",
    },
  },
  {
    model: "province.city",
    pk: 391,
    fields: {
      name: "بار",
      province_id: 11,
      slug: "بار",
    },
  },
  {
    model: "province.city",
    pk: 392,
    fields: {
      name: "بایگ",
      province_id: 11,
      slug: "بایگ",
    },
  },
  {
    model: "province.city",
    pk: 393,
    fields: {
      name: "بجستان",
      province_id: 11,
      slug: "بجستان",
    },
  },
  {
    model: "province.city",
    pk: 394,
    fields: {
      name: "بردسکن",
      province_id: 11,
      slug: "بردسکن",
    },
  },
  {
    model: "province.city",
    pk: 395,
    fields: {
      name: "بیدخت",
      province_id: 11,
      slug: "بیدخت",
    },
  },
  {
    model: "province.city",
    pk: 396,
    fields: {
      name: "تایباد",
      province_id: 11,
      slug: "تایباد",
    },
  },
  {
    model: "province.city",
    pk: 397,
    fields: {
      name: "تربت جام",
      province_id: 11,
      slug: "تربت جام",
    },
  },
  {
    model: "province.city",
    pk: 398,
    fields: {
      name: "تربت حیدریه",
      province_id: 11,
      slug: "تربت حیدریه",
    },
  },
  {
    model: "province.city",
    pk: 399,
    fields: {
      name: "جغتای",
      province_id: 11,
      slug: "جغتای",
    },
  },
  {
    model: "province.city",
    pk: 400,
    fields: {
      name: "جنگل",
      province_id: 11,
      slug: "جنگل",
    },
  },
  {
    model: "province.city",
    pk: 401,
    fields: {
      name: "چاپشلو",
      province_id: 11,
      slug: "چاپشلو",
    },
  },
  {
    model: "province.city",
    pk: 402,
    fields: {
      name: "چکنه",
      province_id: 11,
      slug: "چکنه",
    },
  },
  {
    model: "province.city",
    pk: 403,
    fields: {
      name: "چناران",
      province_id: 11,
      slug: "چناران",
    },
  },
  {
    model: "province.city",
    pk: 404,
    fields: {
      name: "خرو",
      province_id: 11,
      slug: "خرو",
    },
  },
  {
    model: "province.city",
    pk: 405,
    fields: {
      name: "خلیل آباد",
      province_id: 11,
      slug: "خلیل آباد",
    },
  },
  {
    model: "province.city",
    pk: 406,
    fields: {
      name: "خواف",
      province_id: 11,
      slug: "خواف",
    },
  },
  {
    model: "province.city",
    pk: 407,
    fields: {
      name: "داورزن",
      province_id: 11,
      slug: "داورزن",
    },
  },
  {
    model: "province.city",
    pk: 408,
    fields: {
      name: "درگز",
      province_id: 11,
      slug: "درگز",
    },
  },
  {
    model: "province.city",
    pk: 409,
    fields: {
      name: "درود",
      province_id: 11,
      slug: "درود",
    },
  },
  {
    model: "province.city",
    pk: 410,
    fields: {
      name: "دولت آباد",
      province_id: 11,
      slug: "دولت آباد",
    },
  },
  {
    model: "province.city",
    pk: 411,
    fields: {
      name: "رباط سنگ",
      province_id: 11,
      slug: "رباط سنگ",
    },
  },
  {
    model: "province.city",
    pk: 412,
    fields: {
      name: "رشتخوار",
      province_id: 11,
      slug: "رشتخوار",
    },
  },
  {
    model: "province.city",
    pk: 413,
    fields: {
      name: "رضویه",
      province_id: 11,
      slug: "رضویه",
    },
  },
  {
    model: "province.city",
    pk: 414,
    fields: {
      name: "روداب",
      province_id: 11,
      slug: "روداب",
    },
  },
  {
    model: "province.city",
    pk: 415,
    fields: {
      name: "ریوش",
      province_id: 11,
      slug: "ریوش",
    },
  },
  {
    model: "province.city",
    pk: 416,
    fields: {
      name: "سبزوار",
      province_id: 11,
      slug: "سبزوار",
    },
  },
  {
    model: "province.city",
    pk: 417,
    fields: {
      name: "سرخس",
      province_id: 11,
      slug: "سرخس",
    },
  },
  {
    model: "province.city",
    pk: 418,
    fields: {
      name: "سفیدسنگ",
      province_id: 11,
      slug: "سفیدسنگ",
    },
  },
  {
    model: "province.city",
    pk: 419,
    fields: {
      name: "سلامی",
      province_id: 11,
      slug: "سلامی",
    },
  },
  {
    model: "province.city",
    pk: 420,
    fields: {
      name: "سلطان آباد",
      province_id: 11,
      slug: "سلطان آباد",
    },
  },
  {
    model: "province.city",
    pk: 421,
    fields: {
      name: "سنگان",
      province_id: 11,
      slug: "سنگان",
    },
  },
  {
    model: "province.city",
    pk: 422,
    fields: {
      name: "شادمهر",
      province_id: 11,
      slug: "شادمهر",
    },
  },
  {
    model: "province.city",
    pk: 423,
    fields: {
      name: "شاندیز",
      province_id: 11,
      slug: "شاندیز",
    },
  },
  {
    model: "province.city",
    pk: 424,
    fields: {
      name: "ششتمد",
      province_id: 11,
      slug: "ششتمد",
    },
  },
  {
    model: "province.city",
    pk: 425,
    fields: {
      name: "شهرآباد",
      province_id: 11,
      slug: "شهرآباد",
    },
  },
  {
    model: "province.city",
    pk: 426,
    fields: {
      name: "شهرزو",
      province_id: 11,
      slug: "شهرزو",
    },
  },
  {
    model: "province.city",
    pk: 427,
    fields: {
      name: "صالح آباد",
      province_id: 11,
      slug: "صالح آباد",
    },
  },
  {
    model: "province.city",
    pk: 428,
    fields: {
      name: "طرقبه",
      province_id: 11,
      slug: "طرقبه",
    },
  },
  {
    model: "province.city",
    pk: 429,
    fields: {
      name: "عشق آباد",
      province_id: 11,
      slug: "عشق آباد",
    },
  },
  {
    model: "province.city",
    pk: 430,
    fields: {
      name: "فرهادگرد",
      province_id: 11,
      slug: "فرهادگرد",
    },
  },
  {
    model: "province.city",
    pk: 431,
    fields: {
      name: "فریمان",
      province_id: 11,
      slug: "فریمان",
    },
  },
  {
    model: "province.city",
    pk: 432,
    fields: {
      name: "فیروزه",
      province_id: 11,
      slug: "فیروزه",
    },
  },
  {
    model: "province.city",
    pk: 433,
    fields: {
      name: "فیض آباد",
      province_id: 11,
      slug: "فیض آباد",
    },
  },
  {
    model: "province.city",
    pk: 434,
    fields: {
      name: "قاسم آباد",
      province_id: 11,
      slug: "قاسم آباد",
    },
  },
  {
    model: "province.city",
    pk: 435,
    fields: {
      name: "قدمگاه",
      province_id: 11,
      slug: "قدمگاه",
    },
  },
  {
    model: "province.city",
    pk: 436,
    fields: {
      name: "قلندرآباد",
      province_id: 11,
      slug: "قلندرآباد",
    },
  },
  {
    model: "province.city",
    pk: 437,
    fields: {
      name: "قوچان",
      province_id: 11,
      slug: "قوچان",
    },
  },
  {
    model: "province.city",
    pk: 438,
    fields: {
      name: "کاخک",
      province_id: 11,
      slug: "کاخک",
    },
  },
  {
    model: "province.city",
    pk: 439,
    fields: {
      name: "کاریز",
      province_id: 11,
      slug: "کاریز",
    },
  },
  {
    model: "province.city",
    pk: 440,
    fields: {
      name: "کاشمر",
      province_id: 11,
      slug: "کاشمر",
    },
  },
  {
    model: "province.city",
    pk: 441,
    fields: {
      name: "کدکن",
      province_id: 11,
      slug: "کدکن",
    },
  },
  {
    model: "province.city",
    pk: 442,
    fields: {
      name: "کلات",
      province_id: 11,
      slug: "کلات",
    },
  },
  {
    model: "province.city",
    pk: 443,
    fields: {
      name: "کندر",
      province_id: 11,
      slug: "کندر",
    },
  },
  {
    model: "province.city",
    pk: 444,
    fields: {
      name: "گلمکان",
      province_id: 11,
      slug: "گلمکان",
    },
  },
  {
    model: "province.city",
    pk: 445,
    fields: {
      name: "گناباد",
      province_id: 11,
      slug: "گناباد",
    },
  },
  {
    model: "province.city",
    pk: 446,
    fields: {
      name: "لطف آباد",
      province_id: 11,
      slug: "لطف آباد",
    },
  },
  {
    model: "province.city",
    pk: 447,
    fields: {
      name: "مزدآوند",
      province_id: 11,
      slug: "مزدآوند",
    },
  },
  {
    model: "province.city",
    pk: 448,
    fields: {
      name: "مشهدریزه",
      province_id: 11,
      slug: "مشهدریزه",
    },
  },
  {
    model: "province.city",
    pk: 449,
    fields: {
      name: "ملک آباد",
      province_id: 11,
      slug: "ملک آباد",
    },
  },
  {
    model: "province.city",
    pk: 450,
    fields: {
      name: "نشتیفان",
      province_id: 11,
      slug: "نشتیفان",
    },
  },
  {
    model: "province.city",
    pk: 451,
    fields: {
      name: "نصرآباد",
      province_id: 11,
      slug: "نصرآباد",
    },
  },
  {
    model: "province.city",
    pk: 452,
    fields: {
      name: "نقاب",
      province_id: 11,
      slug: "نقاب",
    },
  },
  {
    model: "province.city",
    pk: 453,
    fields: {
      name: "نوخندان",
      province_id: 11,
      slug: "نوخندان",
    },
  },
  {
    model: "province.city",
    pk: 454,
    fields: {
      name: "نیشابور",
      province_id: 11,
      slug: "نیشابور",
    },
  },
  {
    model: "province.city",
    pk: 455,
    fields: {
      name: "نیل شهر",
      province_id: 11,
      slug: "نیل شهر",
    },
  },
  {
    model: "province.city",
    pk: 456,
    fields: {
      name: "همت آباد",
      province_id: 11,
      slug: "همت آباد",
    },
  },
  {
    model: "province.city",
    pk: 457,
    fields: {
      name: "یونسی",
      province_id: 11,
      slug: "یونسی",
    },
  },
  {
    model: "province.city",
    pk: 1138,
    fields: {
      name: "گلبهار",
      province_id: 11,
      slug: "گلبهار",
    },
  },
  {
    model: "province.city",
    pk: 458,
    fields: {
      name: "بجنورد",
      province_id: 12,
      slug: "بجنورد",
    },
  },
  {
    model: "province.city",
    pk: 459,
    fields: {
      name: "اسفراین",
      province_id: 12,
      slug: "اسفراین",
    },
  },
  {
    model: "province.city",
    pk: 460,
    fields: {
      name: "ایور",
      province_id: 12,
      slug: "ایور",
    },
  },
  {
    model: "province.city",
    pk: 461,
    fields: {
      name: "آشخانه",
      province_id: 12,
      slug: "آشخانه",
    },
  },
  {
    model: "province.city",
    pk: 462,
    fields: {
      name: "پیش قلعه",
      province_id: 12,
      slug: "پیش قلعه",
    },
  },
  {
    model: "province.city",
    pk: 463,
    fields: {
      name: "تیتکانلو",
      province_id: 12,
      slug: "تیتکانلو",
    },
  },
  {
    model: "province.city",
    pk: 464,
    fields: {
      name: "جاجرم",
      province_id: 12,
      slug: "جاجرم",
    },
  },
  {
    model: "province.city",
    pk: 465,
    fields: {
      name: "حصارگرمخان",
      province_id: 12,
      slug: "حصارگرمخان",
    },
  },
  {
    model: "province.city",
    pk: 466,
    fields: {
      name: "درق",
      province_id: 12,
      slug: "درق",
    },
  },
  {
    model: "province.city",
    pk: 467,
    fields: {
      name: "راز",
      province_id: 12,
      slug: "راز",
    },
  },
  {
    model: "province.city",
    pk: 468,
    fields: {
      name: "سنخواست",
      province_id: 12,
      slug: "سنخواست",
    },
  },
  {
    model: "province.city",
    pk: 469,
    fields: {
      name: "شوقان",
      province_id: 12,
      slug: "شوقان",
    },
  },
  {
    model: "province.city",
    pk: 470,
    fields: {
      name: "شیروان",
      province_id: 12,
      slug: "شیروان",
    },
  },
  {
    model: "province.city",
    pk: 471,
    fields: {
      name: "صفی آباد",
      province_id: 12,
      slug: "صفی آباد",
    },
  },
  {
    model: "province.city",
    pk: 472,
    fields: {
      name: "فاروج",
      province_id: 12,
      slug: "فاروج",
    },
  },
  {
    model: "province.city",
    pk: 473,
    fields: {
      name: "قاضی",
      province_id: 12,
      slug: "قاضی",
    },
  },
  {
    model: "province.city",
    pk: 474,
    fields: {
      name: "گرمه",
      province_id: 12,
      slug: "گرمه",
    },
  },
  {
    model: "province.city",
    pk: 475,
    fields: {
      name: "لوجلی",
      province_id: 12,
      slug: "لوجلی",
    },
  },
  {
    model: "province.city",
    pk: 476,
    fields: {
      name: "اهواز",
      province_id: 13,
      slug: "اهواز",
    },
  },
  {
    model: "province.city",
    pk: 477,
    fields: {
      name: "اروندکنار",
      province_id: 13,
      slug: "اروندکنار",
    },
  },
  {
    model: "province.city",
    pk: 478,
    fields: {
      name: "الوان",
      province_id: 13,
      slug: "الوان",
    },
  },
  {
    model: "province.city",
    pk: 479,
    fields: {
      name: "امیدیه",
      province_id: 13,
      slug: "امیدیه",
    },
  },
  {
    model: "province.city",
    pk: 480,
    fields: {
      name: "اندیمشک",
      province_id: 13,
      slug: "اندیمشک",
    },
  },
  {
    model: "province.city",
    pk: 481,
    fields: {
      name: "ایذه",
      province_id: 13,
      slug: "ایذه",
    },
  },
  {
    model: "province.city",
    pk: 482,
    fields: {
      name: "آبادان",
      province_id: 13,
      slug: "آبادان",
    },
  },
  {
    model: "province.city",
    pk: 483,
    fields: {
      name: "آغاجاری",
      province_id: 13,
      slug: "آغاجاری",
    },
  },
  {
    model: "province.city",
    pk: 484,
    fields: {
      name: "باغ ملک",
      province_id: 13,
      slug: "باغ ملک",
    },
  },
  {
    model: "province.city",
    pk: 485,
    fields: {
      name: "بستان",
      province_id: 13,
      slug: "بستان",
    },
  },
  {
    model: "province.city",
    pk: 486,
    fields: {
      name: "بندر امام خمینی",
      province_id: 13,
      slug: "بندر امام خمینی",
    },
  },
  {
    model: "province.city",
    pk: 487,
    fields: {
      name: "بندر ماهشهر",
      province_id: 13,
      slug: "بندر ماهشهر",
    },
  },
  {
    model: "province.city",
    pk: 488,
    fields: {
      name: "بهبهان",
      province_id: 13,
      slug: "بهبهان",
    },
  },
  {
    model: "province.city",
    pk: 489,
    fields: {
      name: "ترکالکی",
      province_id: 13,
      slug: "ترکالکی",
    },
  },
  {
    model: "province.city",
    pk: 490,
    fields: {
      name: "جایزان",
      province_id: 13,
      slug: "جایزان",
    },
  },
  {
    model: "province.city",
    pk: 491,
    fields: {
      name: "جنت مکان",
      province_id: 13,
      slug: "جنت مکان",
    },
  },
  {
    model: "province.city",
    pk: 492,
    fields: {
      name: "چغامیش",
      province_id: 13,
      slug: "چغامیش",
    },
  },
  {
    model: "province.city",
    pk: 493,
    fields: {
      name: "چمران",
      province_id: 13,
      slug: "چمران",
    },
  },
  {
    model: "province.city",
    pk: 494,
    fields: {
      name: "چوئبده",
      province_id: 13,
      slug: "چوئبده",
    },
  },
  {
    model: "province.city",
    pk: 495,
    fields: {
      name: "حر",
      province_id: 13,
      slug: "حر",
    },
  },
  {
    model: "province.city",
    pk: 496,
    fields: {
      name: "حسینیه",
      province_id: 13,
      slug: "حسینیه",
    },
  },
  {
    model: "province.city",
    pk: 497,
    fields: {
      name: "حمزه",
      province_id: 13,
      slug: "حمزه",
    },
  },
  {
    model: "province.city",
    pk: 498,
    fields: {
      name: "حمیدیه",
      province_id: 13,
      slug: "حمیدیه",
    },
  },
  {
    model: "province.city",
    pk: 499,
    fields: {
      name: "خرمشهر",
      province_id: 13,
      slug: "خرمشهر",
    },
  },
  {
    model: "province.city",
    pk: 500,
    fields: {
      name: "دارخوین",
      province_id: 13,
      slug: "دارخوین",
    },
  },
  {
    model: "province.city",
    pk: 501,
    fields: {
      name: "دزآب",
      province_id: 13,
      slug: "دزآب",
    },
  },
  {
    model: "province.city",
    pk: 502,
    fields: {
      name: "دزفول",
      province_id: 13,
      slug: "دزفول",
    },
  },
  {
    model: "province.city",
    pk: 503,
    fields: {
      name: "دهدز",
      province_id: 13,
      slug: "دهدز",
    },
  },
  {
    model: "province.city",
    pk: 504,
    fields: {
      name: "رامشیر",
      province_id: 13,
      slug: "رامشیر",
    },
  },
  {
    model: "province.city",
    pk: 505,
    fields: {
      name: "رامهرمز",
      province_id: 13,
      slug: "رامهرمز",
    },
  },
  {
    model: "province.city",
    pk: 506,
    fields: {
      name: "رفیع",
      province_id: 13,
      slug: "رفیع",
    },
  },
  {
    model: "province.city",
    pk: 507,
    fields: {
      name: "زهره",
      province_id: 13,
      slug: "زهره",
    },
  },
  {
    model: "province.city",
    pk: 508,
    fields: {
      name: "سالند",
      province_id: 13,
      slug: "سالند",
    },
  },
  {
    model: "province.city",
    pk: 509,
    fields: {
      name: "سردشت",
      province_id: 13,
      slug: "سردشت",
    },
  },
  {
    model: "province.city",
    pk: 510,
    fields: {
      name: "سماله",
      province_id: 13,
      slug: "سماله",
    },
  },
  {
    model: "province.city",
    pk: 511,
    fields: {
      name: "سوسنگرد",
      province_id: 13,
      slug: "سوسنگرد",
    },
  },
  {
    model: "province.city",
    pk: 512,
    fields: {
      name: "شادگان",
      province_id: 13,
      slug: "شادگان",
    },
  },
  {
    model: "province.city",
    pk: 513,
    fields: {
      name: "شاوور",
      province_id: 13,
      slug: "شاوور",
    },
  },
  {
    model: "province.city",
    pk: 514,
    fields: {
      name: "شرافت",
      province_id: 13,
      slug: "شرافت",
    },
  },
  {
    model: "province.city",
    pk: 515,
    fields: {
      name: "شوش",
      province_id: 13,
      slug: "شوش",
    },
  },
  {
    model: "province.city",
    pk: 516,
    fields: {
      name: "شوشتر",
      province_id: 13,
      slug: "شوشتر",
    },
  },
  {
    model: "province.city",
    pk: 517,
    fields: {
      name: "شیبان",
      province_id: 13,
      slug: "شیبان",
    },
  },
  {
    model: "province.city",
    pk: 518,
    fields: {
      name: "صالح شهر",
      province_id: 13,
      slug: "صالح شهر",
    },
  },
  {
    model: "province.city",
    pk: 519,
    fields: {
      name: "صالح مشطط",
      province_id: 13,
      slug: "صالح مشطط",
    },
  },
  {
    model: "province.city",
    pk: 520,
    fields: {
      name: "صفی آباد",
      province_id: 13,
      slug: "صفی آباد",
    },
  },
  {
    model: "province.city",
    pk: 521,
    fields: {
      name: "صیدون",
      province_id: 13,
      slug: "صیدون",
    },
  },
  {
    model: "province.city",
    pk: 522,
    fields: {
      name: "قلعه تل",
      province_id: 13,
      slug: "قلعه تل",
    },
  },
  {
    model: "province.city",
    pk: 523,
    fields: {
      name: "قلعه خواجه",
      province_id: 13,
      slug: "قلعه خواجه",
    },
  },
  {
    model: "province.city",
    pk: 524,
    fields: {
      name: "گتوند",
      province_id: 13,
      slug: "گتوند",
    },
  },
  {
    model: "province.city",
    pk: 525,
    fields: {
      name: "گوریه",
      province_id: 13,
      slug: "گوریه",
    },
  },
  {
    model: "province.city",
    pk: 526,
    fields: {
      name: "لالی",
      province_id: 13,
      slug: "لالی",
    },
  },
  {
    model: "province.city",
    pk: 527,
    fields: {
      name: "مسجدسلیمان",
      province_id: 13,
      slug: "مسجدسلیمان",
    },
  },
  {
    model: "province.city",
    pk: 528,
    fields: {
      name: "مشراگه",
      province_id: 13,
      slug: "مشراگه",
    },
  },
  {
    model: "province.city",
    pk: 529,
    fields: {
      name: "مقاومت",
      province_id: 13,
      slug: "مقاومت",
    },
  },
  {
    model: "province.city",
    pk: 530,
    fields: {
      name: "ملاثانی",
      province_id: 13,
      slug: "ملاثانی",
    },
  },
  {
    model: "province.city",
    pk: 531,
    fields: {
      name: "میانرود",
      province_id: 13,
      slug: "میانرود",
    },
  },
  {
    model: "province.city",
    pk: 532,
    fields: {
      name: "میداود",
      province_id: 13,
      slug: "میداود",
    },
  },
  {
    model: "province.city",
    pk: 533,
    fields: {
      name: "مینوشهر",
      province_id: 13,
      slug: "مینوشهر",
    },
  },
  {
    model: "province.city",
    pk: 534,
    fields: {
      name: "ویس",
      province_id: 13,
      slug: "ویس",
    },
  },
  {
    model: "province.city",
    pk: 535,
    fields: {
      name: "هفتگل",
      province_id: 13,
      slug: "هفتگل",
    },
  },
  {
    model: "province.city",
    pk: 536,
    fields: {
      name: "هندیجان",
      province_id: 13,
      slug: "هندیجان",
    },
  },
  {
    model: "province.city",
    pk: 537,
    fields: {
      name: "هویزه",
      province_id: 13,
      slug: "هویزه",
    },
  },
  {
    model: "province.city",
    pk: 538,
    fields: {
      name: "زنجان",
      province_id: 14,
      slug: "زنجان",
    },
  },
  {
    model: "province.city",
    pk: 539,
    fields: {
      name: "ابهر",
      province_id: 14,
      slug: "ابهر",
    },
  },
  {
    model: "province.city",
    pk: 540,
    fields: {
      name: "ارمغانخانه",
      province_id: 14,
      slug: "ارمغانخانه",
    },
  },
  {
    model: "province.city",
    pk: 541,
    fields: {
      name: "آب بر",
      province_id: 14,
      slug: "آب بر",
    },
  },
  {
    model: "province.city",
    pk: 542,
    fields: {
      name: "چورزق",
      province_id: 14,
      slug: "چورزق",
    },
  },
  {
    model: "province.city",
    pk: 543,
    fields: {
      name: "حلب",
      province_id: 14,
      slug: "حلب",
    },
  },
  {
    model: "province.city",
    pk: 544,
    fields: {
      name: "خرمدره",
      province_id: 14,
      slug: "خرمدره",
    },
  },
  {
    model: "province.city",
    pk: 545,
    fields: {
      name: "دندی",
      province_id: 14,
      slug: "دندی",
    },
  },
  {
    model: "province.city",
    pk: 546,
    fields: {
      name: "زرین آباد",
      province_id: 14,
      slug: "زرین آباد",
    },
  },
  {
    model: "province.city",
    pk: 547,
    fields: {
      name: "زرین رود",
      province_id: 14,
      slug: "زرین رود",
    },
  },
  {
    model: "province.city",
    pk: 548,
    fields: {
      name: "سجاس",
      province_id: 14,
      slug: "سجاس",
    },
  },
  {
    model: "province.city",
    pk: 549,
    fields: {
      name: "سلطانیه",
      province_id: 14,
      slug: "سلطانیه",
    },
  },
  {
    model: "province.city",
    pk: 550,
    fields: {
      name: "سهرورد",
      province_id: 14,
      slug: "سهرورد",
    },
  },
  {
    model: "province.city",
    pk: 551,
    fields: {
      name: "صائین قلعه",
      province_id: 14,
      slug: "صائین قلعه",
    },
  },
  {
    model: "province.city",
    pk: 552,
    fields: {
      name: "قیدار",
      province_id: 14,
      slug: "قیدار",
    },
  },
  {
    model: "province.city",
    pk: 553,
    fields: {
      name: "گرماب",
      province_id: 14,
      slug: "گرماب",
    },
  },
  {
    model: "province.city",
    pk: 554,
    fields: {
      name: "ماه نشان",
      province_id: 14,
      slug: "ماه نشان",
    },
  },
  {
    model: "province.city",
    pk: 555,
    fields: {
      name: "هیدج",
      province_id: 14,
      slug: "هیدج",
    },
  },
  {
    model: "province.city",
    pk: 556,
    fields: {
      name: "سمنان",
      province_id: 15,
      slug: "سمنان",
    },
  },
  {
    model: "province.city",
    pk: 557,
    fields: {
      name: "امیریه",
      province_id: 15,
      slug: "امیریه",
    },
  },
  {
    model: "province.city",
    pk: 558,
    fields: {
      name: "ایوانکی",
      province_id: 15,
      slug: "ایوانکی",
    },
  },
  {
    model: "province.city",
    pk: 559,
    fields: {
      name: "آرادان",
      province_id: 15,
      slug: "آرادان",
    },
  },
  {
    model: "province.city",
    pk: 560,
    fields: {
      name: "بسطام",
      province_id: 15,
      slug: "بسطام",
    },
  },
  {
    model: "province.city",
    pk: 561,
    fields: {
      name: "بیارجمند",
      province_id: 15,
      slug: "بیارجمند",
    },
  },
  {
    model: "province.city",
    pk: 562,
    fields: {
      name: "دامغان",
      province_id: 15,
      slug: "دامغان",
    },
  },
  {
    model: "province.city",
    pk: 563,
    fields: {
      name: "درجزین",
      province_id: 15,
      slug: "درجزین",
    },
  },
  {
    model: "province.city",
    pk: 564,
    fields: {
      name: "دیباج",
      province_id: 15,
      slug: "دیباج",
    },
  },
  {
    model: "province.city",
    pk: 565,
    fields: {
      name: "سرخه",
      province_id: 15,
      slug: "سرخه",
    },
  },
  {
    model: "province.city",
    pk: 566,
    fields: {
      name: "شاهرود",
      province_id: 15,
      slug: "شاهرود",
    },
  },
  {
    model: "province.city",
    pk: 567,
    fields: {
      name: "شهمیرزاد",
      province_id: 15,
      slug: "شهمیرزاد",
    },
  },
  {
    model: "province.city",
    pk: 568,
    fields: {
      name: "کلاته خیج",
      province_id: 15,
      slug: "کلاته خیج",
    },
  },
  {
    model: "province.city",
    pk: 569,
    fields: {
      name: "گرمسار",
      province_id: 15,
      slug: "گرمسار",
    },
  },
  {
    model: "province.city",
    pk: 570,
    fields: {
      name: "مجن",
      province_id: 15,
      slug: "مجن",
    },
  },
  {
    model: "province.city",
    pk: 571,
    fields: {
      name: "مهدی شهر",
      province_id: 15,
      slug: "مهدی شهر",
    },
  },
  {
    model: "province.city",
    pk: 572,
    fields: {
      name: "میامی",
      province_id: 15,
      slug: "میامی",
    },
  },
  {
    model: "province.city",
    pk: 573,
    fields: {
      name: "زاهدان",
      province_id: 16,
      slug: "زاهدان",
    },
  },
  {
    model: "province.city",
    pk: 574,
    fields: {
      name: "ادیمی",
      province_id: 16,
      slug: "ادیمی",
    },
  },
  {
    model: "province.city",
    pk: 575,
    fields: {
      name: "اسپکه",
      province_id: 16,
      slug: "اسپکه",
    },
  },
  {
    model: "province.city",
    pk: 576,
    fields: {
      name: "ایرانشهر",
      province_id: 16,
      slug: "ایرانشهر",
    },
  },
  {
    model: "province.city",
    pk: 577,
    fields: {
      name: "بزمان",
      province_id: 16,
      slug: "بزمان",
    },
  },
  {
    model: "province.city",
    pk: 578,
    fields: {
      name: "بمپور",
      province_id: 16,
      slug: "بمپور",
    },
  },
  {
    model: "province.city",
    pk: 579,
    fields: {
      name: "بنت",
      province_id: 16,
      slug: "بنت",
    },
  },
  {
    model: "province.city",
    pk: 580,
    fields: {
      name: "بنجار",
      province_id: 16,
      slug: "بنجار",
    },
  },
  {
    model: "province.city",
    pk: 581,
    fields: {
      name: "پیشین",
      province_id: 16,
      slug: "پیشین",
    },
  },
  {
    model: "province.city",
    pk: 582,
    fields: {
      name: "جالق",
      province_id: 16,
      slug: "جالق",
    },
  },
  {
    model: "province.city",
    pk: 583,
    fields: {
      name: "چاه بهار",
      province_id: 16,
      slug: "چاه بهار",
    },
  },
  {
    model: "province.city",
    pk: 584,
    fields: {
      name: "خاش",
      province_id: 16,
      slug: "خاش",
    },
  },
  {
    model: "province.city",
    pk: 585,
    fields: {
      name: "دوست محمد",
      province_id: 16,
      slug: "دوست محمد",
    },
  },
  {
    model: "province.city",
    pk: 586,
    fields: {
      name: "راسک",
      province_id: 16,
      slug: "راسک",
    },
  },
  {
    model: "province.city",
    pk: 587,
    fields: {
      name: "زابل",
      province_id: 16,
      slug: "زابل",
    },
  },
  {
    model: "province.city",
    pk: 588,
    fields: {
      name: "زابلی",
      province_id: 16,
      slug: "زابلی",
    },
  },
  {
    model: "province.city",
    pk: 589,
    fields: {
      name: "زرآباد",
      province_id: 16,
      slug: "زرآباد",
    },
  },
  {
    model: "province.city",
    pk: 590,
    fields: {
      name: "زهک",
      province_id: 16,
      slug: "زهک",
    },
  },
  {
    model: "province.city",
    pk: 591,
    fields: {
      name: "سراوان",
      province_id: 16,
      slug: "سراوان",
    },
  },
  {
    model: "province.city",
    pk: 592,
    fields: {
      name: "سرباز",
      province_id: 16,
      slug: "سرباز",
    },
  },
  {
    model: "province.city",
    pk: 593,
    fields: {
      name: "سوران",
      province_id: 16,
      slug: "سوران",
    },
  },
  {
    model: "province.city",
    pk: 594,
    fields: {
      name: "سیرکان",
      province_id: 16,
      slug: "سیرکان",
    },
  },
  {
    model: "province.city",
    pk: 595,
    fields: {
      name: "علی اکبر",
      province_id: 16,
      slug: "علی اکبر",
    },
  },
  {
    model: "province.city",
    pk: 596,
    fields: {
      name: "فنوج",
      province_id: 16,
      slug: "فنوج",
    },
  },
  {
    model: "province.city",
    pk: 597,
    fields: {
      name: "قصرقند",
      province_id: 16,
      slug: "قصرقند",
    },
  },
  {
    model: "province.city",
    pk: 598,
    fields: {
      name: "کنارک",
      province_id: 16,
      slug: "کنارک",
    },
  },
  {
    model: "province.city",
    pk: 599,
    fields: {
      name: "گشت",
      province_id: 16,
      slug: "گشت",
    },
  },
  {
    model: "province.city",
    pk: 600,
    fields: {
      name: "گلمورتی",
      province_id: 16,
      slug: "گلمورتی",
    },
  },
  {
    model: "province.city",
    pk: 601,
    fields: {
      name: "محمدان",
      province_id: 16,
      slug: "محمدان",
    },
  },
  {
    model: "province.city",
    pk: 602,
    fields: {
      name: "محمدآباد",
      province_id: 16,
      slug: "محمدآباد",
    },
  },
  {
    model: "province.city",
    pk: 603,
    fields: {
      name: "محمدی",
      province_id: 16,
      slug: "محمدی",
    },
  },
  {
    model: "province.city",
    pk: 604,
    fields: {
      name: "میرجاوه",
      province_id: 16,
      slug: "میرجاوه",
    },
  },
  {
    model: "province.city",
    pk: 605,
    fields: {
      name: "نصرت آباد",
      province_id: 16,
      slug: "نصرت آباد",
    },
  },
  {
    model: "province.city",
    pk: 606,
    fields: {
      name: "نگور",
      province_id: 16,
      slug: "نگور",
    },
  },
  {
    model: "province.city",
    pk: 607,
    fields: {
      name: "نوک آباد",
      province_id: 16,
      slug: "نوک آباد",
    },
  },
  {
    model: "province.city",
    pk: 608,
    fields: {
      name: "نیک شهر",
      province_id: 16,
      slug: "نیک شهر",
    },
  },
  {
    model: "province.city",
    pk: 609,
    fields: {
      name: "هیدوج",
      province_id: 16,
      slug: "هیدوج",
    },
  },
  {
    model: "province.city",
    pk: 610,
    fields: {
      name: "شیراز",
      province_id: 17,
      slug: "شیراز",
    },
  },
  {
    model: "province.city",
    pk: 611,
    fields: {
      name: "اردکان",
      province_id: 17,
      slug: "اردکان",
    },
  },
  {
    model: "province.city",
    pk: 612,
    fields: {
      name: "ارسنجان",
      province_id: 17,
      slug: "ارسنجان",
    },
  },
  {
    model: "province.city",
    pk: 613,
    fields: {
      name: "استهبان",
      province_id: 17,
      slug: "استهبان",
    },
  },
  {
    model: "province.city",
    pk: 614,
    fields: {
      name: "اسیر",
      province_id: 17,
      slug: "اسیر",
    },
  },
  {
    model: "province.city",
    pk: 615,
    fields: {
      name: "اشکنان",
      province_id: 17,
      slug: "اشکنان",
    },
  },
  {
    model: "province.city",
    pk: 616,
    fields: {
      name: "افزر",
      province_id: 17,
      slug: "افزر",
    },
  },
  {
    model: "province.city",
    pk: 617,
    fields: {
      name: "اقلید",
      province_id: 17,
      slug: "اقلید",
    },
  },
  {
    model: "province.city",
    pk: 618,
    fields: {
      name: "امام شهر",
      province_id: 17,
      slug: "امام شهر",
    },
  },
  {
    model: "province.city",
    pk: 619,
    fields: {
      name: "اوز",
      province_id: 17,
      slug: "اوز",
    },
  },
  {
    model: "province.city",
    pk: 620,
    fields: {
      name: "اهل",
      province_id: 17,
      slug: "اهل",
    },
  },
  {
    model: "province.city",
    pk: 621,
    fields: {
      name: "ایج",
      province_id: 17,
      slug: "ایج",
    },
  },
  {
    model: "province.city",
    pk: 622,
    fields: {
      name: "ایزدخواست",
      province_id: 17,
      slug: "ایزدخواست",
    },
  },
  {
    model: "province.city",
    pk: 623,
    fields: {
      name: "آباده",
      province_id: 17,
      slug: "آباده",
    },
  },
  {
    model: "province.city",
    pk: 624,
    fields: {
      name: "آباده طشک",
      province_id: 17,
      slug: "آباده طشک",
    },
  },
  {
    model: "province.city",
    pk: 625,
    fields: {
      name: "باب انار",
      province_id: 17,
      slug: "باب انار",
    },
  },
  {
    model: "province.city",
    pk: 626,
    fields: {
      name: "بالاده",
      province_id: 17,
      slug: "بالاده",
    },
  },
  {
    model: "province.city",
    pk: 627,
    fields: {
      name: "بنارویه",
      province_id: 17,
      slug: "بنارویه",
    },
  },
  {
    model: "province.city",
    pk: 628,
    fields: {
      name: "بوانات",
      province_id: 17,
      slug: "بوانات",
    },
  },
  {
    model: "province.city",
    pk: 629,
    fields: {
      name: "بهمن",
      province_id: 17,
      slug: "بهمن",
    },
  },
  {
    model: "province.city",
    pk: 630,
    fields: {
      name: "بیرم",
      province_id: 17,
      slug: "بیرم",
    },
  },
  {
    model: "province.city",
    pk: 631,
    fields: {
      name: "بیضا",
      province_id: 17,
      slug: "بیضا",
    },
  },
  {
    model: "province.city",
    pk: 632,
    fields: {
      name: "جنت شهر",
      province_id: 17,
      slug: "جنت شهر",
    },
  },
  {
    model: "province.city",
    pk: 633,
    fields: {
      name: "جویم",
      province_id: 17,
      slug: "جویم",
    },
  },
  {
    model: "province.city",
    pk: 634,
    fields: {
      name: "جهرم",
      province_id: 17,
      slug: "جهرم",
    },
  },
  {
    model: "province.city",
    pk: 635,
    fields: {
      name: "حاجی آباد",
      province_id: 17,
      slug: "حاجی آباد",
    },
  },
  {
    model: "province.city",
    pk: 636,
    fields: {
      name: "حسامی",
      province_id: 17,
      slug: "حسامی",
    },
  },
  {
    model: "province.city",
    pk: 637,
    fields: {
      name: "حسن آباد",
      province_id: 17,
      slug: "حسن آباد",
    },
  },
  {
    model: "province.city",
    pk: 638,
    fields: {
      name: "خانه زنیان",
      province_id: 17,
      slug: "خانه زنیان",
    },
  },
  {
    model: "province.city",
    pk: 639,
    fields: {
      name: "خاوران",
      province_id: 17,
      slug: "خاوران",
    },
  },
  {
    model: "province.city",
    pk: 640,
    fields: {
      name: "خرامه",
      province_id: 17,
      slug: "خرامه",
    },
  },
  {
    model: "province.city",
    pk: 641,
    fields: {
      name: "خشت",
      province_id: 17,
      slug: "خشت",
    },
  },
  {
    model: "province.city",
    pk: 642,
    fields: {
      name: "خنج",
      province_id: 17,
      slug: "خنج",
    },
  },
  {
    model: "province.city",
    pk: 643,
    fields: {
      name: "خور",
      province_id: 17,
      slug: "خور",
    },
  },
  {
    model: "province.city",
    pk: 644,
    fields: {
      name: "خومه زار",
      province_id: 17,
      slug: "خومه زار",
    },
  },
  {
    model: "province.city",
    pk: 645,
    fields: {
      name: "داراب",
      province_id: 17,
      slug: "داراب",
    },
  },
  {
    model: "province.city",
    pk: 646,
    fields: {
      name: "داریان",
      province_id: 17,
      slug: "داریان",
    },
  },
  {
    model: "province.city",
    pk: 647,
    fields: {
      name: "دبیران",
      province_id: 17,
      slug: "دبیران",
    },
  },
  {
    model: "province.city",
    pk: 648,
    fields: {
      name: "دژکرد",
      province_id: 17,
      slug: "دژکرد",
    },
  },
  {
    model: "province.city",
    pk: 649,
    fields: {
      name: "دوبرجی",
      province_id: 17,
      slug: "دوبرجی",
    },
  },
  {
    model: "province.city",
    pk: 650,
    fields: {
      name: "دوزه",
      province_id: 17,
      slug: "دوزه",
    },
  },
  {
    model: "province.city",
    pk: 651,
    fields: {
      name: "دهرم",
      province_id: 17,
      slug: "دهرم",
    },
  },
  {
    model: "province.city",
    pk: 652,
    fields: {
      name: "رامجرد",
      province_id: 17,
      slug: "رامجرد",
    },
  },
  {
    model: "province.city",
    pk: 653,
    fields: {
      name: "رونیز",
      province_id: 17,
      slug: "رونیز",
    },
  },
  {
    model: "province.city",
    pk: 654,
    fields: {
      name: "زاهدشهر",
      province_id: 17,
      slug: "زاهدشهر",
    },
  },
  {
    model: "province.city",
    pk: 655,
    fields: {
      name: "زرقان",
      province_id: 17,
      slug: "زرقان",
    },
  },
  {
    model: "province.city",
    pk: 656,
    fields: {
      name: "سده",
      province_id: 17,
      slug: "سده",
    },
  },
  {
    model: "province.city",
    pk: 657,
    fields: {
      name: "سروستان",
      province_id: 17,
      slug: "سروستان",
    },
  },
  {
    model: "province.city",
    pk: 658,
    fields: {
      name: "سعادت شهر",
      province_id: 17,
      slug: "سعادت شهر",
    },
  },
  {
    model: "province.city",
    pk: 659,
    fields: {
      name: "سورمق",
      province_id: 17,
      slug: "سورمق",
    },
  },
  {
    model: "province.city",
    pk: 660,
    fields: {
      name: "سیدان",
      province_id: 17,
      slug: "سیدان",
    },
  },
  {
    model: "province.city",
    pk: 661,
    fields: {
      name: "ششده",
      province_id: 17,
      slug: "ششده",
    },
  },
  {
    model: "province.city",
    pk: 662,
    fields: {
      name: "شهر جدید صدرا",
      province_id: 17,
      slug: "شهر جدید صدرا",
    },
  },
  {
    model: "province.city",
    pk: 663,
    fields: {
      name: "شهرپیر",
      province_id: 17,
      slug: "شهرپیر",
    },
  },
  {
    model: "province.city",
    pk: 664,
    fields: {
      name: "صغاد",
      province_id: 17,
      slug: "صغاد",
    },
  },
  {
    model: "province.city",
    pk: 665,
    fields: {
      name: "صفاشهر",
      province_id: 17,
      slug: "صفاشهر",
    },
  },
  {
    model: "province.city",
    pk: 666,
    fields: {
      name: "علامرودشت",
      province_id: 17,
      slug: "علامرودشت",
    },
  },
  {
    model: "province.city",
    pk: 667,
    fields: {
      name: "عمادده",
      province_id: 17,
      slug: "عمادده",
    },
  },
  {
    model: "province.city",
    pk: 668,
    fields: {
      name: "فدامی",
      province_id: 17,
      slug: "فدامی",
    },
  },
  {
    model: "province.city",
    pk: 669,
    fields: {
      name: "فراشبند",
      province_id: 17,
      slug: "فراشبند",
    },
  },
  {
    model: "province.city",
    pk: 670,
    fields: {
      name: "فسا",
      province_id: 17,
      slug: "فسا",
    },
  },
  {
    model: "province.city",
    pk: 671,
    fields: {
      name: "فیروزآباد",
      province_id: 17,
      slug: "فیروزآباد",
    },
  },
  {
    model: "province.city",
    pk: 672,
    fields: {
      name: "قادرآباد",
      province_id: 17,
      slug: "قادرآباد",
    },
  },
  {
    model: "province.city",
    pk: 673,
    fields: {
      name: "قائمیه",
      province_id: 17,
      slug: "قائمیه",
    },
  },
  {
    model: "province.city",
    pk: 674,
    fields: {
      name: "قطب آباد",
      province_id: 17,
      slug: "قطب آباد",
    },
  },
  {
    model: "province.city",
    pk: 675,
    fields: {
      name: "قطرویه",
      province_id: 17,
      slug: "قطرویه",
    },
  },
  {
    model: "province.city",
    pk: 676,
    fields: {
      name: "قیر",
      province_id: 17,
      slug: "قیر",
    },
  },
  {
    model: "province.city",
    pk: 677,
    fields: {
      name: "کارزین",
      province_id: 17,
      slug: "کارزین",
    },
  },
  {
    model: "province.city",
    pk: 678,
    fields: {
      name: "کازرون",
      province_id: 17,
      slug: "کازرون",
    },
  },
  {
    model: "province.city",
    pk: 679,
    fields: {
      name: "کامفیروز",
      province_id: 17,
      slug: "کامفیروز",
    },
  },
  {
    model: "province.city",
    pk: 680,
    fields: {
      name: "کره ای",
      province_id: 17,
      slug: "کره ای",
    },
  },
  {
    model: "province.city",
    pk: 681,
    fields: {
      name: "کنارتخته",
      province_id: 17,
      slug: "کنارتخته",
    },
  },
  {
    model: "province.city",
    pk: 682,
    fields: {
      name: "کوار",
      province_id: 17,
      slug: "کوار",
    },
  },
  {
    model: "province.city",
    pk: 683,
    fields: {
      name: "کوهنجان",
      province_id: 17,
      slug: "کوهنجان",
    },
  },
  {
    model: "province.city",
    pk: 684,
    fields: {
      name: "گراش",
      province_id: 17,
      slug: "گراش",
    },
  },
  {
    model: "province.city",
    pk: 685,
    fields: {
      name: "گله دار",
      province_id: 17,
      slug: "گله دار",
    },
  },
  {
    model: "province.city",
    pk: 686,
    fields: {
      name: "لار",
      province_id: 17,
      slug: "لار",
    },
  },
  {
    model: "province.city",
    pk: 687,
    fields: {
      name: "لامرد",
      province_id: 17,
      slug: "لامرد",
    },
  },
  {
    model: "province.city",
    pk: 688,
    fields: {
      name: "لپوئی",
      province_id: 17,
      slug: "لپوئی",
    },
  },
  {
    model: "province.city",
    pk: 689,
    fields: {
      name: "لطیفی",
      province_id: 17,
      slug: "لطیفی",
    },
  },
  {
    model: "province.city",
    pk: 690,
    fields: {
      name: "مبارک آباد",
      province_id: 17,
      slug: "مبارک آباد",
    },
  },
  {
    model: "province.city",
    pk: 691,
    fields: {
      name: "مرودشت",
      province_id: 17,
      slug: "مرودشت",
    },
  },
  {
    model: "province.city",
    pk: 692,
    fields: {
      name: "مشکان",
      province_id: 17,
      slug: "مشکان",
    },
  },
  {
    model: "province.city",
    pk: 693,
    fields: {
      name: "مصیری",
      province_id: 17,
      slug: "مصیری",
    },
  },
  {
    model: "province.city",
    pk: 694,
    fields: {
      name: "مهر",
      province_id: 17,
      slug: "مهر",
    },
  },
  {
    model: "province.city",
    pk: 695,
    fields: {
      name: "میمند",
      province_id: 17,
      slug: "میمند",
    },
  },
  {
    model: "province.city",
    pk: 696,
    fields: {
      name: "نوبندگان",
      province_id: 17,
      slug: "نوبندگان",
    },
  },
  {
    model: "province.city",
    pk: 697,
    fields: {
      name: "نوجین",
      province_id: 17,
      slug: "نوجین",
    },
  },
  {
    model: "province.city",
    pk: 698,
    fields: {
      name: "نودان",
      province_id: 17,
      slug: "نودان",
    },
  },
  {
    model: "province.city",
    pk: 699,
    fields: {
      name: "نورآباد",
      province_id: 17,
      slug: "نورآباد",
    },
  },
  {
    model: "province.city",
    pk: 700,
    fields: {
      name: "نی ریز",
      province_id: 17,
      slug: "نی ریز",
    },
  },
  {
    model: "province.city",
    pk: 701,
    fields: {
      name: "وراوی",
      province_id: 17,
      slug: "وراوی",
    },
  },
  {
    model: "province.city",
    pk: 702,
    fields: {
      name: "هماشهر",
      province_id: 17,
      slug: "هماشهر",
    },
  },
  {
    model: "province.city",
    pk: 1139,
    fields: {
      name: "نورآباد ممسنی",
      province_id: 17,
      slug: "نورآباد ممسنی",
    },
  },
  {
    model: "province.city",
    pk: 703,
    fields: {
      name: "قزوین",
      province_id: 18,
      slug: "قزوین",
    },
  },
  {
    model: "province.city",
    pk: 704,
    fields: {
      name: "ارداق",
      province_id: 18,
      slug: "ارداق",
    },
  },
  {
    model: "province.city",
    pk: 705,
    fields: {
      name: "اسفرورین",
      province_id: 18,
      slug: "اسفرورین",
    },
  },
  {
    model: "province.city",
    pk: 706,
    fields: {
      name: "اقبالیه",
      province_id: 18,
      slug: "اقبالیه",
    },
  },
  {
    model: "province.city",
    pk: 707,
    fields: {
      name: "الوند",
      province_id: 18,
      slug: "الوند",
    },
  },
  {
    model: "province.city",
    pk: 708,
    fields: {
      name: "آبگرم",
      province_id: 18,
      slug: "آبگرم",
    },
  },
  {
    model: "province.city",
    pk: 709,
    fields: {
      name: "آبیک",
      province_id: 18,
      slug: "آبیک",
    },
  },
  {
    model: "province.city",
    pk: 710,
    fields: {
      name: "آوج",
      province_id: 18,
      slug: "آوج",
    },
  },
  {
    model: "province.city",
    pk: 711,
    fields: {
      name: "بوئین زهرا",
      province_id: 18,
      slug: "بوئین زهرا",
    },
  },
  {
    model: "province.city",
    pk: 712,
    fields: {
      name: "بیدستان",
      province_id: 18,
      slug: "بیدستان",
    },
  },
  {
    model: "province.city",
    pk: 713,
    fields: {
      name: "تاکستان",
      province_id: 18,
      slug: "تاکستان",
    },
  },
  {
    model: "province.city",
    pk: 714,
    fields: {
      name: "خاکعلی",
      province_id: 18,
      slug: "خاکعلی",
    },
  },
  {
    model: "province.city",
    pk: 715,
    fields: {
      name: "خرمدشت",
      province_id: 18,
      slug: "خرمدشت",
    },
  },
  {
    model: "province.city",
    pk: 716,
    fields: {
      name: "دانسفهان",
      province_id: 18,
      slug: "دانسفهان",
    },
  },
  {
    model: "province.city",
    pk: 717,
    fields: {
      name: "رازمیان",
      province_id: 18,
      slug: "رازمیان",
    },
  },
  {
    model: "province.city",
    pk: 718,
    fields: {
      name: "سگزآباد",
      province_id: 18,
      slug: "سگزآباد",
    },
  },
  {
    model: "province.city",
    pk: 719,
    fields: {
      name: "سیردان",
      province_id: 18,
      slug: "سیردان",
    },
  },
  {
    model: "province.city",
    pk: 720,
    fields: {
      name: "شال",
      province_id: 18,
      slug: "شال",
    },
  },
  {
    model: "province.city",
    pk: 721,
    fields: {
      name: "شریفیه",
      province_id: 18,
      slug: "شریفیه",
    },
  },
  {
    model: "province.city",
    pk: 722,
    fields: {
      name: "ضیاءآباد",
      province_id: 18,
      slug: "ضیاءآباد",
    },
  },
  {
    model: "province.city",
    pk: 723,
    fields: {
      name: "کوهین",
      province_id: 18,
      slug: "کوهین",
    },
  },
  {
    model: "province.city",
    pk: 724,
    fields: {
      name: "محمدیه",
      province_id: 18,
      slug: "محمدیه",
    },
  },
  {
    model: "province.city",
    pk: 725,
    fields: {
      name: "محمودآبادنمونه",
      province_id: 18,
      slug: "محمودآبادنمونه",
    },
  },
  {
    model: "province.city",
    pk: 726,
    fields: {
      name: "معلم کلایه",
      province_id: 18,
      slug: "معلم کلایه",
    },
  },
  {
    model: "province.city",
    pk: 727,
    fields: {
      name: "نرجه",
      province_id: 18,
      slug: "نرجه",
    },
  },
  {
    model: "province.city",
    pk: 728,
    fields: {
      name: "قم",
      province_id: 19,
      slug: "قم",
    },
  },
  {
    model: "province.city",
    pk: 729,
    fields: {
      name: "جعفریه",
      province_id: 19,
      slug: "جعفریه",
    },
  },
  {
    model: "province.city",
    pk: 730,
    fields: {
      name: "دستجرد",
      province_id: 19,
      slug: "دستجرد",
    },
  },
  {
    model: "province.city",
    pk: 731,
    fields: {
      name: "سلفچگان",
      province_id: 19,
      slug: "سلفچگان",
    },
  },
  {
    model: "province.city",
    pk: 732,
    fields: {
      name: "قنوات",
      province_id: 19,
      slug: "قنوات",
    },
  },
  {
    model: "province.city",
    pk: 733,
    fields: {
      name: "کهک",
      province_id: 19,
      slug: "کهک",
    },
  },
  {
    model: "province.city",
    pk: 734,
    fields: {
      name: "سنندج",
      province_id: 20,
      slug: "سنندج",
    },
  },
  {
    model: "province.city",
    pk: 735,
    fields: {
      name: "آرمرده",
      province_id: 20,
      slug: "آرمرده",
    },
  },
  {
    model: "province.city",
    pk: 736,
    fields: {
      name: "بابارشانی",
      province_id: 20,
      slug: "بابارشانی",
    },
  },
  {
    model: "province.city",
    pk: 737,
    fields: {
      name: "بانه",
      province_id: 20,
      slug: "بانه",
    },
  },
  {
    model: "province.city",
    pk: 738,
    fields: {
      name: "بلبان آباد",
      province_id: 20,
      slug: "بلبان آباد",
    },
  },
  {
    model: "province.city",
    pk: 739,
    fields: {
      name: "بوئین سفلی",
      province_id: 20,
      slug: "بوئین سفلی",
    },
  },
  {
    model: "province.city",
    pk: 740,
    fields: {
      name: "بیجار",
      province_id: 20,
      slug: "بیجار",
    },
  },
  {
    model: "province.city",
    pk: 741,
    fields: {
      name: "چناره",
      province_id: 20,
      slug: "چناره",
    },
  },
  {
    model: "province.city",
    pk: 742,
    fields: {
      name: "دزج",
      province_id: 20,
      slug: "دزج",
    },
  },
  {
    model: "province.city",
    pk: 743,
    fields: {
      name: "دلبران",
      province_id: 20,
      slug: "دلبران",
    },
  },
  {
    model: "province.city",
    pk: 744,
    fields: {
      name: "دهگلان",
      province_id: 20,
      slug: "دهگلان",
    },
  },
  {
    model: "province.city",
    pk: 745,
    fields: {
      name: "دیواندره",
      province_id: 20,
      slug: "دیواندره",
    },
  },
  {
    model: "province.city",
    pk: 746,
    fields: {
      name: "زرینه",
      province_id: 20,
      slug: "زرینه",
    },
  },
  {
    model: "province.city",
    pk: 747,
    fields: {
      name: "سروآباد",
      province_id: 20,
      slug: "سروآباد",
    },
  },
  {
    model: "province.city",
    pk: 748,
    fields: {
      name: "سریش آباد",
      province_id: 20,
      slug: "سریش آباد",
    },
  },
  {
    model: "province.city",
    pk: 749,
    fields: {
      name: "سقز",
      province_id: 20,
      slug: "سقز",
    },
  },
  {
    model: "province.city",
    pk: 750,
    fields: {
      name: "شویشه",
      province_id: 20,
      slug: "شویشه",
    },
  },
  {
    model: "province.city",
    pk: 751,
    fields: {
      name: "صاحب",
      province_id: 20,
      slug: "صاحب",
    },
  },
  {
    model: "province.city",
    pk: 752,
    fields: {
      name: "قروه",
      province_id: 20,
      slug: "قروه",
    },
  },
  {
    model: "province.city",
    pk: 753,
    fields: {
      name: "کامیاران",
      province_id: 20,
      slug: "کامیاران",
    },
  },
  {
    model: "province.city",
    pk: 754,
    fields: {
      name: "کانی دینار",
      province_id: 20,
      slug: "کانی دینار",
    },
  },
  {
    model: "province.city",
    pk: 755,
    fields: {
      name: "کانی سور",
      province_id: 20,
      slug: "کانی سور",
    },
  },
  {
    model: "province.city",
    pk: 756,
    fields: {
      name: "مریوان",
      province_id: 20,
      slug: "مریوان",
    },
  },
  {
    model: "province.city",
    pk: 757,
    fields: {
      name: "موچش",
      province_id: 20,
      slug: "موچش",
    },
  },
  {
    model: "province.city",
    pk: 758,
    fields: {
      name: "یاسوکند",
      province_id: 20,
      slug: "یاسوکند",
    },
  },
  {
    model: "province.city",
    pk: 759,
    fields: {
      name: "کرمان",
      province_id: 21,
      slug: "کرمان",
    },
  },
  {
    model: "province.city",
    pk: 760,
    fields: {
      name: "اختیارآباد",
      province_id: 21,
      slug: "اختیارآباد",
    },
  },
  {
    model: "province.city",
    pk: 761,
    fields: {
      name: "ارزوئیه",
      province_id: 21,
      slug: "ارزوئیه",
    },
  },
  {
    model: "province.city",
    pk: 762,
    fields: {
      name: "امین شهر",
      province_id: 21,
      slug: "امین شهر",
    },
  },
  {
    model: "province.city",
    pk: 763,
    fields: {
      name: "انار",
      province_id: 21,
      slug: "انار",
    },
  },
  {
    model: "province.city",
    pk: 764,
    fields: {
      name: "اندوهجرد",
      province_id: 21,
      slug: "اندوهجرد",
    },
  },
  {
    model: "province.city",
    pk: 765,
    fields: {
      name: "باغین",
      province_id: 21,
      slug: "باغین",
    },
  },
  {
    model: "province.city",
    pk: 766,
    fields: {
      name: "بافت",
      province_id: 21,
      slug: "بافت",
    },
  },
  {
    model: "province.city",
    pk: 767,
    fields: {
      name: "بردسیر",
      province_id: 21,
      slug: "بردسیر",
    },
  },
  {
    model: "province.city",
    pk: 768,
    fields: {
      name: "بروات",
      province_id: 21,
      slug: "بروات",
    },
  },
  {
    model: "province.city",
    pk: 769,
    fields: {
      name: "بزنجان",
      province_id: 21,
      slug: "بزنجان",
    },
  },
  {
    model: "province.city",
    pk: 770,
    fields: {
      name: "بم",
      province_id: 21,
      slug: "بم",
    },
  },
  {
    model: "province.city",
    pk: 771,
    fields: {
      name: "بهرمان",
      province_id: 21,
      slug: "بهرمان",
    },
  },
  {
    model: "province.city",
    pk: 772,
    fields: {
      name: "پاریز",
      province_id: 21,
      slug: "پاریز",
    },
  },
  {
    model: "province.city",
    pk: 773,
    fields: {
      name: "جبالبارز",
      province_id: 21,
      slug: "جبالبارز",
    },
  },
  {
    model: "province.city",
    pk: 774,
    fields: {
      name: "جوپار",
      province_id: 21,
      slug: "جوپار",
    },
  },
  {
    model: "province.city",
    pk: 775,
    fields: {
      name: "جوزم",
      province_id: 21,
      slug: "جوزم",
    },
  },
  {
    model: "province.city",
    pk: 776,
    fields: {
      name: "جیرفت",
      province_id: 21,
      slug: "جیرفت",
    },
  },
  {
    model: "province.city",
    pk: 777,
    fields: {
      name: "چترود",
      province_id: 21,
      slug: "چترود",
    },
  },
  {
    model: "province.city",
    pk: 778,
    fields: {
      name: "خاتون آباد",
      province_id: 21,
      slug: "خاتون آباد",
    },
  },
  {
    model: "province.city",
    pk: 779,
    fields: {
      name: "خانوک",
      province_id: 21,
      slug: "خانوک",
    },
  },
  {
    model: "province.city",
    pk: 780,
    fields: {
      name: "خورسند",
      province_id: 21,
      slug: "خورسند",
    },
  },
  {
    model: "province.city",
    pk: 781,
    fields: {
      name: "درب بهشت",
      province_id: 21,
      slug: "درب بهشت",
    },
  },
  {
    model: "province.city",
    pk: 782,
    fields: {
      name: "دوساری",
      province_id: 21,
      slug: "دوساری",
    },
  },
  {
    model: "province.city",
    pk: 783,
    fields: {
      name: "دهج",
      province_id: 21,
      slug: "دهج",
    },
  },
  {
    model: "province.city",
    pk: 784,
    fields: {
      name: "رابر",
      province_id: 21,
      slug: "رابر",
    },
  },
  {
    model: "province.city",
    pk: 785,
    fields: {
      name: "راور",
      province_id: 21,
      slug: "راور",
    },
  },
  {
    model: "province.city",
    pk: 786,
    fields: {
      name: "راین",
      province_id: 21,
      slug: "راین",
    },
  },
  {
    model: "province.city",
    pk: 787,
    fields: {
      name: "رفسنجان",
      province_id: 21,
      slug: "رفسنجان",
    },
  },
  {
    model: "province.city",
    pk: 788,
    fields: {
      name: "رودبار",
      province_id: 21,
      slug: "رودبار",
    },
  },
  {
    model: "province.city",
    pk: 789,
    fields: {
      name: "ریحان شهر",
      province_id: 21,
      slug: "ریحان شهر",
    },
  },
  {
    model: "province.city",
    pk: 790,
    fields: {
      name: "زرند",
      province_id: 21,
      slug: "زرند",
    },
  },
  {
    model: "province.city",
    pk: 791,
    fields: {
      name: "زنگی آباد",
      province_id: 21,
      slug: "زنگی آباد",
    },
  },
  {
    model: "province.city",
    pk: 792,
    fields: {
      name: "زیدآباد",
      province_id: 21,
      slug: "زیدآباد",
    },
  },
  {
    model: "province.city",
    pk: 793,
    fields: {
      name: "سرچشمه",
      province_id: 21,
      slug: "سرچشمه",
    },
  },
  {
    model: "province.city",
    pk: 794,
    fields: {
      name: "سیرجان",
      province_id: 21,
      slug: "سیرجان",
    },
  },
  {
    model: "province.city",
    pk: 795,
    fields: {
      name: "شهداد",
      province_id: 21,
      slug: "شهداد",
    },
  },
  {
    model: "province.city",
    pk: 796,
    fields: {
      name: "شهربابک",
      province_id: 21,
      slug: "شهربابک",
    },
  },
  {
    model: "province.city",
    pk: 797,
    fields: {
      name: "صفائیه",
      province_id: 21,
      slug: "صفائیه",
    },
  },
  {
    model: "province.city",
    pk: 798,
    fields: {
      name: "عنبرآباد",
      province_id: 21,
      slug: "عنبرآباد",
    },
  },
  {
    model: "province.city",
    pk: 799,
    fields: {
      name: "فاریاب",
      province_id: 21,
      slug: "فاریاب",
    },
  },
  {
    model: "province.city",
    pk: 800,
    fields: {
      name: "فهرج",
      province_id: 21,
      slug: "فهرج",
    },
  },
  {
    model: "province.city",
    pk: 801,
    fields: {
      name: "قلعه گنج",
      province_id: 21,
      slug: "قلعه گنج",
    },
  },
  {
    model: "province.city",
    pk: 802,
    fields: {
      name: "کاظم آباد",
      province_id: 21,
      slug: "کاظم آباد",
    },
  },
  {
    model: "province.city",
    pk: 803,
    fields: {
      name: "کشکوئیه",
      province_id: 21,
      slug: "کشکوئیه",
    },
  },
  {
    model: "province.city",
    pk: 804,
    fields: {
      name: "کوهبنان",
      province_id: 21,
      slug: "کوهبنان",
    },
  },
  {
    model: "province.city",
    pk: 805,
    fields: {
      name: "کهنوج",
      province_id: 21,
      slug: "کهنوج",
    },
  },
  {
    model: "province.city",
    pk: 806,
    fields: {
      name: "کیانشهر",
      province_id: 21,
      slug: "کیانشهر",
    },
  },
  {
    model: "province.city",
    pk: 807,
    fields: {
      name: "گلباف",
      province_id: 21,
      slug: "گلباف",
    },
  },
  {
    model: "province.city",
    pk: 808,
    fields: {
      name: "گلزار",
      province_id: 21,
      slug: "گلزار",
    },
  },
  {
    model: "province.city",
    pk: 809,
    fields: {
      name: "لاله زار",
      province_id: 21,
      slug: "لاله زار",
    },
  },
  {
    model: "province.city",
    pk: 810,
    fields: {
      name: "ماهان",
      province_id: 21,
      slug: "ماهان",
    },
  },
  {
    model: "province.city",
    pk: 811,
    fields: {
      name: "محمدآباد",
      province_id: 21,
      slug: "محمدآباد",
    },
  },
  {
    model: "province.city",
    pk: 812,
    fields: {
      name: "محی آباد",
      province_id: 21,
      slug: "محی آباد",
    },
  },
  {
    model: "province.city",
    pk: 813,
    fields: {
      name: "مردهک",
      province_id: 21,
      slug: "مردهک",
    },
  },
  {
    model: "province.city",
    pk: 814,
    fields: {
      name: "منوجان",
      province_id: 21,
      slug: "منوجان",
    },
  },
  {
    model: "province.city",
    pk: 815,
    fields: {
      name: "نجف شهر",
      province_id: 21,
      slug: "نجف شهر",
    },
  },
  {
    model: "province.city",
    pk: 816,
    fields: {
      name: "نرماشیر",
      province_id: 21,
      slug: "نرماشیر",
    },
  },
  {
    model: "province.city",
    pk: 817,
    fields: {
      name: "نظام شهر",
      province_id: 21,
      slug: "نظام شهر",
    },
  },
  {
    model: "province.city",
    pk: 818,
    fields: {
      name: "نگار",
      province_id: 21,
      slug: "نگار",
    },
  },
  {
    model: "province.city",
    pk: 819,
    fields: {
      name: "نودژ",
      province_id: 21,
      slug: "نودژ",
    },
  },
  {
    model: "province.city",
    pk: 820,
    fields: {
      name: "هجدک",
      province_id: 21,
      slug: "هجدک",
    },
  },
  {
    model: "province.city",
    pk: 821,
    fields: {
      name: "هماشهر",
      province_id: 21,
      slug: "هماشهر",
    },
  },
  {
    model: "province.city",
    pk: 822,
    fields: {
      name: "یزدان شهر",
      province_id: 21,
      slug: "یزدان شهر",
    },
  },
  {
    model: "province.city",
    pk: 1144,
    fields: {
      name: "بلوک",
      province_id: 21,
      slug: "بلوک",
    },
  },
  {
    model: "province.city",
    pk: 823,
    fields: {
      name: "کرمانشاه",
      province_id: 22,
      slug: "کرمانشاه",
    },
  },
  {
    model: "province.city",
    pk: 824,
    fields: {
      name: "ازگله",
      province_id: 22,
      slug: "ازگله",
    },
  },
  {
    model: "province.city",
    pk: 825,
    fields: {
      name: "اسلام آبادغرب",
      province_id: 22,
      slug: "اسلام آبادغرب",
    },
  },
  {
    model: "province.city",
    pk: 826,
    fields: {
      name: "باینگان",
      province_id: 22,
      slug: "باینگان",
    },
  },
  {
    model: "province.city",
    pk: 827,
    fields: {
      name: "بیستون",
      province_id: 22,
      slug: "بیستون",
    },
  },
  {
    model: "province.city",
    pk: 828,
    fields: {
      name: "پاوه",
      province_id: 22,
      slug: "پاوه",
    },
  },
  {
    model: "province.city",
    pk: 829,
    fields: {
      name: "تازه آباد",
      province_id: 22,
      slug: "تازه آباد",
    },
  },
  {
    model: "province.city",
    pk: 830,
    fields: {
      name: "جوانرود",
      province_id: 22,
      slug: "جوانرود",
    },
  },
  {
    model: "province.city",
    pk: 831,
    fields: {
      name: "حمیل",
      province_id: 22,
      slug: "حمیل",
    },
  },
  {
    model: "province.city",
    pk: 832,
    fields: {
      name: "رباط",
      province_id: 22,
      slug: "رباط",
    },
  },
  {
    model: "province.city",
    pk: 833,
    fields: {
      name: "روانسر",
      province_id: 22,
      slug: "روانسر",
    },
  },
  {
    model: "province.city",
    pk: 834,
    fields: {
      name: "سرپل ذهاب",
      province_id: 22,
      slug: "سرپل ذهاب",
    },
  },
  {
    model: "province.city",
    pk: 835,
    fields: {
      name: "سرمست",
      province_id: 22,
      slug: "سرمست",
    },
  },
  {
    model: "province.city",
    pk: 836,
    fields: {
      name: "سطر",
      province_id: 22,
      slug: "سطر",
    },
  },
  {
    model: "province.city",
    pk: 837,
    fields: {
      name: "سنقر",
      province_id: 22,
      slug: "سنقر",
    },
  },
  {
    model: "province.city",
    pk: 838,
    fields: {
      name: "سومار",
      province_id: 22,
      slug: "سومار",
    },
  },
  {
    model: "province.city",
    pk: 839,
    fields: {
      name: "شاهو",
      province_id: 22,
      slug: "شاهو",
    },
  },
  {
    model: "province.city",
    pk: 840,
    fields: {
      name: "صحنه",
      province_id: 22,
      slug: "صحنه",
    },
  },
  {
    model: "province.city",
    pk: 841,
    fields: {
      name: "قصرشیرین",
      province_id: 22,
      slug: "قصرشیرین",
    },
  },
  {
    model: "province.city",
    pk: 842,
    fields: {
      name: "کرندغرب",
      province_id: 22,
      slug: "کرندغرب",
    },
  },
  {
    model: "province.city",
    pk: 843,
    fields: {
      name: "کنگاور",
      province_id: 22,
      slug: "کنگاور",
    },
  },
  {
    model: "province.city",
    pk: 844,
    fields: {
      name: "کوزران",
      province_id: 22,
      slug: "کوزران",
    },
  },
  {
    model: "province.city",
    pk: 845,
    fields: {
      name: "گهواره",
      province_id: 22,
      slug: "گهواره",
    },
  },
  {
    model: "province.city",
    pk: 846,
    fields: {
      name: "گیلانغرب",
      province_id: 22,
      slug: "گیلانغرب",
    },
  },
  {
    model: "province.city",
    pk: 847,
    fields: {
      name: "میان راهان",
      province_id: 22,
      slug: "میان راهان",
    },
  },
  {
    model: "province.city",
    pk: 848,
    fields: {
      name: "نودشه",
      province_id: 22,
      slug: "نودشه",
    },
  },
  {
    model: "province.city",
    pk: 849,
    fields: {
      name: "نوسود",
      province_id: 22,
      slug: "نوسود",
    },
  },
  {
    model: "province.city",
    pk: 850,
    fields: {
      name: "هرسین",
      province_id: 22,
      slug: "هرسین",
    },
  },
  {
    model: "province.city",
    pk: 851,
    fields: {
      name: "هلشی",
      province_id: 22,
      slug: "هلشی",
    },
  },
  {
    model: "province.city",
    pk: 852,
    fields: {
      name: "یاسوج",
      province_id: 23,
      slug: "یاسوج",
    },
  },
  {
    model: "province.city",
    pk: 853,
    fields: {
      name: "باشت",
      province_id: 23,
      slug: "باشت",
    },
  },
  {
    model: "province.city",
    pk: 854,
    fields: {
      name: "پاتاوه",
      province_id: 23,
      slug: "پاتاوه",
    },
  },
  {
    model: "province.city",
    pk: 855,
    fields: {
      name: "چرام",
      province_id: 23,
      slug: "چرام",
    },
  },
  {
    model: "province.city",
    pk: 856,
    fields: {
      name: "چیتاب",
      province_id: 23,
      slug: "چیتاب",
    },
  },
  {
    model: "province.city",
    pk: 857,
    fields: {
      name: "دوگنبدان",
      province_id: 23,
      slug: "دوگنبدان",
    },
  },
  {
    model: "province.city",
    pk: 858,
    fields: {
      name: "دهدشت",
      province_id: 23,
      slug: "دهدشت",
    },
  },
  {
    model: "province.city",
    pk: 859,
    fields: {
      name: "دیشموک",
      province_id: 23,
      slug: "دیشموک",
    },
  },
  {
    model: "province.city",
    pk: 860,
    fields: {
      name: "سوق",
      province_id: 23,
      slug: "سوق",
    },
  },
  {
    model: "province.city",
    pk: 861,
    fields: {
      name: "سی سخت",
      province_id: 23,
      slug: "سی سخت",
    },
  },
  {
    model: "province.city",
    pk: 862,
    fields: {
      name: "قلعه رئیسی",
      province_id: 23,
      slug: "قلعه رئیسی",
    },
  },
  {
    model: "province.city",
    pk: 863,
    fields: {
      name: "گراب سفلی",
      province_id: 23,
      slug: "گراب سفلی",
    },
  },
  {
    model: "province.city",
    pk: 864,
    fields: {
      name: "لنده",
      province_id: 23,
      slug: "لنده",
    },
  },
  {
    model: "province.city",
    pk: 865,
    fields: {
      name: "لیکک",
      province_id: 23,
      slug: "لیکک",
    },
  },
  {
    model: "province.city",
    pk: 866,
    fields: {
      name: "مادوان",
      province_id: 23,
      slug: "مادوان",
    },
  },
  {
    model: "province.city",
    pk: 867,
    fields: {
      name: "مارگون",
      province_id: 23,
      slug: "مارگون",
    },
  },
  {
    model: "province.city",
    pk: 868,
    fields: {
      name: "گرگان",
      province_id: 24,
      slug: "گرگان",
    },
  },
  {
    model: "province.city",
    pk: 869,
    fields: {
      name: "انبارآلوم",
      province_id: 24,
      slug: "انبارآلوم",
    },
  },
  {
    model: "province.city",
    pk: 870,
    fields: {
      name: "اینچه برون",
      province_id: 24,
      slug: "اینچه برون",
    },
  },
  {
    model: "province.city",
    pk: 871,
    fields: {
      name: "آزادشهر",
      province_id: 24,
      slug: "آزادشهر",
    },
  },
  {
    model: "province.city",
    pk: 872,
    fields: {
      name: "آق قلا",
      province_id: 24,
      slug: "آق قلا",
    },
  },
  {
    model: "province.city",
    pk: 873,
    fields: {
      name: "بندر گز",
      province_id: 24,
      slug: "بندر گز",
    },
  },
  {
    model: "province.city",
    pk: 874,
    fields: {
      name: "ترکمن",
      province_id: 24,
      slug: "ترکمن",
    },
  },
  {
    model: "province.city",
    pk: 875,
    fields: {
      name: "جلین",
      province_id: 24,
      slug: "جلین",
    },
  },
  {
    model: "province.city",
    pk: 876,
    fields: {
      name: "خان ببین",
      province_id: 24,
      slug: "خان ببین",
    },
  },
  {
    model: "province.city",
    pk: 877,
    fields: {
      name: "دلند",
      province_id: 24,
      slug: "دلند",
    },
  },
  {
    model: "province.city",
    pk: 878,
    fields: {
      name: "رامیان",
      province_id: 24,
      slug: "رامیان",
    },
  },
  {
    model: "province.city",
    pk: 879,
    fields: {
      name: "سرخنکلاته",
      province_id: 24,
      slug: "سرخنکلاته",
    },
  },
  {
    model: "province.city",
    pk: 880,
    fields: {
      name: "سیمین شهر",
      province_id: 24,
      slug: "سیمین شهر",
    },
  },
  {
    model: "province.city",
    pk: 881,
    fields: {
      name: "علی آباد",
      province_id: 24,
      slug: "علی آباد",
    },
  },
  {
    model: "province.city",
    pk: 882,
    fields: {
      name: "علی آباد کتول",
      province_id: 24,
      slug: "علی آباد کتول",
    },
  },
  {
    model: "province.city",
    pk: 883,
    fields: {
      name: "فاضل آباد",
      province_id: 24,
      slug: "فاضل آباد",
    },
  },
  {
    model: "province.city",
    pk: 884,
    fields: {
      name: "کردکوی",
      province_id: 24,
      slug: "کردکوی",
    },
  },
  {
    model: "province.city",
    pk: 885,
    fields: {
      name: "کلاله",
      province_id: 24,
      slug: "کلاله",
    },
  },
  {
    model: "province.city",
    pk: 886,
    fields: {
      name: "گالیکش",
      province_id: 24,
      slug: "گالیکش",
    },
  },
  {
    model: "province.city",
    pk: 887,
    fields: {
      name: "گمیش تپه",
      province_id: 24,
      slug: "گمیش تپه",
    },
  },
  {
    model: "province.city",
    pk: 888,
    fields: {
      name: "گمیشان",
      province_id: 24,
      slug: "گمیشان",
    },
  },
  {
    model: "province.city",
    pk: 889,
    fields: {
      name: "گنبد کاووس",
      province_id: 24,
      slug: "گنبد کاووس",
    },
  },
  {
    model: "province.city",
    pk: 890,
    fields: {
      name: "مراوه تپه",
      province_id: 24,
      slug: "مراوه تپه",
    },
  },
  {
    model: "province.city",
    pk: 891,
    fields: {
      name: "مینودشت",
      province_id: 24,
      slug: "مینودشت",
    },
  },
  {
    model: "province.city",
    pk: 892,
    fields: {
      name: "نگین شهر",
      province_id: 24,
      slug: "نگین شهر",
    },
  },
  {
    model: "province.city",
    pk: 893,
    fields: {
      name: "نوده خاندوز",
      province_id: 24,
      slug: "نوده خاندوز",
    },
  },
  {
    model: "province.city",
    pk: 894,
    fields: {
      name: "نوکنده",
      province_id: 24,
      slug: "نوکنده",
    },
  },
  {
    model: "province.city",
    pk: 895,
    fields: {
      name: "رشت",
      province_id: 25,
      slug: "رشت",
    },
  },
  {
    model: "province.city",
    pk: 896,
    fields: {
      name: "احمدسرگوراب",
      province_id: 25,
      slug: "احمدسرگوراب",
    },
  },
  {
    model: "province.city",
    pk: 897,
    fields: {
      name: "اسالم",
      province_id: 25,
      slug: "اسالم",
    },
  },
  {
    model: "province.city",
    pk: 898,
    fields: {
      name: "اطاقور",
      province_id: 25,
      slug: "اطاقور",
    },
  },
  {
    model: "province.city",
    pk: 899,
    fields: {
      name: "املش",
      province_id: 25,
      slug: "املش",
    },
  },
  {
    model: "province.city",
    pk: 900,
    fields: {
      name: "آستارا",
      province_id: 25,
      slug: "آستارا",
    },
  },
  {
    model: "province.city",
    pk: 901,
    fields: {
      name: "آستانه اشرفیه",
      province_id: 25,
      slug: "آستانه اشرفیه",
    },
  },
  {
    model: "province.city",
    pk: 902,
    fields: {
      name: "بازارجمعه",
      province_id: 25,
      slug: "بازارجمعه",
    },
  },
  {
    model: "province.city",
    pk: 903,
    fields: {
      name: "بره سر",
      province_id: 25,
      slug: "بره سر",
    },
  },
  {
    model: "province.city",
    pk: 904,
    fields: {
      name: "بندر انزلی",
      province_id: 25,
      slug: "بندر انزلی",
    },
  },
  {
    model: "province.city",
    pk: 905,
    fields: {
      name: "پره سر",
      province_id: 25,
      slug: "پره سر",
    },
  },
  {
    model: "province.city",
    pk: 906,
    fields: {
      name: "تالش",
      province_id: 25,
      slug: "تالش",
    },
  },
  {
    model: "province.city",
    pk: 907,
    fields: {
      name: "تونکابن",
      province_id: 25,
      slug: "تونکابن",
    },
  },
  {
    model: "province.city",
    pk: 908,
    fields: {
      name: "جیرنده",
      province_id: 25,
      slug: "جیرنده",
    },
  },
  {
    model: "province.city",
    pk: 909,
    fields: {
      name: "چابکسر",
      province_id: 25,
      slug: "چابکسر",
    },
  },
  {
    model: "province.city",
    pk: 910,
    fields: {
      name: "چاف وچمخاله",
      province_id: 25,
      slug: "چاف وچمخاله",
    },
  },
  {
    model: "province.city",
    pk: 911,
    fields: {
      name: "چوبر",
      province_id: 25,
      slug: "چوبر",
    },
  },
  {
    model: "province.city",
    pk: 912,
    fields: {
      name: "حویق",
      province_id: 25,
      slug: "حویق",
    },
  },
  {
    model: "province.city",
    pk: 913,
    fields: {
      name: "خشکبیجار",
      province_id: 25,
      slug: "خشکبیجار",
    },
  },
  {
    model: "province.city",
    pk: 914,
    fields: {
      name: "خمام",
      province_id: 25,
      slug: "خمام",
    },
  },
  {
    model: "province.city",
    pk: 915,
    fields: {
      name: "دیلمان",
      province_id: 25,
      slug: "دیلمان",
    },
  },
  {
    model: "province.city",
    pk: 916,
    fields: {
      name: "رانکوه",
      province_id: 25,
      slug: "رانکوه",
    },
  },
  {
    model: "province.city",
    pk: 917,
    fields: {
      name: "رحیم آباد",
      province_id: 25,
      slug: "رحیم آباد",
    },
  },
  {
    model: "province.city",
    pk: 918,
    fields: {
      name: "رستم آباد",
      province_id: 25,
      slug: "رستم آباد",
    },
  },
  {
    model: "province.city",
    pk: 919,
    fields: {
      name: "رضوانشهر",
      province_id: 25,
      slug: "رضوانشهر",
    },
  },
  {
    model: "province.city",
    pk: 920,
    fields: {
      name: "رودبار",
      province_id: 25,
      slug: "رودبار",
    },
  },
  {
    model: "province.city",
    pk: 921,
    fields: {
      name: "رودبنه",
      province_id: 25,
      slug: "رودبنه",
    },
  },
  {
    model: "province.city",
    pk: 922,
    fields: {
      name: "رودسر",
      province_id: 25,
      slug: "رودسر",
    },
  },
  {
    model: "province.city",
    pk: 923,
    fields: {
      name: "سنگر",
      province_id: 25,
      slug: "سنگر",
    },
  },
  {
    model: "province.city",
    pk: 924,
    fields: {
      name: "سیاهکل",
      province_id: 25,
      slug: "سیاهکل",
    },
  },
  {
    model: "province.city",
    pk: 925,
    fields: {
      name: "شفت",
      province_id: 25,
      slug: "شفت",
    },
  },
  {
    model: "province.city",
    pk: 926,
    fields: {
      name: "شلمان",
      province_id: 25,
      slug: "شلمان",
    },
  },
  {
    model: "province.city",
    pk: 927,
    fields: {
      name: "صومعه سرا",
      province_id: 25,
      slug: "صومعه سرا",
    },
  },
  {
    model: "province.city",
    pk: 928,
    fields: {
      name: "فومن",
      province_id: 25,
      slug: "فومن",
    },
  },
  {
    model: "province.city",
    pk: 929,
    fields: {
      name: "کلاچای",
      province_id: 25,
      slug: "کلاچای",
    },
  },
  {
    model: "province.city",
    pk: 930,
    fields: {
      name: "کوچصفهان",
      province_id: 25,
      slug: "کوچصفهان",
    },
  },
  {
    model: "province.city",
    pk: 931,
    fields: {
      name: "کومله",
      province_id: 25,
      slug: "کومله",
    },
  },
  {
    model: "province.city",
    pk: 932,
    fields: {
      name: "کیاشهر",
      province_id: 25,
      slug: "کیاشهر",
    },
  },
  {
    model: "province.city",
    pk: 933,
    fields: {
      name: "گوراب زرمیخ",
      province_id: 25,
      slug: "گوراب زرمیخ",
    },
  },
  {
    model: "province.city",
    pk: 934,
    fields: {
      name: "لاهیجان",
      province_id: 25,
      slug: "لاهیجان",
    },
  },
  {
    model: "province.city",
    pk: 935,
    fields: {
      name: "لشت نشاء",
      province_id: 25,
      slug: "لشت نشاء",
    },
  },
  {
    model: "province.city",
    pk: 936,
    fields: {
      name: "لنگرود",
      province_id: 25,
      slug: "لنگرود",
    },
  },
  {
    model: "province.city",
    pk: 937,
    fields: {
      name: "لوشان",
      province_id: 25,
      slug: "لوشان",
    },
  },
  {
    model: "province.city",
    pk: 938,
    fields: {
      name: "لولمان",
      province_id: 25,
      slug: "لولمان",
    },
  },
  {
    model: "province.city",
    pk: 939,
    fields: {
      name: "لوندویل",
      province_id: 25,
      slug: "لوندویل",
    },
  },
  {
    model: "province.city",
    pk: 940,
    fields: {
      name: "لیسار",
      province_id: 25,
      slug: "لیسار",
    },
  },
  {
    model: "province.city",
    pk: 941,
    fields: {
      name: "ماسال",
      province_id: 25,
      slug: "ماسال",
    },
  },
  {
    model: "province.city",
    pk: 942,
    fields: {
      name: "ماسوله",
      province_id: 25,
      slug: "ماسوله",
    },
  },
  {
    model: "province.city",
    pk: 943,
    fields: {
      name: "مرجقل",
      province_id: 25,
      slug: "مرجقل",
    },
  },
  {
    model: "province.city",
    pk: 944,
    fields: {
      name: "منجیل",
      province_id: 25,
      slug: "منجیل",
    },
  },
  {
    model: "province.city",
    pk: 945,
    fields: {
      name: "واجارگاه",
      province_id: 25,
      slug: "واجارگاه",
    },
  },
  {
    model: "province.city",
    pk: 946,
    fields: {
      name: "هشتپر",
      province_id: 25,
      slug: "هشتپر",
    },
  },
  {
    model: "province.city",
    pk: 947,
    fields: {
      name: "خرم آباد",
      province_id: 26,
      slug: "خرم آباد",
    },
  },
  {
    model: "province.city",
    pk: 948,
    fields: {
      name: "ازنا",
      province_id: 26,
      slug: "ازنا",
    },
  },
  {
    model: "province.city",
    pk: 949,
    fields: {
      name: "اشترینان",
      province_id: 26,
      slug: "اشترینان",
    },
  },
  {
    model: "province.city",
    pk: 950,
    fields: {
      name: "الشتر",
      province_id: 26,
      slug: "الشتر",
    },
  },
  {
    model: "province.city",
    pk: 951,
    fields: {
      name: "الیگودرز",
      province_id: 26,
      slug: "الیگودرز",
    },
  },
  {
    model: "province.city",
    pk: 952,
    fields: {
      name: "بروجرد",
      province_id: 26,
      slug: "بروجرد",
    },
  },
  {
    model: "province.city",
    pk: 953,
    fields: {
      name: "پلدختر",
      province_id: 26,
      slug: "پلدختر",
    },
  },
  {
    model: "province.city",
    pk: 954,
    fields: {
      name: "چالانچولان",
      province_id: 26,
      slug: "چالانچولان",
    },
  },
  {
    model: "province.city",
    pk: 955,
    fields: {
      name: "چغلوندی",
      province_id: 26,
      slug: "چغلوندی",
    },
  },
  {
    model: "province.city",
    pk: 956,
    fields: {
      name: "چقابل",
      province_id: 26,
      slug: "چقابل",
    },
  },
  {
    model: "province.city",
    pk: 957,
    fields: {
      name: "درب گنبد",
      province_id: 26,
      slug: "درب گنبد",
    },
  },
  {
    model: "province.city",
    pk: 958,
    fields: {
      name: "دورود",
      province_id: 26,
      slug: "دورود",
    },
  },
  {
    model: "province.city",
    pk: 959,
    fields: {
      name: "زاغه",
      province_id: 26,
      slug: "زاغه",
    },
  },
  {
    model: "province.city",
    pk: 960,
    fields: {
      name: "سپیددشت",
      province_id: 26,
      slug: "سپیددشت",
    },
  },
  {
    model: "province.city",
    pk: 961,
    fields: {
      name: "سراب دوره",
      province_id: 26,
      slug: "سراب دوره",
    },
  },
  {
    model: "province.city",
    pk: 962,
    fields: {
      name: "شول آباد",
      province_id: 26,
      slug: "شول آباد",
    },
  },
  {
    model: "province.city",
    pk: 963,
    fields: {
      name: "فیروزآباد",
      province_id: 26,
      slug: "فیروزآباد",
    },
  },
  {
    model: "province.city",
    pk: 964,
    fields: {
      name: "کونانی",
      province_id: 26,
      slug: "کونانی",
    },
  },
  {
    model: "province.city",
    pk: 965,
    fields: {
      name: "کوهدشت",
      province_id: 26,
      slug: "کوهدشت",
    },
  },
  {
    model: "province.city",
    pk: 966,
    fields: {
      name: "گراب",
      province_id: 26,
      slug: "گراب",
    },
  },
  {
    model: "province.city",
    pk: 967,
    fields: {
      name: "معمولان",
      province_id: 26,
      slug: "معمولان",
    },
  },
  {
    model: "province.city",
    pk: 968,
    fields: {
      name: "مؤمن آباد",
      province_id: 26,
      slug: "مؤمن آباد",
    },
  },
  {
    model: "province.city",
    pk: 969,
    fields: {
      name: "نورآباد",
      province_id: 26,
      slug: "نورآباد",
    },
  },
  {
    model: "province.city",
    pk: 970,
    fields: {
      name: "ویسیان",
      province_id: 26,
      slug: "ویسیان",
    },
  },
  {
    model: "province.city",
    pk: 971,
    fields: {
      name: "هفت چشمه",
      province_id: 26,
      slug: "هفت چشمه",
    },
  },
  {
    model: "province.city",
    pk: 972,
    fields: {
      name: "ساری",
      province_id: 27,
      slug: "ساری",
    },
  },
  {
    model: "province.city",
    pk: 973,
    fields: {
      name: "امیرکلا",
      province_id: 27,
      slug: "امیرکلا",
    },
  },
  {
    model: "province.city",
    pk: 974,
    fields: {
      name: "ایزدشهر",
      province_id: 27,
      slug: "ایزدشهر",
    },
  },
  {
    model: "province.city",
    pk: 975,
    fields: {
      name: "آلاشت",
      province_id: 27,
      slug: "آلاشت",
    },
  },
  {
    model: "province.city",
    pk: 976,
    fields: {
      name: "آمل",
      province_id: 27,
      slug: "آمل",
    },
  },
  {
    model: "province.city",
    pk: 977,
    fields: {
      name: "بابل",
      province_id: 27,
      slug: "بابل",
    },
  },
  {
    model: "province.city",
    pk: 978,
    fields: {
      name: "بابلسر",
      province_id: 27,
      slug: "بابلسر",
    },
  },
  {
    model: "province.city",
    pk: 979,
    fields: {
      name: "بلده",
      province_id: 27,
      slug: "بلده",
    },
  },
  {
    model: "province.city",
    pk: 980,
    fields: {
      name: "بهشهر",
      province_id: 27,
      slug: "بهشهر",
    },
  },
  {
    model: "province.city",
    pk: 981,
    fields: {
      name: "بهنمیر",
      province_id: 27,
      slug: "بهنمیر",
    },
  },
  {
    model: "province.city",
    pk: 982,
    fields: {
      name: "پل سفید",
      province_id: 27,
      slug: "پل سفید",
    },
  },
  {
    model: "province.city",
    pk: 983,
    fields: {
      name: "پول",
      province_id: 27,
      slug: "پول",
    },
  },
  {
    model: "province.city",
    pk: 984,
    fields: {
      name: "تنکابن",
      province_id: 27,
      slug: "تنکابن",
    },
  },
  {
    model: "province.city",
    pk: 985,
    fields: {
      name: "جویبار",
      province_id: 27,
      slug: "جویبار",
    },
  },
  {
    model: "province.city",
    pk: 986,
    fields: {
      name: "چالوس",
      province_id: 27,
      slug: "چالوس",
    },
  },
  {
    model: "province.city",
    pk: 987,
    fields: {
      name: "چمستان",
      province_id: 27,
      slug: "چمستان",
    },
  },
  {
    model: "province.city",
    pk: 988,
    fields: {
      name: "خرم آباد",
      province_id: 27,
      slug: "خرم آباد",
    },
  },
  {
    model: "province.city",
    pk: 989,
    fields: {
      name: "خلیل شهر",
      province_id: 27,
      slug: "خلیل شهر",
    },
  },
  {
    model: "province.city",
    pk: 990,
    fields: {
      name: "خوش رودپی",
      province_id: 27,
      slug: "خوش رودپی",
    },
  },
  {
    model: "province.city",
    pk: 991,
    fields: {
      name: "دابودشت",
      province_id: 27,
      slug: "دابودشت",
    },
  },
  {
    model: "province.city",
    pk: 992,
    fields: {
      name: "رامسر",
      province_id: 27,
      slug: "رامسر",
    },
  },
  {
    model: "province.city",
    pk: 993,
    fields: {
      name: "رستمکلا",
      province_id: 27,
      slug: "رستمکلا",
    },
  },
  {
    model: "province.city",
    pk: 994,
    fields: {
      name: "رویان",
      province_id: 27,
      slug: "رویان",
    },
  },
  {
    model: "province.city",
    pk: 995,
    fields: {
      name: "رینه",
      province_id: 27,
      slug: "رینه",
    },
  },
  {
    model: "province.city",
    pk: 996,
    fields: {
      name: "زرگر محله",
      province_id: 27,
      slug: "زرگر محله",
    },
  },
  {
    model: "province.city",
    pk: 997,
    fields: {
      name: "زیرآب",
      province_id: 27,
      slug: "زیرآب",
    },
  },
  {
    model: "province.city",
    pk: 998,
    fields: {
      name: "سرخرود",
      province_id: 27,
      slug: "سرخرود",
    },
  },
  {
    model: "province.city",
    pk: 999,
    fields: {
      name: "سلمان شهر",
      province_id: 27,
      slug: "سلمان شهر",
    },
  },
  {
    model: "province.city",
    pk: 1000,
    fields: {
      name: "سورک",
      province_id: 27,
      slug: "سورک",
    },
  },
  {
    model: "province.city",
    pk: 1001,
    fields: {
      name: "شیرگاه",
      province_id: 27,
      slug: "شیرگاه",
    },
  },
  {
    model: "province.city",
    pk: 1002,
    fields: {
      name: "شیرود",
      province_id: 27,
      slug: "شیرود",
    },
  },
  {
    model: "province.city",
    pk: 1003,
    fields: {
      name: "عباس آباد",
      province_id: 27,
      slug: "عباس آباد",
    },
  },
  {
    model: "province.city",
    pk: 1004,
    fields: {
      name: "فریدونکنار",
      province_id: 27,
      slug: "فریدونکنار",
    },
  },
  {
    model: "province.city",
    pk: 1005,
    fields: {
      name: "فریم",
      province_id: 27,
      slug: "فریم",
    },
  },
  {
    model: "province.city",
    pk: 1006,
    fields: {
      name: "قائم شهر",
      province_id: 27,
      slug: "قائم شهر",
    },
  },
  {
    model: "province.city",
    pk: 1007,
    fields: {
      name: "کتالم وسادات شهر",
      province_id: 27,
      slug: "کتالم وسادات شهر",
    },
  },
  {
    model: "province.city",
    pk: 1008,
    fields: {
      name: "کلارآباد",
      province_id: 27,
      slug: "کلارآباد",
    },
  },
  {
    model: "province.city",
    pk: 1009,
    fields: {
      name: "کلاردشت",
      province_id: 27,
      slug: "کلاردشت",
    },
  },
  {
    model: "province.city",
    pk: 1010,
    fields: {
      name: "کله بست",
      province_id: 27,
      slug: "کله بست",
    },
  },
  {
    model: "province.city",
    pk: 1011,
    fields: {
      name: "کوهی خیل",
      province_id: 27,
      slug: "کوهی خیل",
    },
  },
  {
    model: "province.city",
    pk: 1012,
    fields: {
      name: "کیاسر",
      province_id: 27,
      slug: "کیاسر",
    },
  },
  {
    model: "province.city",
    pk: 1013,
    fields: {
      name: "کیاکلا",
      province_id: 27,
      slug: "کیاکلا",
    },
  },
  {
    model: "province.city",
    pk: 1014,
    fields: {
      name: "گتاب",
      province_id: 27,
      slug: "گتاب",
    },
  },
  {
    model: "province.city",
    pk: 1015,
    fields: {
      name: "گزنک",
      province_id: 27,
      slug: "گزنک",
    },
  },
  {
    model: "province.city",
    pk: 1016,
    fields: {
      name: "گلوگاه",
      province_id: 27,
      slug: "گلوگاه",
    },
  },
  {
    model: "province.city",
    pk: 1017,
    fields: {
      name: "محمودآباد",
      province_id: 27,
      slug: "محمودآباد",
    },
  },
  {
    model: "province.city",
    pk: 1018,
    fields: {
      name: "مرزن آباد",
      province_id: 27,
      slug: "مرزن آباد",
    },
  },
  {
    model: "province.city",
    pk: 1019,
    fields: {
      name: "مرزیکلا",
      province_id: 27,
      slug: "مرزیکلا",
    },
  },
  {
    model: "province.city",
    pk: 1020,
    fields: {
      name: "نشتارود",
      province_id: 27,
      slug: "نشتارود",
    },
  },
  {
    model: "province.city",
    pk: 1021,
    fields: {
      name: "نکا",
      province_id: 27,
      slug: "نکا",
    },
  },
  {
    model: "province.city",
    pk: 1022,
    fields: {
      name: "نور",
      province_id: 27,
      slug: "نور",
    },
  },
  {
    model: "province.city",
    pk: 1023,
    fields: {
      name: "نوشهر",
      province_id: 27,
      slug: "نوشهر",
    },
  },
  {
    model: "province.city",
    pk: 1142,
    fields: {
      name: "فرح آباد",
      province_id: 27,
      slug: "فرح آباد",
    },
  },
  {
    model: "province.city",
    pk: 1024,
    fields: {
      name: "اراک",
      province_id: 28,
      slug: "اراک",
    },
  },
  {
    model: "province.city",
    pk: 1025,
    fields: {
      name: "آستانه",
      province_id: 28,
      slug: "آستانه",
    },
  },
  {
    model: "province.city",
    pk: 1026,
    fields: {
      name: "آشتیان",
      province_id: 28,
      slug: "آشتیان",
    },
  },
  {
    model: "province.city",
    pk: 1027,
    fields: {
      name: "پرندک",
      province_id: 28,
      slug: "پرندک",
    },
  },
  {
    model: "province.city",
    pk: 1028,
    fields: {
      name: "تفرش",
      province_id: 28,
      slug: "تفرش",
    },
  },
  {
    model: "province.city",
    pk: 1029,
    fields: {
      name: "توره",
      province_id: 28,
      slug: "توره",
    },
  },
  {
    model: "province.city",
    pk: 1030,
    fields: {
      name: "جاورسیان",
      province_id: 28,
      slug: "جاورسیان",
    },
  },
  {
    model: "province.city",
    pk: 1031,
    fields: {
      name: "خشکرود",
      province_id: 28,
      slug: "خشکرود",
    },
  },
  {
    model: "province.city",
    pk: 1032,
    fields: {
      name: "خمین",
      province_id: 28,
      slug: "خمین",
    },
  },
  {
    model: "province.city",
    pk: 1033,
    fields: {
      name: "خنداب",
      province_id: 28,
      slug: "خنداب",
    },
  },
  {
    model: "province.city",
    pk: 1034,
    fields: {
      name: "داودآباد",
      province_id: 28,
      slug: "داودآباد",
    },
  },
  {
    model: "province.city",
    pk: 1035,
    fields: {
      name: "دلیجان",
      province_id: 28,
      slug: "دلیجان",
    },
  },
  {
    model: "province.city",
    pk: 1036,
    fields: {
      name: "رازقان",
      province_id: 28,
      slug: "رازقان",
    },
  },
  {
    model: "province.city",
    pk: 1037,
    fields: {
      name: "زاویه",
      province_id: 28,
      slug: "زاویه",
    },
  },
  {
    model: "province.city",
    pk: 1038,
    fields: {
      name: "ساروق",
      province_id: 28,
      slug: "ساروق",
    },
  },
  {
    model: "province.city",
    pk: 1039,
    fields: {
      name: "ساوه",
      province_id: 28,
      slug: "ساوه",
    },
  },
  {
    model: "province.city",
    pk: 1040,
    fields: {
      name: "سنجان",
      province_id: 28,
      slug: "سنجان",
    },
  },
  {
    model: "province.city",
    pk: 1041,
    fields: {
      name: "شازند",
      province_id: 28,
      slug: "شازند",
    },
  },
  {
    model: "province.city",
    pk: 1042,
    fields: {
      name: "شهرجدیدمهاجران",
      province_id: 28,
      slug: "شهرجدیدمهاجران",
    },
  },
  {
    model: "province.city",
    pk: 1043,
    fields: {
      name: "غرق آباد",
      province_id: 28,
      slug: "غرق آباد",
    },
  },
  {
    model: "province.city",
    pk: 1044,
    fields: {
      name: "فرمهین",
      province_id: 28,
      slug: "فرمهین",
    },
  },
  {
    model: "province.city",
    pk: 1045,
    fields: {
      name: "قورچی باشی",
      province_id: 28,
      slug: "قورچی باشی",
    },
  },
  {
    model: "province.city",
    pk: 1046,
    fields: {
      name: "کرهرود",
      province_id: 28,
      slug: "کرهرود",
    },
  },
  {
    model: "province.city",
    pk: 1047,
    fields: {
      name: "کمیجان",
      province_id: 28,
      slug: "کمیجان",
    },
  },
  {
    model: "province.city",
    pk: 1048,
    fields: {
      name: "مأمونیه",
      province_id: 28,
      slug: "مأمونیه",
    },
  },
  {
    model: "province.city",
    pk: 1049,
    fields: {
      name: "محلات",
      province_id: 28,
      slug: "محلات",
    },
  },
  {
    model: "province.city",
    pk: 1050,
    fields: {
      name: "میلاجرد",
      province_id: 28,
      slug: "میلاجرد",
    },
  },
  {
    model: "province.city",
    pk: 1051,
    fields: {
      name: "نراق",
      province_id: 28,
      slug: "نراق",
    },
  },
  {
    model: "province.city",
    pk: 1052,
    fields: {
      name: "نوبران",
      province_id: 28,
      slug: "نوبران",
    },
  },
  {
    model: "province.city",
    pk: 1053,
    fields: {
      name: "نیمور",
      province_id: 28,
      slug: "نیمور",
    },
  },
  {
    model: "province.city",
    pk: 1054,
    fields: {
      name: "هندودر",
      province_id: 28,
      slug: "هندودر",
    },
  },
  {
    model: "province.city",
    pk: 1145,
    fields: {
      name: "مهاجران",
      province_id: 28,
      slug: "مهاجران",
    },
  },
  {
    model: "province.city",
    pk: 1055,
    fields: {
      name: "بندر عباس",
      province_id: 29,
      slug: "بندر عباس",
    },
  },
  {
    model: "province.city",
    pk: 1056,
    fields: {
      name: "ابوموسی",
      province_id: 29,
      slug: "ابوموسی",
    },
  },
  {
    model: "province.city",
    pk: 1057,
    fields: {
      name: "بستک",
      province_id: 29,
      slug: "بستک",
    },
  },
  {
    model: "province.city",
    pk: 1058,
    fields: {
      name: "بندر جاسک",
      province_id: 29,
      slug: "بندر جاسک",
    },
  },
  {
    model: "province.city",
    pk: 1059,
    fields: {
      name: "بندر چارک",
      province_id: 29,
      slug: "بندر چارک",
    },
  },
  {
    model: "province.city",
    pk: 1060,
    fields: {
      name: "بندر لنگه",
      province_id: 29,
      slug: "بندر لنگه",
    },
  },
  {
    model: "province.city",
    pk: 1061,
    fields: {
      name: "بیکاه",
      province_id: 29,
      slug: "بیکاه",
    },
  },
  {
    model: "province.city",
    pk: 1062,
    fields: {
      name: "پارسیان",
      province_id: 29,
      slug: "پارسیان",
    },
  },
  {
    model: "province.city",
    pk: 1063,
    fields: {
      name: "تخت",
      province_id: 29,
      slug: "تخت",
    },
  },
  {
    model: "province.city",
    pk: 1064,
    fields: {
      name: "جناح",
      province_id: 29,
      slug: "جناح",
    },
  },
  {
    model: "province.city",
    pk: 1065,
    fields: {
      name: "حاجی آباد",
      province_id: 29,
      slug: "حاجی آباد",
    },
  },
  {
    model: "province.city",
    pk: 1066,
    fields: {
      name: "خمیر",
      province_id: 29,
      slug: "خمیر",
    },
  },
  {
    model: "province.city",
    pk: 1067,
    fields: {
      name: "درگهان",
      province_id: 29,
      slug: "درگهان",
    },
  },
  {
    model: "province.city",
    pk: 1068,
    fields: {
      name: "دهبارز",
      province_id: 29,
      slug: "دهبارز",
    },
  },
  {
    model: "province.city",
    pk: 1069,
    fields: {
      name: "رویدر",
      province_id: 29,
      slug: "رویدر",
    },
  },
  {
    model: "province.city",
    pk: 1070,
    fields: {
      name: "زیارتعلی",
      province_id: 29,
      slug: "زیارتعلی",
    },
  },
  {
    model: "province.city",
    pk: 1071,
    fields: {
      name: "سردشت بشاگرد",
      province_id: 29,
      slug: "سردشت بشاگرد",
    },
  },
  {
    model: "province.city",
    pk: 1072,
    fields: {
      name: "سرگز",
      province_id: 29,
      slug: "سرگز",
    },
  },
  {
    model: "province.city",
    pk: 1073,
    fields: {
      name: "سندرک",
      province_id: 29,
      slug: "سندرک",
    },
  },
  {
    model: "province.city",
    pk: 1074,
    fields: {
      name: "سوزا",
      province_id: 29,
      slug: "سوزا",
    },
  },
  {
    model: "province.city",
    pk: 1075,
    fields: {
      name: "سیریک",
      province_id: 29,
      slug: "سیریک",
    },
  },
  {
    model: "province.city",
    pk: 1076,
    fields: {
      name: "فارغان",
      province_id: 29,
      slug: "فارغان",
    },
  },
  {
    model: "province.city",
    pk: 1077,
    fields: {
      name: "فین",
      province_id: 29,
      slug: "فین",
    },
  },
  {
    model: "province.city",
    pk: 1078,
    fields: {
      name: "قشم",
      province_id: 29,
      slug: "قشم",
    },
  },
  {
    model: "province.city",
    pk: 1079,
    fields: {
      name: "قلعه قاضی",
      province_id: 29,
      slug: "قلعه قاضی",
    },
  },
  {
    model: "province.city",
    pk: 1080,
    fields: {
      name: "کنگ",
      province_id: 29,
      slug: "کنگ",
    },
  },
  {
    model: "province.city",
    pk: 1081,
    fields: {
      name: "کوشکنار",
      province_id: 29,
      slug: "کوشکنار",
    },
  },
  {
    model: "province.city",
    pk: 1082,
    fields: {
      name: "کیش",
      province_id: 29,
      slug: "کیش",
    },
  },
  {
    model: "province.city",
    pk: 1083,
    fields: {
      name: "گوهران",
      province_id: 29,
      slug: "گوهران",
    },
  },
  {
    model: "province.city",
    pk: 1084,
    fields: {
      name: "میناب",
      province_id: 29,
      slug: "میناب",
    },
  },
  {
    model: "province.city",
    pk: 1085,
    fields: {
      name: "هرمز",
      province_id: 29,
      slug: "هرمز",
    },
  },
  {
    model: "province.city",
    pk: 1086,
    fields: {
      name: "هشتبندی",
      province_id: 29,
      slug: "هشتبندی",
    },
  },
  {
    model: "province.city",
    pk: 1087,
    fields: {
      name: "همدان",
      province_id: 30,
      slug: "همدان",
    },
  },
  {
    model: "province.city",
    pk: 1088,
    fields: {
      name: "ازندریان",
      province_id: 30,
      slug: "ازندریان",
    },
  },
  {
    model: "province.city",
    pk: 1089,
    fields: {
      name: "اسدآباد",
      province_id: 30,
      slug: "اسدآباد",
    },
  },
  {
    model: "province.city",
    pk: 1090,
    fields: {
      name: "برزول",
      province_id: 30,
      slug: "برزول",
    },
  },
  {
    model: "province.city",
    pk: 1091,
    fields: {
      name: "بهار",
      province_id: 30,
      slug: "بهار",
    },
  },
  {
    model: "province.city",
    pk: 1092,
    fields: {
      name: "تویسرکان",
      province_id: 30,
      slug: "تویسرکان",
    },
  },
  {
    model: "province.city",
    pk: 1093,
    fields: {
      name: "جورقان",
      province_id: 30,
      slug: "جورقان",
    },
  },
  {
    model: "province.city",
    pk: 1094,
    fields: {
      name: "جوکار",
      province_id: 30,
      slug: "جوکار",
    },
  },
  {
    model: "province.city",
    pk: 1095,
    fields: {
      name: "دمق",
      province_id: 30,
      slug: "دمق",
    },
  },
  {
    model: "province.city",
    pk: 1096,
    fields: {
      name: "رزن",
      province_id: 30,
      slug: "رزن",
    },
  },
  {
    model: "province.city",
    pk: 1097,
    fields: {
      name: "زنگنه",
      province_id: 30,
      slug: "زنگنه",
    },
  },
  {
    model: "province.city",
    pk: 1098,
    fields: {
      name: "سامن",
      province_id: 30,
      slug: "سامن",
    },
  },
  {
    model: "province.city",
    pk: 1099,
    fields: {
      name: "سرکان",
      province_id: 30,
      slug: "سرکان",
    },
  },
  {
    model: "province.city",
    pk: 1100,
    fields: {
      name: "شیرین سو",
      province_id: 30,
      slug: "شیرین سو",
    },
  },
  {
    model: "province.city",
    pk: 1101,
    fields: {
      name: "صالح آباد",
      province_id: 30,
      slug: "صالح آباد",
    },
  },
  {
    model: "province.city",
    pk: 1102,
    fields: {
      name: "فامنین",
      province_id: 30,
      slug: "فامنین",
    },
  },
  {
    model: "province.city",
    pk: 1103,
    fields: {
      name: "فرسفج",
      province_id: 30,
      slug: "فرسفج",
    },
  },
  {
    model: "province.city",
    pk: 1104,
    fields: {
      name: "فیروزان",
      province_id: 30,
      slug: "فیروزان",
    },
  },
  {
    model: "province.city",
    pk: 1105,
    fields: {
      name: "قروه در جزین",
      province_id: 30,
      slug: "قروه در جزین",
    },
  },
  {
    model: "province.city",
    pk: 1106,
    fields: {
      name: "قهاوند",
      province_id: 30,
      slug: "قهاوند",
    },
  },
  {
    model: "province.city",
    pk: 1107,
    fields: {
      name: "کبودرآهنگ",
      province_id: 30,
      slug: "کبودرآهنگ",
    },
  },
  {
    model: "province.city",
    pk: 1108,
    fields: {
      name: "گل تپه",
      province_id: 30,
      slug: "گل تپه",
    },
  },
  {
    model: "province.city",
    pk: 1109,
    fields: {
      name: "گیان",
      province_id: 30,
      slug: "گیان",
    },
  },
  {
    model: "province.city",
    pk: 1110,
    fields: {
      name: "لالجین",
      province_id: 30,
      slug: "لالجین",
    },
  },
  {
    model: "province.city",
    pk: 1111,
    fields: {
      name: "مریانج",
      province_id: 30,
      slug: "مریانج",
    },
  },
  {
    model: "province.city",
    pk: 1112,
    fields: {
      name: "ملایر",
      province_id: 30,
      slug: "ملایر",
    },
  },
  {
    model: "province.city",
    pk: 1113,
    fields: {
      name: "نهاوند",
      province_id: 30,
      slug: "نهاوند",
    },
  },
  {
    model: "province.city",
    pk: 1141,
    fields: {
      name: "کبودراهنگ",
      province_id: 30,
      slug: "کبودراهنگ",
    },
  },
  {
    model: "province.city",
    pk: 1114,
    fields: {
      name: "یزد",
      province_id: 31,
      slug: "یزد",
    },
  },
  {
    model: "province.city",
    pk: 1115,
    fields: {
      name: "ابرکوه",
      province_id: 31,
      slug: "ابرکوه",
    },
  },
  {
    model: "province.city",
    pk: 1116,
    fields: {
      name: "احمدآباد",
      province_id: 31,
      slug: "احمدآباد",
    },
  },
  {
    model: "province.city",
    pk: 1117,
    fields: {
      name: "اردکان",
      province_id: 31,
      slug: "اردکان",
    },
  },
  {
    model: "province.city",
    pk: 1118,
    fields: {
      name: "اشکذر",
      province_id: 31,
      slug: "اشکذر",
    },
  },
  {
    model: "province.city",
    pk: 1119,
    fields: {
      name: "بافق",
      province_id: 31,
      slug: "بافق",
    },
  },
  {
    model: "province.city",
    pk: 1120,
    fields: {
      name: "بفروئیه",
      province_id: 31,
      slug: "بفروئیه",
    },
  },
  {
    model: "province.city",
    pk: 1121,
    fields: {
      name: "بهاباد",
      province_id: 31,
      slug: "بهاباد",
    },
  },
  {
    model: "province.city",
    pk: 1122,
    fields: {
      name: "تفت",
      province_id: 31,
      slug: "تفت",
    },
  },
  {
    model: "province.city",
    pk: 1123,
    fields: {
      name: "حمیدیا",
      province_id: 31,
      slug: "حمیدیا",
    },
  },
  {
    model: "province.city",
    pk: 1124,
    fields: {
      name: "خضرآباد",
      province_id: 31,
      slug: "خضرآباد",
    },
  },
  {
    model: "province.city",
    pk: 1125,
    fields: {
      name: "دیهوک",
      province_id: 31,
      slug: "دیهوک",
    },
  },
  {
    model: "province.city",
    pk: 1126,
    fields: {
      name: "زارچ",
      province_id: 31,
      slug: "زارچ",
    },
  },
  {
    model: "province.city",
    pk: 1127,
    fields: {
      name: "شاهدیه",
      province_id: 31,
      slug: "شاهدیه",
    },
  },
  {
    model: "province.city",
    pk: 1128,
    fields: {
      name: "طبس",
      province_id: 31,
      slug: "طبس",
    },
  },
  {
    model: "province.city",
    pk: 1129,
    fields: {
      name: "عشق آباد",
      province_id: 31,
      slug: "عشق آباد",
    },
  },
  {
    model: "province.city",
    pk: 1130,
    fields: {
      name: "عقدا",
      province_id: 31,
      slug: "عقدا",
    },
  },
  {
    model: "province.city",
    pk: 1131,
    fields: {
      name: "مروست",
      province_id: 31,
      slug: "مروست",
    },
  },
  {
    model: "province.city",
    pk: 1132,
    fields: {
      name: "مهردشت",
      province_id: 31,
      slug: "مهردشت",
    },
  },
  {
    model: "province.city",
    pk: 1133,
    fields: {
      name: "مهریز",
      province_id: 31,
      slug: "مهریز",
    },
  },
  {
    model: "province.city",
    pk: 1134,
    fields: {
      name: "میبد",
      province_id: 31,
      slug: "میبد",
    },
  },
  {
    model: "province.city",
    pk: 1135,
    fields: {
      name: "ندوشن",
      province_id: 31,
      slug: "ندوشن",
    },
  },
  {
    model: "province.city",
    pk: 1136,
    fields: {
      name: "نیر",
      province_id: 31,
      slug: "نیر",
    },
  },
  {
    model: "province.city",
    pk: 1137,
    fields: {
      name: "هرات",
      province_id: 31,
      slug: "هرات",
    },
  },
];

export const province: ProvinceType[] = [
  {
    model: "province.province",
    pk: 1,
    fields: {
      name: "آذربایجان شرقی",
      slug: "آذربایجان-شرقی",
    },
  },
  {
    model: "province.province",
    pk: 2,
    fields: {
      name: "آذربایجان غربی",
      slug: "آذربایجان-غربی",
    },
  },
  {
    model: "province.province",
    pk: 3,
    fields: {
      name: "اردبیل",
      slug: "اردبیل",
    },
  },
  {
    model: "province.province",
    pk: 4,
    fields: {
      name: "اصفهان",
      slug: "اصفهان",
    },
  },
  {
    model: "province.province",
    pk: 5,
    fields: {
      name: "البرز",
      slug: "البرز",
    },
  },
  {
    model: "province.province",
    pk: 6,
    fields: {
      name: "ایلام",
      slug: "ایلام",
    },
  },
  {
    model: "province.province",
    pk: 7,
    fields: {
      name: "بوشهر",
      slug: "بوشهر",
    },
  },
  {
    model: "province.province",
    pk: 8,
    fields: {
      name: "تهران",
      slug: "تهران",
    },
  },
  {
    model: "province.province",
    pk: 9,
    fields: {
      name: "چهارمحال و بختیاری",
      slug: "چهارمحال-بختیاری",
    },
  },
  {
    model: "province.province",
    pk: 10,
    fields: {
      name: "خراسان جنوبی",
      slug: "خراسان-جنوبی",
    },
  },
  {
    model: "province.province",
    pk: 11,
    fields: {
      name: "خراسان رضوی",
      slug: "خراسان-رضوی",
    },
  },
  {
    model: "province.province",
    pk: 12,
    fields: {
      name: "خراسان شمالی",
      slug: "خراسان-شمالی",
    },
  },
  {
    model: "province.province",
    pk: 13,
    fields: {
      name: "خوزستان",
      slug: "خوزستان",
    },
  },
  {
    model: "province.province",
    pk: 14,
    fields: {
      name: "زنجان",
      slug: "زنجان",
    },
  },
  {
    model: "province.province",
    pk: 15,
    fields: {
      name: "سمنان",
      slug: "سمنان",
    },
  },
  {
    model: "province.province",
    pk: 16,
    fields: {
      name: "سیستان و بلوچستان",
      slug: "سیستان-بلوچستان",
    },
  },
  {
    model: "province.province",
    pk: 17,
    fields: {
      name: "فارس",
      slug: "فارس",
    },
  },
  {
    model: "province.province",
    pk: 18,
    fields: {
      name: "قزوین",
      slug: "قزوین",
    },
  },
  {
    model: "province.province",
    pk: 19,
    fields: {
      name: "قم",
      slug: "قم",
    },
  },
  {
    model: "province.province",
    pk: 20,
    fields: {
      name: "کردستان",
      slug: "کردستان",
    },
  },
  {
    model: "province.province",
    pk: 21,
    fields: {
      name: "کرمان",
      slug: "کرمان",
    },
  },
  {
    model: "province.province",
    pk: 22,
    fields: {
      name: "کرمانشاه",
      slug: "کرمانشاه",
    },
  },
  {
    model: "province.province",
    pk: 23,
    fields: {
      name: "کهگیلویه و بویراحمد",
      slug: "کهگیلویه-بویراحمد",
    },
  },
  {
    model: "province.province",
    pk: 24,
    fields: {
      name: "گلستان",
      slug: "گلستان",
    },
  },
  {
    model: "province.province",
    pk: 26,
    fields: {
      name: "لرستان",
      slug: "لرستان",
    },
  },
  {
    model: "province.province",
    pk: 25,
    fields: {
      name: "گیلان",
      slug: "گیلان",
    },
  },
  {
    model: "province.province",
    pk: 27,
    fields: {
      name: "مازندران",
      slug: "مازندران",
    },
  },
  {
    model: "province.province",
    pk: 28,
    fields: {
      name: "مرکزی",
      slug: "مرکزی",
    },
  },
  {
    model: "province.province",
    pk: 29,
    fields: {
      name: "هرمزگان",
      slug: "هرمزگان",
    },
  },
  {
    model: "province.province",
    pk: 30,
    fields: {
      name: "همدان",
      slug: "همدان",
    },
  },
  {
    model: "province.province",
    pk: 31,
    fields: {
      name: "یزد",
      slug: "یزد",
    },
  },
];
