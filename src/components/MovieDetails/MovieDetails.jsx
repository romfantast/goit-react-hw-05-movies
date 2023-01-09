import React from 'react';
import { MdErrorOutline } from 'react-icons/md';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movie-api';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  const showGenres = genres => {
    const genresArray = [];
    for (let genre of genres) {
      genresArray.push(genre.name);
    }
    return genresArray.join(', ');
  };

  return (
    <section className={css.movieDetailsSection}>
      <NavLink to="/" className={css.backLink}>
        Back
      </NavLink>
      {isLoading && <Loader />}
      {isError && (
        <div className={css.error}>
          <MdErrorOutline />
          Something went wrong...
        </div>
      )}

      {movie && (
        <>
          <div className={css.movieDetailsWrapper}>
            <div>
              <img
                width="300px"
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                    : 'https://bcibelisle.com/wp-content/uploads/2017/05/img_placeholder.png'
                }
                alt=""
              />
            </div>
            <div className={css.details}>
              <p>
                <b>{movie.original_title}</b>
              </p>
              <p>Rating: {movie.vote_average}</p>
              <hr />
              <p>
                <b>Overview: </b>
                <br />
                {movie.overview}
              </p>
              <hr />

              <p>Genres</p>
              <p>{showGenres(movie.genres)}</p>
              <hr />
            </div>
          </div>
          <div className={css.additional}>
            <h4>Additional information: </h4>
            <NavLink to="cast" className={css.additionalCast}>
              Cast
            </NavLink>
            <br />
            <NavLink to="review" className={css.additionalReview}>
              Review
            </NavLink>
          </div>
          <hr />
          <Outlet />
        </>
      )}
    </section>
  );
};
