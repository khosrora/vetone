"use client";
import TitleBack from "@/components/TitleBack";
import { Btn } from "@repo/ui/btn";
import {
  IconEdit,
  IconHospital,
  IconMapPin,
  IconMail,
  IconPhone,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import React from "react";
import AddAddress from "./AddAddress";

function Index() {
  return (
    <>
      <div className="flex justify-between items-center">
        <TitleBack text="آدرس محل کار" />
        <Btn
          className="افزودن آدرس"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          {" "}
          افزودن آدرس{" "}
        </Btn>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-md space-y-2 ">
            <p className="text-sm font-bold">زاهدان منطقه 2 زیباشهر خیابان پیروزی نبش پیروزی 7 و 9 مجتمع</p>
            <div className="divider"></div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex-col space-y-6">
                <div className="flex justify-start items-center gap-x-2">
                  <IconUser size={20}/>
                  <p>محمدرضا زوری زاده</p>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                  <IconMapPin />
                  <p>زاهدان</p>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                  <IconMail />
                  <p>9910438081</p>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                  <IconPhone />
                  <p>09338974567</p>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                  <IconHospital />
                  <p>کلینیک دامپزشکی المهدی</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-start items-center gap-x-6 text-sm">
              <div className="flex justify-start items-center text-red-600 gap-x-2">
                <IconTrash />
                <p>حذف آدرس</p>
              </div>
              <div className="flex justify-start items-center text-sky-600 gap-x-2">
                <IconEdit />
                <p>ویرایش آدرس</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddAddress />
    </>
  );
}

export default Index;
