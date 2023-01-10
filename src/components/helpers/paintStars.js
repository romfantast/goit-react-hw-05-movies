import { AiFillStar } from 'react-icons/ai';

export const paintStars = quantity => {
  if (!quantity) return;

  const stars = [];
  if (Number(quantity) < 3) {
    for (let i = 0; i < 1; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    console.log(stars);
  } else if (Number(quantity) >= 3 && Number(quantity) < 5) {
    for (let i = 0; i < 2; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    console.log(stars);
    console.log(stars);
  } else if (Number(quantity) >= 5 && Number(quantity) < 7) {
    for (let i = 0; i < 3; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    console.log(stars);
  } else if (Number(quantity) >= 7 && Number(quantity) < 9) {
    for (let i = 0; i < 4; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    console.log(stars);
  } else if (Number(quantity) >= 9 && Number(quantity) <= 10) {
    for (let i = 0; i < 5; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    console.log(stars);
  }

  return stars;
};
