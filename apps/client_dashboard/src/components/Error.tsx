"use client"
import { Img } from "@repo/ui/img"
import { error404 } from "@repo/lib/titles"
export default function Error() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-40 my-8">
                <Img src="/images/404.png" width={500} height={500} className="w-96" alt={error404} />
                <span className="text-center">خطا در دریافت اطلاعات</span>
            </div>
        </>
    )
}