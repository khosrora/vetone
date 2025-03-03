import RequestCard from "@/components/RequestCard";
import TitleBack from "@/components/TitleBack";

function page() {
  return (
    <div className="p-4 space-y-4">
      <TitleBack text="درخواست های من" />
      <div className="flex justify-around items-center bg-white py-4">
        <p>همه</p>
        <p>حضوری</p>
        <p>تماس</p>
        <p>متنی</p>
      </div>

      <div className="flex justify-between items-center" dir="rtl">
        <p className="font-bold">وضعیت درخواست:</p>
        <select className="select select-bordered max-w-xs border-none focus:outline-none">
          <option>در انتظار تایید</option>
          <option>تایید شده</option>
        </select>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <RequestCard key={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
