export const filterTvShowWithBanner = (items) => {
  if(!items) return [];
  return items.filter( item => item.image.medium);
}

export const sortByTopRate = (items) => {
  if(!items) return [];
  const hasRatingItems = items.filter( item => item.rating.average);
  return hasRatingItems.sort(( a, b ) => {
    return b.rating.average - a.rating.average;
  });

}

export const findTvShowsInQuery = (items) => {
  if(!items) return [];
  return items.map(item => item.show);
}
