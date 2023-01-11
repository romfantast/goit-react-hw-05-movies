import axios from 'axios';
const API_KEY = 'ecf1e97b02d331ed89fab73e637afa61';

const BASE_URL = 'http://api.themoviedb.org/3';

export const getTrending = () => {
  const data = axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const getMovie = query => {
  const data = axios.get(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return data;
};

export const getMovieDetails = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCredits = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMovieReview = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
