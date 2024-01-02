import axios from "axios";

const baseURL = import.meta.env.VITE_SOME_BASEURL;
const apiKey = import.meta.env.VITE_SOME_APIKEY;

// type is reference that data get from movies or tv serial
export const getUpcomingMovieList = async (type) => {
  const movie = await axios.get(
    `${baseURL}/${
      type == false ? "movie/upcoming" : "tv/popular"
    }?api_key=${apiKey}`
  );
  return movie.data.results;
};

export const getListFirstRow = async (type) => {
  const listCardFirstMovie = await axios.get(
    `${baseURL}/${
      type == false ? "movie/now_playing" : "tv/on_the_air"
    }?api_key=${apiKey}`
  );
  return listCardFirstMovie.data.results.slice(0,6);
};

export const getListLastRow = async (type) => {
  const listCardLastMovie = await axios.get(
    `${baseURL}/${type}/now_playing?api_key=${apiKey}`
  );
  return listCardLastMovie.data.results;
};

export const searchMovie = async (text) => {
  const search = await axios.get(
    `${baseURL}/search/movie?api_key=${apiKey}&query=${text}`
  );
  return search.data;
};
