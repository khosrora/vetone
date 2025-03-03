import {
  constantsItemsNavigation,
  navigationBottomType,
} from "@/lib/constants/constants";
import Link from "next/link";

function NavigationBottom() {
  return (
    <div className="fixed bottom-0 bg-white left-0 right-0 z-[1] rounded-t-2xl shadow-2xl lg:hidden">
      <div className="grid grid-cols-3">
        {constantsItemsNavigation.map((item: navigationBottomType) => (
          <Link
            href={item.link}
            className="flex flex-col items-center gap-y-2 p-3"
            key={item.id}
          >
            {item.icon}
            <small>{item.title}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavigationBottom;
