// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let answer = 0;

  while (chicken > 1) {
    chicken /= 10;
    answer += chicken;
  }

  return Math.floor(answer);
}

// solution(1081);
// 120
