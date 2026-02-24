import { filter } from "@prismicio/client";
import { createClient, getMasterRef } from "@/prismicio";
import CareerIndexWrapper from "./CareerIndexWrapper";

const CareerIndex = async () => {
  const client = await createClient();
  const masterRef = await getMasterRef();
  const careers = await client.getAllByType("career", {
    filters: [filter.at("my.career.status", "Active")],
    ref: masterRef,
  });
  return <CareerIndexWrapper careers={careers} />;
};

export default CareerIndex;
