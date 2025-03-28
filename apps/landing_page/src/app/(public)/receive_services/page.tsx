import React from "react";
import Index from "./Index";

function page({ params: { id } }: { params: { id: string } }) {
  return <Index id={id} />;
}

export default page;
