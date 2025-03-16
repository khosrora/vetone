"use client";
import Link from "next/link";
import {
    IconCaretLeftFilled,
} from "@tabler/icons-react";
function Rasitem() {
    return (
        <>
            
                <div className="grid grid-cols-3 lg:flex justify-between items-center">
                    <div className="flex col-span-2 justify-start items-center gap-x-2">
                        <img
                            src="https://avatar.iran.liara.run/public"
                            className="w-10 h-10 lg:w-16 lg:h-16"
                        />
                        <div className="space-y-2 lg:space-y-3 px-2">
                            <p className="font-bold text-xs lg:text-lg block">گاومیش</p>
                        </div>
                    </div>
                    <div className="flex gap-x-1 justify-self-end text-green-00 font-bold  text-sm lg:text-lg text-black items-center">

                        4
                        <p className="text-[10px] lg:text-sm font-light">راس</p>
                    </div>
                </div>
                <div className="divider"></div>
          
        </>
    )
}
export default Rasitem