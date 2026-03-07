// https://school.programmers.co.kr/learn/courses/30/lessons/12985
// 예상 대진표

function solution(n, a, b) {
  let round = 1;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;

    if (a === b) round--;
  }

  return round;
}

// solution(8, 4, 6);
// 3
