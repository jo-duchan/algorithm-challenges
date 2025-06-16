// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  const xSet = new Set();
  const ySet = new Set();

  for (const [x, y] of dots) {
    xSet.add(x);
    ySet.add(y);
  }

  const [x1, x2] = [...xSet];
  const [y1, y2] = [...ySet];

  return Math.abs(x1 - x2) * Math.abs(y1 - y2);
}

solution([
  [
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ],
]);
