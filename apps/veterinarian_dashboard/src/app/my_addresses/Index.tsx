"use client";
import TitleBack from "@/components/TitleBack";
import { deleteDataAPI, fetcher } from "@/lib/fetch/fetch_axios";
import { AddressCardType } from "@/lib/types/addresses.type";
import { Alert } from "@repo/ui/alert";
import { Btn } from "@repo/ui/btn";
import { IconMapPin, IconTrash } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import useSWR from "swr";
import AddAddress from "./AddAddress";
import Loader from "@/components/Loader";
function Index() {
  const { data: session } = useSession();
  const token = session?.token.token;

  const { data: addresses, isLoading } = useSWR(
    !!token ? ["/province/addresses", token] : null,
    fetcher
  );

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteDataAPI(`/province/addresses/${id}/`, token);
      if (res.status === 204) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error("دوباره امتحان کنید");
    }
  };

  if (isLoading || !token) {
      return (
      <Loader/>
      );
    }
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
          افزودن آدرس
        </Btn>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {addresses.length === 0 ? (
          <Alert
            message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
            type="info"
          />
        ) : (
          addresses.map((item: AddressCardType) => (
            <div key={item.id} className="bg-white p-6 rounded-md space-y-2 ">
              <p className="text-sm font-bold">{item.street}</p>
              <div className="divider"></div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex-col space-y-6">
                  {/* <div className="flex justify-start items-center gap-x-2">
                    <IconUser size={20} />
                    <p>محمدرضا زوری زاده</p>
                  </div> */}
                  <div className="flex justify-start items-center gap-x-2">
                    <IconMapPin />
                    <p>{item.city}</p>
                  </div>
                  {/* <div className="flex justify-start items-center gap-x-2">
                    <IconMail />
                    <p>9910438081</p>
                  </div> */}
                  {/* <div className="flex justify-start items-center gap-x-2">
                    <IconPhone />
                    <p>09338974567</p>
                  </div> */}
                  {/* <div className="flex justify-start items-center gap-x-2">
                    <IconHospital />
                    <p>کلینیک دامپزشکی المهدی</p>
                  </div> */}
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex justify-start items-center gap-x-6 text-sm">
                <div
                  className="flex justify-start items-center text-red-600 gap-x-2 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  <IconTrash />
                  <p>حذف آدرس</p>
                </div>
                {/* <div className="flex justify-start items-center text-sky-600 gap-x-2">
                  <IconEdit />
                  <p>ویرایش آدرس</p>
                </div> */}
              </div>
            </div>
          ))
        )}
      </div>
      <AddAddress />
    </>
  );
}

export default Index;
