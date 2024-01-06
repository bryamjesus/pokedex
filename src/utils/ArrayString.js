export const getMaxObj = (arr, tipe) => {
  return arr.reduce((max, obj) => (obj[tipe] > max[tipe] ? obj : max), arr[0]);
};
