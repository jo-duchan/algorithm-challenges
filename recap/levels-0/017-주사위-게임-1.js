// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
  const isOdd = (n) => n % 2 !== 0;

  if (isOdd(a) && isOdd(b)) {
    return Math.pow(a, 2) + Math.pow(b, 2);
  }

  if (isOdd(a) || isOdd(b)) {
    return 2 * (a + b);
  }

  return Math.abs(a - b);
}

// solution(3, 5);
// 34
