// n개 간격의 원소들

function nGapNumbers(list, n) {
  const result = list.filter((_, i) => !(i % n));

  return result;
}
// nGapNumbers([4, 2, 6, 1, 7, 6], 2);
// [ 4, 6, 7 ]
