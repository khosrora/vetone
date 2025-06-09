import Moment from "@/components/Moment";
import TitleLink from "@/components/TitleLink";
import { base_api } from "@/lib/fetch/base_api";
import { blogCardType } from "@/lib/types/BlogsTypes";
import { Btn } from "@repo/ui/btn";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";




async function getInitialVetData(page: number = 1) {
  const res = await fetch(`${base_api}/blog/blogs`, {
    cache: "no-cache",
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const images = [
  "/images/blog/1.png",
  "/images/blog/2.png",
  "/images/blog/3.png",
  "/images/blog/4.png",
  "/images/blog/5.png",
];

async function Indexblog() {
  const initialData = await getInitialVetData(1);
  return (
    <div className="max-w-7xl mx-auto my-12 p-4 md:p-0">
      <TitleLink title="اخبار مقالات" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  lg:gap-x-6">
        <div className="md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-6">
            {initialData?.map((item: blogCardType) => (
              <div key={item.id} className="card bg-white">
                <figure>
                  <img src={item.image.image} alt={item.title} />
                </figure>
                <div className="card-body p-4 space-y-2">
                  <h2 className="card-title text-base font-bold">
                    {
                      item.title.length > 30 
                      ? item.title.substring(0, 30) + '...' 
                      : item.title
                    }
                  </h2>
                  <p className="text-[12px] lg:text-sm">
                    {item.short_desc.length > 50
                      ? item.short_desc.substring(0, 50) + "..."
                      : item.short_desc}
                  </p>
                </div>
                <div className="flex justify-between items-center p-4 text-[12px]">
                  <Moment time={item.updated_at} />
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="flex justify-end items-center gap-x-2"
                  >
                    <small className="text-blue-500 text-sm">
                      بیشتر بخوانید
                    </small>
                    <IconChevronLeft className="text-blue-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg">
          <div className="space-y-6">
            <div className="bg-white p-6 space-y-4 rounded-xl">
              <div className="text-center items-center flex">
                <div className="avatar-group -space-x-6 flex flex-row-reverse">
                  {images.map((src,index) => (
                    <div key={index} className="avatar">
                      <div className="w-12">
                        <img src={src} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-base font-bold">
                {" "}
                آنلاین دامپزشک خود را رزرو کنید{" "}
              </p>
              <Btn className="w-full text-sm">رزرو نوبت</Btn>
            </div>
            <div className="space-y-4 bg-white p-6 rounded-xl">
              <h3 className="text-base font-bold">پربازدیدترین مقالات</h3>

              <div className="divider before:border-gray-600 after:border-gray-600 my-0"></div>
              <div className="mt-0">
                 {initialData?.slice(0, 4).map((item: blogCardType) => (
                  <Link
                    key={item.id}
                    href={"/"}
                    className="w-full py-3.5 rounded-lg text-xs block text-gray-600"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Link
                href={"https://www.instagram.com/Vetone.ir/"}
                className="w-full p-4 text-center text-white rounded-lg text-sm bg-gradient-to-r from-purple-500 to-pink-500 block"
              >
                {" "}
                دنبال کردن اینستاگرام
              </Link>
              <Link
                href={"/"}
                className="w-full p-4 text-center text-white rounded-lg text-sm bg-gradient-to-r from-sky-500 to-indigo-500 block"
              >
                {" "}
                دنبال کردن تلگرام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indexblog;
