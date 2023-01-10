import React, { useState, useEffect } from 'react';
import css from './Movies.module.css';
import { getMovie } from 'services/movie-api';
import { BiChevronRight, BiSearch } from 'react-icons/bi';
import Loader from 'components/Loader/Loader';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery =
    searchParams.get('query') ??
    JSON.parse(localStorage.getItem('query')) ??
    '';
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) return;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getMovie(searchQuery);
        localStorage.setItem('query', JSON.stringify(searchQuery));
        setMovie(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => localStorage.setItem('query', JSON.stringify(searchQuery));
  }, [searchQuery]);

  const handlerSubmit = e => {
    e.preventDefault();
    const { value } = e.target.searchQuery;
    setSearchParams(
      value.trim().toLowerCase() !== ''
        ? { query: value.trim().toLowerCase() }
        : {}
    );
  };

  return (
    <section>
      <form className={css.searchForm} onSubmit={handlerSubmit}>
        <input
          defaultValue={searchQuery}
          type="text"
          name="searchQuery"
          className={css.input}
          placeholder="I'm looking for... "
        />
        <button type="submit" className={css.btn}>
          <BiSearch />
          Search
        </button>
      </form>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className={css.searchCaption}>
            {searchQuery
              ? `Search results for: '${searchQuery}'`
              : 'Please enter a movie title'}
          </h3>

          {movie && (
            <ul className={css.searchList}>
              {movie.map(({ id, original_title }) => (
                <li key={id} className={css.searchItem}>
                  <NavLink to={`${id}`} state={{ from: location }}>
                    <BiChevronRight />
                    {original_title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
};

export default Movies;
