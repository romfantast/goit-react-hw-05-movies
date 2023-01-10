export const showGenres = genres => {
  const genresArray = [];
  for (let genre of genres) {
    genresArray.push(genre.name);
  }
  return genresArray.join(', ');
};
