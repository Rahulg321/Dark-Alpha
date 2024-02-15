import React from "react";
import { FaCartShopping } from "react-icons/fa6";

type FavoriteIndustryCardProps = {
  icon: any;
  heading: string;
};

const FavoriteIndustryCard = ({ icon, heading }: FavoriteIndustryCardProps) => {
  return (
    <div className="flex flex-col items-center bg-slate-900 py-6 text-center">
      <div className="text-5xl text-yellow-500">{icon}</div>
      <h4 className="mt-4 font-extrabold text-white">{heading}</h4>
    </div>
  );
};

export default FavoriteIndustryCard;
