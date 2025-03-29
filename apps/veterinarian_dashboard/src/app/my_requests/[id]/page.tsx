import React from "react";
import Indexreqdetail from "./Indexreqdetail";

function page({ params: { id } }: { params: { id: string } }) {
  return <Indexreqdetail id={id} />;
}

export default page;
