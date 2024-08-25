// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  let answer = [...`${num}`].findIndex((n) => +n === k);

  return answer >= 0 ? answer + 1 : answer;
}

// solution(29183, 1);
// 3
