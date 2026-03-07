// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  let acc = 1;

  for (let i = 1; i <= n; i++) {
    acc *= i;

    if (acc === n) {
      return i;
    } else if (acc > n) {
      return i - 1;
    }
  }
}

// solution(7);
// 3
