// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  var answer = [...s].sort((a, b) => (a > b ? -1 : 1)).join("");

  return answer;
}

solution("Zbcdefg");
// "gfedcbZ"
