// https://school.programmers.co.kr/learn/courses/30/lessons/12933
// 정수 내림차순으로 배치하기

function toSortIntegers(n) {
  const result = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(result);
}

// toSortIntegers(118372);
// 873211
