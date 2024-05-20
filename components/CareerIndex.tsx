import { createClient } from "@/prismicio";
import React from "react";
import CareerCard from "./CareerCard";

const CareerIndex = async () => {
  const client = createClient();
  const careers = await client.getAllByType("career");
  return (
    <div>
      {careers.map((e) => {
        return <CareerCard post={e} key={e.uid} />;
      })}
    </div>
  );
};

export default CareerIndex;
