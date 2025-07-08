import { blogCardType } from "@/lib/types/BlogsTypes";
import { Btn } from "@repo/ui/btn";
import Link from "next/link";
import React from "react";

const images = [
  "/images/blog/1.png",
  "/images/blog/2.png",
  "/images/blog/3.png",
  "/images/blog/4.png",
  "/images/blog/5.png",
];

function PopularBlogs({ listData }: { listData: blogCardType[] }) {
  return (
    <div className="rounded-lg">
      <div className="space-y-6">
        <div className="bg-white p-6 space-y-4 rounded-xl">
          <div className="text-center items-center flex">
            <div className="avatar-group -space-x-6 flex flex-row-reverse">
              {images.map((src, index) => (
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
            {listData?.slice(0, 4).map((item: blogCardType) => (
              <Link
                key={item.id}
                href={"/search_veterinarians"}
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
  );
}

export default PopularBlogs;
