// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let minCommonDivisor = 1;
  const minNumber = Math.min(n, m);

  for (let i = 1; i <= minNumber; i++) {
    if (n % i === 0 && m % i === 0) {
      minCommonDivisor = i;
    }
  }

  let maxCommonMultiple = null;
  let repeat = 0;

  while (maxCommonMultiple === null) {
    repeat++;
    if (repeat % n === 0 && repeat % m === 0) {
      maxCommonMultiple = repeat;
    }
  }

  return [minCommonDivisor, maxCommonMultiple];
}

// solution(3, 12);
// [3, 12]
