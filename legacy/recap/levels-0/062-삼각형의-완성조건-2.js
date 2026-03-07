// https://school.programmers.co.kr/learn/courses/30/lessons/120868

// 1. 세 번째 변 x가 가장 긴 변일 경우: max(a, b) < x < a + b
// 2. 세 번째 변 x가 가장 긴 변이 아닐 경우: |a - b| < x ≤ max(a, b)

// 세 번째 변 x의 유효 범위: (|a - b| < x < a + b)

function solution(sides) {
  const [a, b] = sides;
  const max = a + b - 1;
  const min = Math.abs(a - b) + 1;

  return max - min + 1;
}

// solution([11, 7]);
// 13
