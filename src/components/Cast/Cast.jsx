import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movie-api';
import css from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMovieCredits(movieId);
        console.log(data);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, [movieId]);

  return (
    <section>
      {cast && (
        <ul className={css.actorsList}>
          {cast.map(({ name, profile_path, id }) => (
            <li key={id} className={css.actorItem}>
              <img
                className={css.actorAvatar}
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'http://bl-systeme.ch/wp-content/uploads/2021/01/person-placeholder_550_700.jpg'
                }
                alt=""
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
