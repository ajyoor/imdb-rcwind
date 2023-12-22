import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export const DarkMode = () => {
  const [dark, setDark] = useState("dark");
  const toggleDarkmode = () => {
    let root = document.documentElement;
    let res = dark != "dark" ? "dark" : "light";
    setDark(res);
    root.classList.remove(dark);
    root.classList.add(res);
  };

  return (
    <div>
      {dark == "dark" ? (
        <CiLight onClick={toggleDarkmode} />
      ) : (
        <MdDarkMode
          className="cursor-pointer text-slate-950"
          onClick={toggleDarkmode}
        />
      )}
    </div>
  );
};
