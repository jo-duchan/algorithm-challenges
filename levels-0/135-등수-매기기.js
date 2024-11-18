// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  const avg = score.map(([e, m]) => (e + m) / 2);
  const sorted = [...avg].sort((a, b) => b - a);

  return avg.map((x) => sorted.indexOf(x) + 1);
}

// solution([
//   [80, 70],
//   [70, 80],
//   [30, 50],
//   [90, 100],
//   [100, 90],
//   [100, 100],
//   [10, 30],
// ]);
// [4, 4, 6, 2, 2, 1, 7]
