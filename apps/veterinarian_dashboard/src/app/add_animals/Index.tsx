"use client";

import { fetcher, postDataAPI } from "@/lib/fetch/fetch_axios";
import { animalType } from "@/lib/types/animal.type";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import useSWR from "swr";

export default function AnimalSelector() {
  const { data: session } = useSession();
  const token: string = session?.accessToken!;

  const { data, error, isLoading } = useSWR(
    [`/veterinary/animals/`, token],
    fetcher
  );

  const { data: myAnimals } = useSWR(
    [`/veterinary/accepted-animals/`, token],
    fetcher
  );

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSend = async () => {
    if (selectedIds.length === 0) {
      toast.error("لطفا حداقل یک حیوان انتخاب کنید.");
      return;
    }

    setLoading(true);
    try {
      const res = await postDataAPI(
        "/veterinary/accepted-animals/add/",
        { animal_ids: selectedIds },
        token
      );
      if (res.status === 200 || res.status === 201) {
        toast.success("حیوانات با موفقیت ثبت شدند.");
        setSelectedIds([]);
      } else {
        throw new Error(`Unexpected status: ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("خطا در ارسال، دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        در حال بارگذاری...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">انتخاب حیوانات</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {data?.map((animal: animalType) => {
          const isSelected = selectedIds.includes(animal.id);
          return (
            <div
              key={animal.id}
              onClick={() => toggleSelect(animal.id)}
              className={`
                flex justify-center items-center border-green_vetone gap-x-2
                ${isSelected ? "border-green_vetone bg-green-50" : "border-transparent"}
              `}
            >
              <div className="avatar">
                <div className="w-12 rounded">
                  <img src={animal.image.url} alt={animal.name} />
                </div>
              </div>
              <span className="text-base">{animal.name}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleSend}
        disabled={loading}
        className="mt-6 w-full bg-green_vetone text-white py-2 rounded disabled:opacity-50"
      >
        {loading ? "در حال ارسال..." : "ارسال"}
      </button>
    </div>
  );
}
