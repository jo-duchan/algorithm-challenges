// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  const answer = n
    .toString()
    .split('')
    .reduce((acc, cur) => (acc += parseInt(cur)), 0);

  return answer;
}

// solution(123);
// 6
