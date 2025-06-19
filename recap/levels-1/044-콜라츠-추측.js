// https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 재귀로 쓰면 논리 흐름이 직관적이라 이해하기 쉽지만, 자바스크립트 엔진은 재귀 호출 깊이에 제한이 있다.
// 루프 방식은 재귀보다 안전하며, 메모리 부담이 적다.

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count >= 500) return -1;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count;
}

// solution(6);
// 8
