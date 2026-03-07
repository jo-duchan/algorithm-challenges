// https://school.programmers.co.kr/learn/courses/30/lessons/120910

function solution(n, t) {
  let answer = n;

  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}

// solution(2, 10);
// 2048
