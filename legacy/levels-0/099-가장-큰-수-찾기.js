// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  const maxNumber = Math.max(...array);

  const maxNumberIndex = array.findIndex((x) => x === maxNumber);
  return [maxNumber, maxNumberIndex];
}

// solution([1, 8, 3]);
// [8, 1]
