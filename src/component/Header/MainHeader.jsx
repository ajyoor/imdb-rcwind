import React from "react";
import { DarkMode } from "./DarkMode";
import { TbBrandNetflix } from "react-icons/tb";

export const MainHeader = () => {
  return (
    <div className="bg-slate-300 dark:bg-slate-900 flex gap-5 justify-between w-100 items-center p-3">
      <TbBrandNetflix className="cursor-pointer dark:text-slate-950"></TbBrandNetflix>
      <div className="text-xl text-black dark:text-white">RCWIND MOVIES</div>
      <DarkMode className="cursor-pointer"></DarkMode>
    </div>
  );
};
