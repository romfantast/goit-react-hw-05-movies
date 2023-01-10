import { AiFillStar } from 'react-icons/ai';
import css from '../MovieDetails/MovieDetails.module.css';

export const howMuchStars = (star, setStar, setStarsList, rating) => {
  if (!rating) {
    return;
  }
  if (Number(rating) < 3) {
    setStar(1);
    for (let i = 0; i < star; i++) {
      setStarsList(prev => [
        ...prev,
        <AiFillStar key={i} className={css.starIcon} />,
      ]);
    }
  } else if (Number(rating) >= 3 && Number(rating) < 5) {
    setStar(2);
    for (let i = 0; i < star; i++) {
      setStarsList(prev => [
        ...prev,
        <AiFillStar key={i} className={css.starIcon} />,
      ]);
    }
  } else if (Number(rating) >= 5 && Number(rating) < 7) {
    setStar(3);
    for (let i = 0; i < star; i++) {
      setStarsList(prev => [
        ...prev,
        <AiFillStar key={i} className={css.starIcon} />,
      ]);
    }
  } else if (Number(rating) >= 7 && Number(rating) < 9) {
    setStar(4);
    for (let i = 0; i < star; i++) {
      setStarsList(prev => [
        ...prev,
        <AiFillStar key={i} className={css.starIcon} />,
      ]);
    }
  } else if (Number(rating) >= 9 && Number(rating) <= 10) {
    setStar(5);
    for (let i = 0; i < star; i++) {
      setStarsList(prev => [
        ...prev,
        <AiFillStar key={i} className={css.starIcon} />,
      ]);
    }
  }
};
