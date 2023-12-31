import React, { useEffect, useState } from "react";
import { getUpcomingMovieList, searchMovie } from "../../Api";
import moment from "moment";
import $ from "jquery";

export const MainContent = () => {
  const [loading, setLoading] = useState("active");
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    // setUpcomingMovies(getMovieList());
    if (loading == "active") {
      let timerFunc = setTimeout(() => {
        getUpcomingMovieList().then((keys) => {
          setUpcomingMovies(keys);
          setLoading("non-active");
        });
      }, 5000);
      return () => clearTimeout(timerFunc);
    }
  }, []);

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
  const SkeletonUpcoming = () => {
    return (
      <>
        {Array(7)
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

  return (
    <div className="p-7">
      <span className="block w-full text-left text-2xl">Now Trending</span>
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
      {/* upcoming movies */}
      <span className="block w-full text-left text-2xl pt-5">
        Upcoming Movies
      </span>
      <div className="mt-5 carousel carousel-center rounded-box">
        {loading != "active" ? (
          <UpcomingMoviesList></UpcomingMoviesList>
        ) : (
          <SkeletonUpcoming></SkeletonUpcoming>
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
