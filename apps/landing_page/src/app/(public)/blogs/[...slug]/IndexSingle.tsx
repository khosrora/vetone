"use client"
import Back from "@/components/Back"
import { base_api } from "@/lib/fetch/base_api";
import { blogCardType } from "@/lib/types/BlogsTypes";
import { Btn } from "@repo/ui/btn";
import Link from "next/link";

async function IndexSingle({ params }: { params: { slug: string } }) {
    const res = await fetch(`${base_api}/blog/${params.slug}/`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data: blogCardType = await res.json();

        return(
        <div className="max-w-7xl mx-auto my-8 lg:my-20 p-4 md:p-0">
           <Back title="بازگشت"/>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6">
           
           <div className="card md:col-span-2 lg:col-span-3">
                                    <div>
                                        <img
                                            src={data.image.image}
                                            alt={data.image_alt}
                                            className="object-cover w-full rounded-lg"
                                        />
                                    </div>
                                    <div className="card-body py-4 px-0 space-y-2">
                                        <h2 className="card-title text-base font-bold">{data.title}</h2>
                                        <p className="text-[12px] lg:text-sm">
                                            {data.desc}
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className="rounded-lg">
                    <div className="space-y-6">
                        <div className="bg-white p-6 space-y-4 rounded-xl">
                            <div className="text-center items-center flex">
                                <div className="avatar-group -space-x-6 flex flex-row-reverse">
                                {[1, 2, 3,4].map((item: number) => (
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <p className="text-base font-bold"> آنلاین دامپزشک خود را رزرو کنید </p>
                            <Btn className="w-full text-sm">رزرو نوبت</Btn>
                        </div>
                        <div className="space-y-4 bg-white p-6 rounded-xl">
                            <h3 className="text-base font-bold">پربازدیدترین مقالات</h3>
                            
                            <div className="divider before:border-gray-600 after:border-gray-600 my-0"></div>
                            <div className="mt-0">
                            {[1, 2, 3].map((item: number) => (
                            <Link href={"/"} className="w-full py-3.5 rounded-lg text-sm block text-gray-600">مقاله شماره 1 درباره بدبختی ها</Link>
                            ))}   
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Link href={"/"} className="w-full p-4 text-center text-white rounded-lg text-sm bg-gradient-to-r from-purple-500 to-pink-500 block"> دنبال کردن اینستاگرام</Link>
                            <Link href={"/"} className="w-full p-4 text-center text-white rounded-lg text-sm bg-gradient-to-r from-sky-500 to-indigo-500 block"> دنبال کردن تلگرام</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
    }
    export default IndexSingle