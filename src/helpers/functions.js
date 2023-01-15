export const getFilteredData = (array, val) => {
  return array.filter(
    ({ name, author }) =>
      name.toLowerCase().trim().includes(val) || author.toLowerCase().trim().includes(val),
  );
};

export const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};