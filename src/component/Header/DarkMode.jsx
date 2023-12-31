import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import $ from "jquery";

export const DarkMode = () => {
  const [dark, setDark] = useState("synthwave");
  const toggleDarkmode = () => {
    let res = dark != "synthwave" ? "synthwave" : "bumblebee";
    setDark(res);
    // root.classList.remove(dark);
    // root.classList.add(res);
    $("html").attr("data-theme", res);
  };

  return (
    <div className="btn btn-ghost btn-circle" onClick={toggleDarkmode}>
      {dark == "synthwave" ? (
        <CiLight className="icon-toggle" size="23px" />
      ) : (
        <MdDarkMode className="icon-toggle" size="23px" />
      )}
    </div>
  );
};
