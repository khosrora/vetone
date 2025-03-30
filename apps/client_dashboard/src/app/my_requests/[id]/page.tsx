"use client";
import React from "react";
import Indexxdetail from "./Indexdetail";
function page({ params: { id } }: { params: { id: string } }) {
  return <Indexxdetail id={id} />;
}
export default page;
