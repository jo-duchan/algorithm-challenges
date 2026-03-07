// https://school.programmers.co.kr/learn/courses/30/lessons/120813
// 짝수는 싫어요

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }

  return answer;
}

// solution(10);
// [ 1, 3, 5, 7, 9 ]
