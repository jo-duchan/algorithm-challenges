// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  const length = 4 - new Set([a, b, c]).size;
  let answer = 1;

  for (let i = 1; i <= length; i++) {
    answer *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
  }

  return answer;
}

// solution(4, 4, 4);
// 110592
