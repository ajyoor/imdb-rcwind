import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { searchMovie } from "../../Api";

export const Search = ({ resApiSearch }) => {
  const [search, setSearch] = useState(0);
  const toggleSearch = (e) => {
    let res = e.currentTarget.value;
    res == "true" ? setSearch(1) : setSearch(0);
  };

  const searchMovies = async (e) => {
    let thisVals = e.target.value;
    if (thisVals.length >= 3) {
      const dataSearch = await searchMovie(thisVals);
      // setUpcomingMovies(dataSearch.results);
      resApiSearch(dataSearch.results);
    } else {
      resApiSearch([])
    }
  };

  return (
    <>
      {search == 1 ? (
        <div className="relative">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs transition ease-in-out delay-150 duration-300"
            onKeyUp={searchMovies}
          />
          <IoMdClose
            className="absolute right-[10px] top-[7px] cursor-pointer"
            value={"false"}
            onClick={toggleSearch}
          />
        </div>
      ) : (
        <button
          className="btn btn-ghost btn-circle search-icon "
          value={"true"}
          onClick={toggleSearch}
        >
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      )}
    </>
  );
};
