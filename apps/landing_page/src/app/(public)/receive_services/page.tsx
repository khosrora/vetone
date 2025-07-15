import React from "react";
import Index from "./Index";

function page({
  searchParams: { veterinarians, type },
}: {
  searchParams: { veterinarians: string; type: string };
}) {
  return <Index veterinarianId={veterinarians} type={type} />;
}

export default page;
