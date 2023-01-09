import axios from 'axios';
const API_KEY = 'ecf1e97b02d331ed89fab73e637afa61';

const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrending = () => {
  const data = axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
  return data;
};

// https://api.themoviedb.org/3/search/movie?api_key=ecf1e97b02d331ed89fab73e637afa61&query=batman
export const getMovie = query => {
  const data = axios.get(
    `${BASE_URL}search/movie/?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return data;
};
