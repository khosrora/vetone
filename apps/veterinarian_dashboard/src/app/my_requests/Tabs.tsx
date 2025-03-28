import { IconBuildingHospital } from "@tabler/icons-react";
import Link from "next/link";
import { typeQuery } from "./Index";

function Tabs({ type }: { type: string }) {
  return (
    <div className="grid grid-cols-4 lg:flex gap-x-1 lg:gap-x-8 rounded-lg  items-center bg-white p-4 lg:py-3 lg:px-6 text-[10px] lg:text-sm">
      <Link
        href={`/my_requests?type=${typeQuery.all}`}
        className={`${type === typeQuery.all && "bg-green-800 text-white"} rounded-full lg:px-4 py-2 items-center justify-self-center px-2.5`}
      >
        همه
      </Link>
      <Link
        href={`/my_requests?type=${typeQuery.inPerson}`}
        className={`flex justify-self-center px-2.5 gap-1 lg:gap-x-2 items-center rounded-full lg:px-4 py-2 ${type === typeQuery.inPerson && "bg-green-800 text-white"}`}
      >
        <IconBuildingHospital size={16} />
        <p>حضوری</p>
      </Link>
      {/* <Link
        href={"/"}
        className="flex justify-self-center px-2.5 gap-x-2 items-center rounded-full lg:px-4 py-2 "
      >
        <IconPhone size={16} />
        <p>تصویری</p>
      </Link>
      <Link
        href={"/"}
        className="flex  justify-self-center px-2.5 gap-x-2 items-center rounded-full  lg:px-4 py-2"
      >
        <IconBrandLine size={16} />
        <p>متنی</p>
      </Link> */}
    </div>
  );
}

export default Tabs;
