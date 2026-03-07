// https://school.programmers.co.kr/learn/courses/30/lessons/12941
// 최솟값 만들기

function createMinimum(a, b) {
  const sortA = a.sort((a, b) => a - b);
  const sortB = b.sort((a, b) => b - a);

  const result = sortA.reduce((acc, cur, idx) => (acc += cur * sortB[idx]), 0);

  return result;
}

// createMinimum([1, 4, 2], [5, 4, 4]);
// 29
