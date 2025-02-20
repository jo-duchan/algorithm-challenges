// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  const sorted = sizes.reduce(
    (acc, cur) => [...acc, cur.sort((a, b) => b - a)],
    []
  );

  const width = Math.max(...sorted.map((x) => x[0]));
  const height = Math.max(...sorted.map((x) => x[1]));

  return width * height;
}

// solution([
//   [60, 50],
//   [30, 70],
//   [60, 30],
//   [80, 40],
// ]);
// 4000
