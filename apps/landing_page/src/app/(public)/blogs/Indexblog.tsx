import Moment from "@/components/Moment";
import PopularBlogs from "@/components/PopularBlogs";
import TitleLink from "@/components/TitleLink";
import { base_api } from "@/lib/fetch/base_api";
import { blogCardType } from "@/lib/types/BlogsTypes";
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
                    {item.title.length > 30
                      ? item.title.substring(0, 30) + "..."
                      : item.title}
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
        <PopularBlogs listData={initialData.slice(0, 4)} />
      </div>
    </div>
  );
}

export default Indexblog;
