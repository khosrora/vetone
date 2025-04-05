"use client";
import FavoriteCard from "@/components/FavoriteCard";
import { fetcher } from "@/lib/fetch/fetch_axios";
import { FavoriteCardType } from "@/lib/types/favoriteCard.type";
import { Alert } from "@repo/ui/alert";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";
import Loader from "@/components/Loader";
function Index() {
  const { data: session } = useSession();
  const token: string = session?.token.token!;
  const {
    data: cards,
    isLoading,
    mutate,
  } = useSWR(!!token ? [`/veterinary/favorites/`, token] : null, fetcher);

  if (isLoading || !cards) {
     return (
    <Loader/>
    )
  }
  console.log(cards);
  return (
    <div className="grid gap-4 grid-cols-1 ">
      {cards.length === 0 ? (
        <Alert
          message="در حال حاضر اطلاعاتی جهت نمایش وجود ندارد."
          type="info"
        />
      ) : (
        cards.map((item: FavoriteCardType) => (
          <FavoriteCard key={item.id} item={item} mutate={mutate} />
        ))
      )}
    </div>
  );
}

export default Index;
