"use client";
import React from "react";
import TitleBack from "@/components/TitleBack";
import { Btn } from "@repo/ui/btn";
import AddRancher from "./AddRancher";

function Index() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <TitleBack text="دامدارها" />
        <Btn
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          افزودن دامدار
        </Btn>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-zebra text-right">
          <thead>
            <tr>
              <th className="text-gray-600 text-xs font-light">نام و نام خانوادگی</th>
              <th className="text-gray-600 text-xs font-light">موبایل</th>
              <th className="text-gray-600 text-xs font-light">استان و شهر</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-black text-xs font-bold">محمد صابری</td>
              <td className="text-black text-xs font-bold">09365483987</td>
              <td className="text-black text-xs font-bold">تهران - تهران</td>
            </tr>
            <tr>
              <td className="text-black text-xs font-bold">محمد صابری</td>
              <td className="text-black text-xs font-bold">09365483987</td>
              <td className="text-black text-xs font-bold">تهران - تهران</td>
            </tr>
            <tr>
              <td className="text-black text-xs font-bold">محمد صابری</td>
              <td className="text-black text-xs font-bold">09365483987</td>
              <td className="text-black text-xs font-bold">تهران - تهران</td>
            </tr>
            <tr>
              <td className="text-black text-xs font-bold">محمد صابری</td>
              <td className="text-black text-xs font-bold">09365483987</td>
              <td className="text-black text-xs font-bold">تهران - تهران</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddRancher />
    </div>
  );
}

export default Index;
