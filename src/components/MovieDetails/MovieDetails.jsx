import React, { Suspense, useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';
import { getMovieDetails } from 'services/movie-api';
import css from './MovieDetails.module.css';
import { howMuchStars } from 'components/helpers/howMuchStars';
import { showGenres } from 'components/helpers/showGenres';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [star, setStar] = useState(null);
  const [starsList, setStarsList] = useState([]);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getMovieDetails(movieId);
        howMuchStars(star, setStar, setStarsList, data.vote_average);
        setMovie(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId, star]);

  return (
    <section className={css.movieDetailsSection}>
      <NavLink to={location.state?.from ?? '/movies'} className={css.backLink}>
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
            <div className={css.imageWrapper}>
              <img
                className={css.imagePreview}
                src={
                  movie.backdrop_path
                    ? `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                    : 'http://bcibelisle.com/wp-content/uploads/2017/05/img_placeholder.png'
                }
                alt=""
              />
            </div>
            <div className={css.details}>
              <p>
                <b>{movie.original_title}</b>
              </p>
              <p>
                Rating: {movie.vote_average} &nbsp;{starsList}
              </p>
              <hr />
              <p>
                <b>Overview:</b>
              </p>
              <p>{movie.overview}</p>
              <hr />
              <p>
                <b>Genres: </b>
              </p>
              <p>{showGenres(movie.genres)}</p>
              <hr />
            </div>
          </div>
          <h4>Additional information: </h4>
          <div className={css.additional}>
            <NavLink
              to="cast"
              className={({ isActive }) => (isActive ? css.active : css.detail)}
              state={{ from: location.state?.from ?? '/' }}
            >
              Cast
            </NavLink>
            <br />
            <NavLink
              to="review"
              className={({ isActive }) => (isActive ? css.active : css.detail)}
              state={{ from: location.state?.from ?? '/' }}
            >
              Review
            </NavLink>
          </div>
          <hr />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </section>
  );
};

export default MovieDetails;
