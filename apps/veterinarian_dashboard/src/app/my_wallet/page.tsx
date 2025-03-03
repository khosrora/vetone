import TitleBack from "@/components/TitleBack";
import { Btn } from "@repo/ui/btn";
import { IconDownload } from "@tabler/icons-react";

function page() {
  return (
    <div className="p-4">
      <TitleBack text="کیف پول" />
      <div className="space-y-6 p-4">
        <p className="font-bold text-xl">
          150,000 <small className="font-light">تومان</small>
        </p>
        <div className="flex justify-between items-center">
          <Btn className="w-full"> واریز وجه </Btn>
        </div>
      </div>
      <p className="font-bold my-4">تراکنشات من</p>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center bg-white p-4 rounded-md w-full"
          >
            <div className="flex justify-start items-center gap-x-2">
              <div className="rounded-full p-2 bg-green_vetone/30">
                <IconDownload className="text-green_vetone" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <p>واریز وجه</p>
                <p>1403/10/12 12:30</p>
              </div>
            </div>
            <p className="font-bold text-xs text-green_vetone">
              150,000 <small className="font-light">تومان</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
