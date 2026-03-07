// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  var answer = n
    .toString()
    .split('')
    .reverse()
    .map((x) => parseInt(x));

  return answer;
}

// solution(12345);
// [5,4,3,2,1]
