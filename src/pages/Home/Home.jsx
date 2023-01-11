import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BiCaretRight } from 'react-icons/bi';
import Loader from '../../components/Loader/Loader';
import { getTrending } from 'services/movie-api';
import css from './Home.module.css';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getTrending();
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
                  <NavLink to={`movies/${id}`} state={{ from: location }}>
                    <BiCaretRight />
                    {title || name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </>
      )}
    </main>
  );
};
