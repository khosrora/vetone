import FavoriteCard from "@/components/FavoriteCard";
import TitleBack from "@/components/TitleBack";
import React from "react";

function page() {
  return (
    <div className="space-y-4 px-4">
      <TitleBack text="دامپزشکان مورد علاقه" />
      <div className="grid gap-4 grid-cols-1 ">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <FavoriteCard key={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
