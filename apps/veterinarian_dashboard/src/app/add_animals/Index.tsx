"use client";

import { fetcher, postDataAPI } from "@/lib/fetch/fetch_axios";
import { animalType } from "@/lib/types/animal.type";
import { IconCircleCheckFilled } from "@tabler/icons-react";
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

  const AnimalCardSkeleton = () => (
    <div className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-100 rounded-2xl animate-pulse">
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>
        <div className="h-5 w-16 bg-gray-300 rounded-md"></div>
    </div>
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
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-extrabold text-gray-800 mb-2">تخصص در حیوانات</h2>
                <p className="text-sm text-gray-500 mb-6">در حال بارگذاری لیست حیوانات...</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[...Array(5)].map((_, index) => <AnimalCardSkeleton key={index} />)}
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 p-4 bg-red-50 rounded-lg">خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.</div>;
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-extrabold text-gray-800 mb-2">تخصص در حیوانات</h2>
            <p className="text-sm text-gray-500 mb-6">
                حیواناتی که در درمان آن‌ها تخصص دارید را انتخاب کنید.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data?.map((animal: animalType) => {
                    const isSelected = selectedIds.includes(animal.id);
                    return (
                        <div
                            key={animal.id}
                            onClick={() => toggleSelect(animal.id)}
                            className={`
                                relative flex flex-col items-center justify-center gap-3 p-4 
                                rounded-2xl border-2 cursor-pointer transition-all duration-300
                                ${isSelected ? "border-blue-500 bg-blue-50/50" : "border-gray-200 bg-gray-50 hover:border-gray-300"}
                            `}
                        >
                            {/* --- نشانگر انتخاب --- */}
                            {isSelected && (
                                <IconCircleCheckFilled
                                    className="absolute top-2 right-2 text-blue-600 bg-white rounded-full"
                                    size={24}
                                />
                            )}
                            <div className="avatar transition-transform duration-300 ease-in-out hover:scale-110">
                                <div className="w-20 h-20 rounded-full ring-2 ring-offset-2 ring-gray-100">
                                    <img src={animal.image.url} alt={animal.name} />
                                </div>
                            </div>
                            <span className="text-base font-bold text-gray-800">{animal.name}</span>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                    onClick={handleSend}
                    disabled={loading}
                    className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-xl 
                               disabled:opacity-60 disabled:cursor-not-allowed
                               hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-300"
                >
                    {loading ? "در حال ثبت تغییرات..." : "ثبت تغییرات"}
                </button>
            </div>
        </div>
    );
}