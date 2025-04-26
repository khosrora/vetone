import React from "react";
import Index from "./Index";

function page({
  searchParams: { veterinarian, type },
}: {
  searchParams: { veterinarian: string; type: string };
}) {
  return <Index veterinarianId={veterinarian} type={type} />;
}

export default page;
