// https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
  const answer = [...my_string.toLocaleLowerCase()].sort().join("");

  return answer;
}

// solution("Bcad");
// abcd
