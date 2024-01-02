import React, { useState, useEffect } from "react";
import { DarkMode } from "./DarkMode";
import { Search } from "./Search";
import { Link } from "react-router-dom";

const MainHeader = ({ dataSearch }) => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    dataSearch(datas);
  }, []);

  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start px-0">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-3xl">
          movLabs
        </Link>
      </div>
      <div className="navbar-end">
        <Search resApiSearch={setDatas}></Search>
        <DarkMode className="cursor-pointer"></DarkMode>
      </div>
    </div>
  );
};

export default MainHeader;
