import React from 'react';
import { BiCaretRight } from 'react-icons/bi';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrending } from 'services/movie-api';
import Loader from '../Loader/Loader';
import css from './Home.module.css';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getTrending();
        console.log(data);
        setTrendMovies(data.results);
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <main className={css.homeContent}>
      {isLoading && <Loader />}
      {trendMovies && (
        <>
          <h1>Trending today</h1>
          <ul className={css.trendList}>
            {trendMovies &&
              trendMovies.map(({ id, title, name }) => (
                <li key={id} className={css.trendItem}>
                  <BiCaretRight />
                  {title || name}
                </li>
              ))}
          </ul>
        </>
      )}
    </main>
  );
};
