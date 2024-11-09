// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// 팩토리얼을 계산
function factorial(num) {
  let result = 1;

  if (num === 0 || num == 1) {
    return result;
  }

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// 이항 계수(binomial coefficient) 계산
function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

// solution(30, 15);
// 155117520
