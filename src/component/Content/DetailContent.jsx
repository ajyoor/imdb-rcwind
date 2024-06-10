import React, { useState, useEffect } from "react";
// import axios from "axios";
import { getDetailMovie } from "../../Api";

const DetailContent = () => {
  const [data, setData] = useState([]);
  const typeData = window.location.pathname.split("/")[2].split("")[0];
  const idData = window.location.pathname
    .split("/")[2]
    .split("")
    .slice(1)
    .join("");
  useEffect(() => {
    getDetailMovie(idData, typeData).then((key) => setData(key));
  }, []);

  return (
    <div className="px-4 py-2">
      <div className="card card-side bg-base-100 shadow-xl border p-3 text-start sm:flex-col">
        <figure className="rounded-lg border">
          <img
            src={`${import.meta.env.VITE_SOME_BASEIMGURL}/${data.poster_path}`}
            alt={data.original_title || data.original_name}
            className="h-full"
          />
        </figure>
        <div className="card-body py-0 sm:px-0 sm:py-2">
          <div className="flex items-center gap-4">
            <h2 className="card-title font-extrabold">{data.original_title || data.original_name}</h2>
            <div className="badge badge-primary sm:hidden">{data.status}</div>
          </div>
          <div className="flex gap-2 flex-row">
            {data.genres &&
              data.genres.map((keys) => {
                return <div className="badge badge-accent">{keys.name}</div>;
              })}
          </div>
          <p className="text-justify">{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
