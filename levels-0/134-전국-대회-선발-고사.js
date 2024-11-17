// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
  const studentMap = rank.reduce((map, cur, idx) => {
    if (attendance[idx]) {
      map.set(cur, idx);
    }
    return map;
  }, new Map());
  const [a, b, c] = [...studentMap].sort((a, b) => a[0] - b[0]);

  return 10000 * a[1] + 100 * b[1] + c[1];
}

// solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);
// 20403
