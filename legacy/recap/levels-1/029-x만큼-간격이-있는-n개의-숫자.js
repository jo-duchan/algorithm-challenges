// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  return Array.from({ length: n }).map((_, index) => x + x * index);
}

// solution(2, 5);
// [2, 4, 6, 8, 10];
