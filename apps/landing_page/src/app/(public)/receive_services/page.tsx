import React from "react";
import Index from "./Index";

function page({
  searchParams: { veterinarian },
}: {
  searchParams: { veterinarian: string };
}) {
  return <Index veterinarianId={veterinarian} />;
}

export default page;
