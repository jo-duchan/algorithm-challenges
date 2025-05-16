// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
  return arr.reduce(
    (acc, cur) => [...acc, ...Array.from({ length: cur }).fill(cur)],
    []
  );
}

// solution([5, 1, 4]);
// [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
