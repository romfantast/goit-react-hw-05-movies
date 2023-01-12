import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { BiChevronRight, BiSearch } from 'react-icons/bi';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import { getMovie } from 'services/movie-api';
import css from './Movies.module.css';
import ctx from 'context/moviesContext';

const Movies = () => {
  const { searchedQuery, setSearchedQuery } = useContext(ctx);
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!searchQuery && isFirstRender.current) {
      isFirstRender.current = false;
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
    const validatedValue = value.trim().toLowerCase();
    if (!validatedValue) {
      return Notify.info("The search string should\n't be an empty ");
    }
    setSearchedQuery(validatedValue);
    setSearchParams({ query: validatedValue });
  };

  useEffect(() => {
    if (searchedQuery !== null) {
      setSearchParams({ query: searchedQuery });
    }
  }, [searchedQuery, setSearchParams]);

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
          {!movie.length && !isFirstRender && (
            <p className={css.noResults}>
              No results for <b>{searchQuery}</b>
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default Movies;
