import React, { useEffect, useState } from "react";
import moment from "moment";
import $ from "jquery";
import {
  getUpcomingMovieList,
  getListFirstRow,
  getListLastRow,
} from "../../Api";

import { Link } from "react-router-dom";

const MainContent = ({ search }) => {
  const [loading, setLoading] = useState("active");
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  // false = movie, true = series
  const [typeFirstList, setTypeFirstList] = useState(false);
  const [upcoming, setUpcoming] = useState(false);

  useEffect(() => {
    // setUpcomingMovies(getMovieList());
    setLoading("active");
    let timerFunc = setTimeout(() => {
      if (search.length != 0) {
        setUpcomingMovies(search);
        setLoading("non-active");
      } else {
        getUpcomingMovieList(upcoming).then((keys) => {
          setUpcomingMovies(keys);
        });
        getListFirstRow(typeFirstList).then((keys) => {
          setNowPlayingMovies(keys);
        });
        setLoading("non-active");
        return () => clearTimeout(timerFunc);
      }
    }, 1000);
  }, [typeFirstList, upcoming]);

  const UpcomingMoviesList = () => {
    return upcomingMovies.map((movie, index) => {
      return (
        <div
          key={index}
          className="carousel-item group/item group/item relative"
        >
          <img
            src={`${import.meta.env.VITE_SOME_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.original_title}
            className="hover:opacity-20 w-full"
          />
          <div className="hidden group-hover/item:flex absolute flex-col gap-2 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <span className="text-yellow-300 italic text-sm">
              {moment(movie.release_date).format("D MMMM YYYY")}
            </span>
            <span className="text-3xl">{movie.original_title}</span>
            <span>{movie.overview}</span>
          </div>
        </div>
      );
    });
  };

  const ListCardMoviesList = () => {
    return nowPlayingMovies.map((np, index) => {
      return (
        <div
          key={index}
          className="card card-compact xl:w-96 lg:w-80 sm:w-auto bg-base-100 shadow-2xl border border-yellow-100"
        >
          <figure>
            <img
              src={`${import.meta.env.VITE_SOME_BASEIMGURL}/${np.poster_path}`}
              alt={np.original_title}
            />
          </figure>
          <div className="card-body h-[228px]">
            <h2 className="card-title font-bold text-xl">
              {np.original_title}
            </h2>
            <p className="text-justify h-[100px] overflow-hidden">
              {np.overview}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const SkeletonCard = () => {
    return (
      <>
        {Array(6)
          .fill(true)
          .map((item, index) => (
            <div key={index} className="carousel-item flex-col mx-3 gap-4">
              {item}
              <div className="skeleton h-32 "></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-48"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
      </>
    );
  };

  const handleToggleType = (e) => {
    let res = e.target.getAttribute("vals");
    return res == "now"
      ? setTypeFirstList(e.target.checked)
      : setUpcoming(e.target.checked);
  };

  return (
    <div className="mx-">
      <div className="w-full flex justify-between items-center pt-5">
        <span className="block text-2xl mx-[5px]">
          {typeFirstList ? "Now On The Air" : "Now Trending"}
        </span>
        <div className="flex gap-5">
          <label className="swap btn btn-sm btn-outline btn-secondary">
            <input
              vals="now"
              type="checkbox"
              onChange={(e) => handleToggleType(e)}
            />
            <div className="swap-on">Series</div>
            <div className="swap-off">Movies</div>
          </label>
          <Link to="/detail">
            <button className="btn btn-sm btn-outline">Explore More</button>
          </Link>
        </div>
      </div>
      {/* <div className="pt-5 grid xl:grid-cols-3 sm:grid-cols-2 m-auto w-full gap-5 place-items-center"> */}
      <div className="pt-5 flex flex-wrap gap-8 items-start justify-center">
        {loading != "active" ? (
          <>
            <ListCardMoviesList></ListCardMoviesList>
          </>
        ) : (
          <SkeletonCard></SkeletonCard>
        )}
      </div>
      {/* upcoming movies */}
      <div className="flex justify-between items-center pt-5">
        <span className="block w-full text-left text-2xl">
          {upcoming ? "Popular Series" : "Upcoming Movies"}
        </span>
        <label className="swap btn btn-sm btn-outline btn-secondary">
          <input
            vals="upcoming"
            type="checkbox"
            onChange={(e) => handleToggleType(e)}
          />
          <div className="swap-on">Series</div>
          <div className="swap-off">Movies</div>
        </label>
      </div>
      <div className="mt-5 carousel carousel-center rounded-box">
        {loading != "active" ? (
          <>
            <UpcomingMoviesList></UpcomingMoviesList>
          </>
        ) : (
          <SkeletonCard></SkeletonCard>
        )}
      </div>
      {/* recommendation movies */}
      <span className="block w-full text-left text-2xl pt-5">
        Recommendation
      </span>
      <div className="pt-5 grid xl:grid-cols-3 sm:grid-cols-2 m-auto w-full gap-5 place-items-center">
        <div className="card xl:w-96 sm:w-auto bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
