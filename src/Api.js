import axios from "axios";

const baseURL = import.meta.env.VITE_SOME_BASEURL;
const apiKey = import.meta.env.VITE_SOME_APIKEY;

export const getUpcomingMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/upcoming?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (text) => {
  const search = await axios.get(
    `${baseURL}/search/movie?api_key=${apiKey}&query=${text}`
  );
  return search.data;
};
