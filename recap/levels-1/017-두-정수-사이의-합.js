// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// solution(3, 5);
// 3
