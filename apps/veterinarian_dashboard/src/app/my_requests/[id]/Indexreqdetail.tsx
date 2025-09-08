"use client";
import ParsedText from "@/components/ParsedText";
import Rasitem from "@/components/Rasitem";
import TitleBack from "@/components/TitleBack";
import VeterinarianLoading from "@/components/VeterinarianLoading";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { animalType, requestCardType } from "@/lib/types/request.type";
import { IMAGE_PLACEHOLDER } from "@repo/lib/links";
import { requestsStateEnum } from "@repo/lib/types";
import {
    IconMessageChatbotFilled,
    IconPhone,
    IconRadar2,
    IconCircleCheck,
    IconAlertTriangle,
    IconCircleX,
    IconFileDescription, // New Icon
    IconPaperclip, // New Icon
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";
import useSWR from "swr";

// --- کامپوننت نشانگر وضعیت (بدون تغییر) ---
const RequestStatusBadge = ({ state }: { state: requestsStateEnum }) => {
    if (state === requestsStateEnum.Confirm) return <div className="flex items-center gap-2 py-2 px-4 rounded-full text-xs font-bold bg-green-100 text-green-700"><IconCircleCheck size={16} /><span>تایید شده</span></div>;
    if (state === requestsStateEnum.Reject) return <div className="flex items-center gap-2 py-2 px-4 rounded-full text-xs font-bold bg-red-100 text-red-700"><IconCircleX size={16} /><span>رد شده</span></div>;
    return <div className="flex items-center gap-2 py-2 px-4 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700"><IconAlertTriangle size={16} /><span>در انتظار تایید</span></div>;
};

// --- کامپوننت تب‌ها ---
const TabButton = ({ label, icon, isActive, onClick }: { label: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }) => (
    <button onClick={onClick} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${isActive ? 'bg-green-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}>
        {icon}
        {label}
    </button>
);

function Indexreqdetail({ id }: { id: string }) {
    const { data: session } = useSession();
    const token: string = session?.accessToken!;
    const { data, isLoading } = useSWR(!!token ? [`/veterinary/requests/${id}/`, token] : null, fetcher);
    const [activeTab, setActiveTab] = useState('details');

    if (isLoading || !data) return <VeterinarianLoading />;
    const request: requestCardType = data;

    return (
        // --- پس‌زمینه جدید و چیدمان کلی ---
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="max-w-7xl mx-auto p-4 lg:py-8 space-y-8">
                {/* --- هدر صفحه --- */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <TitleBack text="جزئیات درخواست" />
                    <RequestStatusBadge state={request.state} />
                </div>

                {/* --- چیدمان اصلی --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* --- ستون سایدبار (در موبایل بالا نمایش داده می‌شود) --- */}
                    <aside className="lg:col-span-4 space-y-8 lg:sticky top-6">
                        {/* کارت اطلاعات دامدار */}
                        {request.rancher && (
                            <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-green-500 text-center">
                                <img src={request.rancher.image ?? IMAGE_PLACEHOLDER} className="w-24 h-24 rounded-full mx-auto ring-4 ring-blue-100" alt="nist" />
                                <p className="font-extrabold text-xl text-gray-900 mt-4">{request.rancher.fullName}</p>
                                <p className="text-sm text-gray-500">دامدار</p>
                                <div className="mt-6 space-y-3">
                                    <a href={`tel:${request.rancher.phone}`} className="flex items-center justify-center gap-2 w-full bg-green-100 text-green-800 font-bold py-3 px-4 rounded-xl transition-all hover:bg-green-200">
                                        <IconPhone size={20} /><span>{request.rancher.phone}</span>
                                    </a>
                                    {request.latitude && request.longitude && (
                                        <Link href={`http://googleusercontent.com/maps.google.com/6{request.latitude},${request.longitude}&travelmode=driving`} target="_blank" className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-xl transition-all hover:bg-gray-200">
                                            <IconRadar2 size={20} /><span>مسیریابی</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                        {/* کارت تحلیل هوش مصنوعی */}
                        {request.analysis_result && (
                            <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <IconMessageChatbotFilled className="text-green-600" size={28} />
                                    <h3 className="font-extrabold text-lg text-gray-800">تحلیل هوش مصنوعی</h3>
                                </div>
                                <div className="max-h-52 overflow-y-auto text-sm text-gray-600 leading-relaxed"><ParsedText content={request.analysis_result} /></div>
                            </div>
                        )}
                    </aside>
                    
                    {/* --- ستون اصلی (در موبایل پایین‌تر نمایش داده می‌شود) --- */}
                    <main className="lg:col-span-8">
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            {/* --- دکمه‌های تب --- */}
                            <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-xl mb-6">
                                <TabButton label="جزئیات درخواست" icon={<IconFileDescription size={18} />} isActive={activeTab === 'details'} onClick={() => setActiveTab('details')} />
                                <TabButton label="فایل‌های ضمیمه" icon={<IconPaperclip size={18} />} isActive={activeTab === 'files'} onClick={() => setActiveTab('files')} />
                            </div>

                            {/* --- محتوای تب‌ها --- */}
                            <div>
                                {activeTab === 'details' && (
                                    <div className="space-y-6 animate-fade-in">
                                        <div>
                                            <h3 className="font-bold text-gray-700 mb-2">توضیحات دامدار:</h3>
                                            <p className="leading-7 text-sm text-gray-600">{request.description || "توضیحاتی ثبت نشده است."}</p>
                                        </div>
                                        {request.animals && request.animals.length > 0 && (
                                            <>
                                                <hr/>
                                                <div>
                                                    <h3 className="font-bold text-gray-700 mb-3">نوع دام:</h3>
                                                    <div className="space-y-2">{request.animals.map((item: animalType) => (<Rasitem key={item.id} animal={item} />))}</div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                                {activeTab === 'files' && (
                                    <div className="space-y-6 animate-fade-in">
                                        {request.voice && (
                                            <div>
                                                <h3 className="font-bold text-gray-700 mb-2">صدای ضبط شده:</h3>
                                                <MediaThemeTailwindAudio className="w-full"><video slot="media" src={request.voice}></video></MediaThemeTailwindAudio>
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {request.image && <img src={request.image} alt="Animal" className="rounded-lg object-cover w-full h-auto shadow-md" />}
                                            {request.video && <video controls className="rounded-lg w-full h-auto shadow-md"><source src={request.video} /></video>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Indexreqdetail;