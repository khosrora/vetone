'use client';
import BtnAddRequest from "@/components/BtnAddRequest";
import { base_api } from "@/lib/fetch/base_api";
import { VeterinarianCardType } from "@/lib/types/VeterinarianTypes";
import { Img } from "@repo/ui/img";
import {
  IconMapPin,
  IconMedicalCross,
  IconPhone,
  IconThumbUp,
  IconPaw,
  IconClock,
} from "@tabler/icons-react";
import FavoriteButton from "@/components/ButtonFavorite";
import Share from "@/components/Share";
import { LINK_LANDINGPAGE } from "@repo/lib/links";
import { Btn } from "@repo/ui/btn";
import { toast } from "sonner";
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { AnimalsCardType } from "@/lib/types/AnimalsTypes";
import VetDetailSkeleton from "@/components/loading/SingleLoad";
import Link from "next/link";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<VeterinarianCardType | null>(null);
  const [animals, setAnimals] = useState<AnimalsCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [itemSlug, setItemSlug] = useState<string>('');
  const { status } = useSession();

  useEffect(() => {
    async function fetchAllData() {
      setLoading(true);
      try {
        // Fetch اطلاعات اولیه دامپزشک
        const vetRes = await fetch(`${base_api}/veterinary/${slug}`, {
          cache: "no-cache",
        });
        
        if (!vetRes.ok) throw new Error("Failed to fetch vet data");
        const vetData = await vetRes.json();

        // اگر ID داشت، هر دو API رو همزمان صدا بزن
        if (vetData?.id) {
          const [finalVetData, animalsData] = await Promise.all([
            Promise.resolve(vetData), // دیتای دامپزشک که قبلاً گرفتیم
            fetch(`${base_api}/veterinary/veterinarian-animals/?veterinarian=${vetData.id}`, {
              cache: "no-cache",
            }).then(res => res.ok ? res.json() : { results: [] })
          ]);

          setData(finalVetData);
          setAnimals(animalsData.results || animalsData || []);
        } else {
          setData(vetData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("خطا در بارگذاری اطلاعات");
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, [slug]);

  // نمایش skeleton loading
  if (loading) {
    return <VetDetailSkeleton />;
  }

  // اگر دیتا نیومد
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 text-lg">اطلاعات یافت نشد</p>
        </div>
      </div>
    );
  }

// ✅ ساخت تگ‌های SEO با لینک
  const seoTags = [
    // تگ نام دامپزشک
    {
      text: `دامپزشک ${data.fullName}`,
      url: `/search_veterinarians?name=${encodeURIComponent(data.fullName)}`,
      type: 'name'
    },
    // تگ‌های تخصص (حیوانات)
    ...animals.map(animal => ({
      text: `دامپزشک ${animal.name}`,
      url: `/search_veterinarians?animal=${animal.id}`,
      type: 'specialty'
    })),
    // تگ شهر
    ...(data.city?.name ? [{
      text: `دامپزشک در ${data.city.name}`,
      url: `/search_veterinarians?city=${data.city.id}`,
      type: 'location'
    }] : []),
    // تگ استان
    ...(data.province?.name ? [{
      text: `دامپزشک در ${data.province.name}`,
      url: `/search_veterinarians?province=${data.province.id}`,
      type: 'location'
    }] : []),
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* HEADER SECTION */}
        <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Img
            src="/images/matab.svg"
            alt="Veterinary Clinic Background"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute bottom-0 top-0 my-auto left-0 right-0 py-6 px-10 flex items-center gap-6">
            <div className="avatar">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full ring-4 ring-white shadow-xl">
                <img src={data.image} alt={data.fullName} />
              </div>
            </div>
            <div>
              <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold">
                دکتر {data.fullName}
              </h1>
              <p className="text-white/90 mt-4 text-xs md:text-sm lg:text-base">
                {data.experience} سال سابقه‌ی کاری موفق
              </p>
            </div>
          </div>
        </div>

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT & MIDDLE COLUMNS */}
          <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-8">
            {/* VET INFO CARD */}
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-lg text-gray-800">
                    دکتر {data.fullName}
                  </h2>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <Share
                    link={`${LINK_LANDINGPAGE}search_veterinarians/${data.slug}`}
                  />
                  <FavoriteButton
                    vetId={data.id}
                    initialFavorited={Boolean((data as any).is_favorited)}
                  />
                </div>
              </div>
              <hr />
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <IconMedicalCross size={20} className="text-gray-400" />
                  <span>
                    کد نظام پزشکی:{" "}
                    <span className="font-semibold text-gray-900">
                      {data.medical_license}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <IconThumbUp size={20} className="text-green-500" />
                  <span className="font-semibold text-gray-900">
                    {data.surgery}+ نوبت موفق
                  </span>
                </div>
                {animals.length > 0 && (
                  <div className="flex items-start gap-3">
                    <IconPaw size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 block mb-2">
                        تخصص های دامپزشک:
                      </span>
                      <div className="flex flex-wrap items-center justify-center align-middle text-center gap-4">
                        {animals.map((animal) => (
                          <div
                            key={animal.id}
                            className="bg-blue-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-medium"
                          >
                            <span>{animal.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <BtnAddRequest isLarge={true} idVet={data.id} />
              </div>
            </div>

            {/* BIOGRAPHY CARD */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl text-gray-800 mb-4">بیوگرافی</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {data.bio === null ? "دامپزشک مورد نظر توضیحی درباره خود ننوشته است" : data.bio}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-12 xl:col-span-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                آدرس و اطلاعات مطب
              </h3>

              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex items-start gap-3">
                  <IconMapPin
                    size={20}
                    className="text-gray-400 mt-0.5 flex-shrink-0"
                  />
                  {!!data.province?.name && !!data.city?.name && (
                    <span>
                      {data?.province.name}, {data?.city.name}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone size={20} className="text-gray-400" />
                  <span className="font-semibold" dir="ltr">
                    {data.phone}
                  </span>
                </div>
              </div>

              <hr className="my-5" />

                           <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">برچسب‌های مرتبط</h3>
                <div className="flex flex-wrap gap-2">
                  {seoTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={tag.url}
                      className="inline-flex items-center px-3 py-1.5 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg text-xs font-medium text-green-700 hover:text-green-800 transition-all duration-200 hover:shadow-sm"
                    >
                      {tag.text}
                    </Link>
                  ))}
                </div>
              </div>
              {/* CTA Button */}
              <div className="mt-auto pt-6 hidden lg:block">
                <Btn
                  className="bg-green-600 hover:bg-green-700 w-full text-white font-bold py-2 px-6 rounded-lg"
                  onClick={() => {
                    if (!!data.slug) {
                      setItemSlug(data.slug);
                    }
                    if (status === "unauthenticated") {
                      return toast.error("ابتدا وارد شوید.");
                    }
                    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
                    if (modal) {
                      modal.showModal();
                    }
                  }}
                >
                  درخواست نوبت
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}