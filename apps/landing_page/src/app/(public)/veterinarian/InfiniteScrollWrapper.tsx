"use client"; // Mark this as a Client Component

import { useEffect, useState } from "react";
import VetCard from "@/components/VetCard";
import { base_api } from "@/lib/fetch/base_api";
import VeterinarianLoading from "@/components/loading/VeterinarianLoading";

export default function InfiniteScrollWrapper({
  initialData,
}: {
  initialData: any[];
}) {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(2); // Start fetching from page 2
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch more data
  const fetchMoreData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${base_api}/veterinary/search_veterinarian/?page=${page}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const newData = await res.json();

      if (newData.length === 0) {
        setHasMore(false); // No more data to fetch
      } else {
        setData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a scroll event listener to detect when the user reaches the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        fetchMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  if (loading) return <VeterinarianLoading />;
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-1 gap-4">
      {data.map((item: any) => (
        <VetCard key={item.id} item={item} />
      ))}
      {!hasMore && <p>No more data to load.</p>}
    </div>
  );
}
