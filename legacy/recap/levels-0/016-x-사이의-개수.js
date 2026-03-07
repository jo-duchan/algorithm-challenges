// https://school.programmers.co.kr/learn/courses/30/lessons/181867

function solution(myString) {
  const answer = myString.split("x").map((x) => x.length);
  return answer;
}

// solution("oxooxoxxox");
// [ 1, 2, 1, 0, 1, 0 ]
