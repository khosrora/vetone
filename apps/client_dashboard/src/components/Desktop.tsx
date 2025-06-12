"use client";
import { getDataAPI } from "@/lib/fetch/fetch_axios";
import { FavoriteCardType } from "@/lib/types/favoriteCard.type";
import { LINK_LANDINGPAGE } from "@repo/lib/links";
import { Alert } from "@repo/ui/alert";
import { IconPhone, IconUser } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import useSWR from "swr";
import Error from "./Error";
import TitleBack from "./TitleBack";
import VeterinarianLoading from "./VeterinarianLoading";
export default function Desktop() {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;
  const shouldFetch = !!token;
  const { data, isLoading, error } = useSWR(
    shouldFetch ? ["dashboar-data", token] : null,
    async ([_, token]) => {
      const [info, favorites] = await Promise.all([
        getDataAPI(["/account/me/", token]),
        getDataAPI(["/veterinary/favorites/", token]),
      ]);
      return { user: info.data, favorites: favorites.data };
    }
  );

  if (isLoading) return <VeterinarianLoading />;
  if (error) return <Error />;
  if (!data) return null;

  const { user, favorites } = data;
  return (
    <div className="p-4 lg:py-1 ">
      <div className="block lg:hidden">
        <TitleBack text="داشبورد دامدار" />
      </div>
      <div className="space-y-6">
        <div className="bg-white block lg:grid lg:grid-cols-10 rounded-lg items-center">
          <div className="col-span-2 rounded-lg p-4">
            <img src="https://avatar.iran.liara.run/public" />
          </div>
          <div className="p-4 col-span-8 space-y-4">
            <div className="flex gap-x-2 items-center">
              <IconUser size={20} />
              <p className="text-base font-bold">{user?.fullName}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <IconPhone size={20} />
              <p className="text-sm text-gray-700">{user?.phone}</p>
            </div>
          </div>
        </div>
        {/* <div className="grid gap-4 lg:gap-x-6 grid-cols-1 lg:grid-cols-3">
          <div className="p-4 bg-white rounded-md space-y-4">
            <div className="flex items-center gap-x-4">
              <div className="border border-1.5 border-green_vetone bg-green_vetone/10 p-3 rounded-md">
                <IconClipboardTextFilled color="#1e7000" />
              </div>
              <p className="text-sm font-bold">درخواست های ارسالی</p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p className="text-2xl font-bold">5,000</p>{" "}
              <p className="text-sm">درخواست</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md space-y-4">
            <div className="flex items-center gap-x-4">
              <div className="border border-1.5 border-yellow-600 bg-yellow-600/10 p-3 rounded-md">
                <IconUserFilled color="#ad7600" />
              </div>
              <p className="text-sm font-bold">دامپزشکان مورد علاقه</p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p className="text-2xl font-bold">5,000</p>{" "}
              <p className="text-sm">نفر</p>
            </div>
          </div>
          <div className="p-4 bg-white space-y-4 rounded-md">
            <div className="flex items-center gap-x-4">
              <div className="border border-1.5 border-blue-700 bg-blue-700/10 p-3 rounded-md">
                <IconCashBanknoteFilled color="#040890" />
              </div>
              <p className="text-sm font-bold">موجودی</p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p className="text-2xl font-bold">1,500,000</p>{" "}
              <p className="text-sm">تومان</p>
            </div>
          </div>
        </div> */}
        <div>
          <div>
            <h3 className="text-lg font-bold my-4">دامپزشکان مورد علاقه</h3>
            {favorites?.length === 0 ? (
              <Alert
                message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
                type="info"
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="table table-zebra text-right">
                  <thead>
                    <tr className="bg-white">
                      <th className="text-gray-600 text-xs font-light">
                        نام و نام خانوادگی
                      </th>
                      <th className="text-gray-600 text-xs font-light">
                        نوع درخواست
                      </th>
                      <th className="text-gray-600 text-xs font-light">
                        استان و شهر
                      </th>
                      <th className="text-gray-600 text-xs font-light">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {favorites.map((item: FavoriteCardType) => (
                      <tr key={item.id}>
                        <th>{item.fullName}</th>
                        <td>{item.phone}</td>
                        <td>{item.city}</td>
                        <td className="text-green_vetone">
                          <Link
                            href={`${LINK_LANDINGPAGE}/search_veterinarians/${item.slug}`}
                          >
                            مشاهده دامپزشک
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
