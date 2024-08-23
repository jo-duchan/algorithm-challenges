// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  let answer = [...my_string].reduce((acc, cur) => (acc += cur.repeat(n)), "");

  return answer;
}

// solution("hello", 3);
// hhheeellllllooo
