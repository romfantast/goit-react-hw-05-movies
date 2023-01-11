import React, { useState, useEffect } from 'react';
import css from './Movies.module.css';
import { getMovie } from 'services/movie-api';
import { BiChevronRight, BiSearch } from 'react-icons/bi';
import Loader from 'components/Loader/Loader';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import { Notify } from 'notiflix';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery =
    searchParams.get('query') ??
    JSON.parse(localStorage.getItem('query')) ??
    '';
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!searchQuery) {
      Notify.info("The search string should\n't be an empty ");
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getMovie(searchQuery);
        setMovie(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
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
