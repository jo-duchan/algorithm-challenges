// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  const [x, y] = dots.reduce(
    (acc, cur) => [
      [...acc[0], cur[0]],
      [...acc[1], cur[1]],
    ],
    [[], []]
  );

  const width = Math.max(...x) - Math.min(...x);
  const height = Math.max(...y) - Math.min(...y);

  return Math.abs(width * height);
}

// solution([
//   [0, 1],
//   [0, 3],
//   [10, 1],
//   [10, 3],
// ]);
// 20
