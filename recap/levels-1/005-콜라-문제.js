// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let count = 0;

  while (n / a >= 1) {
    const remainder = n % a;
    const giveBack = ((n - remainder) / a) * b;
    count += giveBack;
    n = remainder + giveBack;
  }

  return count;
}

// solution(2, 1, 20);
// 19
