// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// 팩토리얼을 계산
// Ex) 5! = 5 x 4 x 3 x 2 x 1
function factorial(num) {
  if (num === 0) return 1;

  return num * factorial(num - 1);
}

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(share) * factorial(balls - share))
  );
}

// solution(30, 15);
// 155117520
