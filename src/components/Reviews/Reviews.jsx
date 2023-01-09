import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/movie-api';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMovieReview(movieId);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, [movieId]);

  if (!reviews?.length) {
    return <p>There aren't any reviews for this movie</p>;
  }

  return (
    <section>
      <div>
        {reviews && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>
                  <b>{author}</b>
                </p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
