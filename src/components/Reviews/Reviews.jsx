import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/movie-api';
import css from './Reviews.module.css';
import { paintStars } from 'components/helpers/paintStars';

const Reviews = props => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMovieReview(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, [movieId]);

  const handleImgError = e => {
    e.target.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png';
    e.onerror = null;
  };

  if (!reviews?.length) {
    return <p>There aren't any reviews for this movie</p>;
  }

  return (
    <section>
      {reviews && (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content, author_details }) => (
            <li key={id} className={css.review}>
              <p>
                <img
                  width="200"
                  onError={handleImgError}
                  className={css.avatar}
                  src={
                    author_details.avatar_path
                      ? `http://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                      : 'http://bcibelisle.com/wp-content/uploads/2017/05/img_placeholder.png'
                  }
                  alt="Author"
                />
              </p>
              <p>
                <b>{author}</b>
              </p>
              <p className={css.rating}>
                <span>{paintStars(author_details.rating)}</span>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
