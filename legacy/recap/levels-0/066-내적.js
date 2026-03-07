// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}

// solution([1, 2, 3, 4], [-3, -1, 0, 2]);
// 3
