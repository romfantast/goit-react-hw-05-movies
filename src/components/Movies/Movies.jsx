import React, { useState, useEffect, useRef } from 'react';
import { Notify } from 'notiflix';
import css from './Movies.module.css';
import { getMovie } from 'services/movie-api';
import { BiChevronRight, BiSearch } from 'react-icons/bi';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState('');
  let isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (query === '') return Notify.info('Please enter a valid search string');

    (async () => {
      try {
        const { data } = await getMovie(query);
        console.log(data);
        setMovie(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  const handlerSubmit = e => {
    e.preventDefault();
    const { value } = e.target.searchQuery;
    setQuery(value.trim().toLowerCase());
  };

  return (
    <section>
      <form className={css.searchForm} onSubmit={handlerSubmit}>
        <input
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
      <ul className={css.searchList}>
        {movie &&
          movie.map(({ id, original_title }) => (
            <li key={id} className={css.searchItem}>
              <BiChevronRight />
              {original_title}
            </li>
          ))}
      </ul>
    </section>
  );
};
