// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
  const filteredRank = rank.reduce(
    (acc, cur, idx) => (attendance[idx] ? [...acc, [cur, idx]] : acc),
    []
  );
  const sortedRank = filteredRank.sort((a, b) => a[0] - b[0]);
  const [a, b, c] = sortedRank;

  return a[1] * 10000 + b[1] * 100 + c[1];
}

// solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);
// 20403
