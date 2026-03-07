// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr) {
  const answer = strArr.filter((s) => !s.includes("ad"));
  return answer;
}

// solution(["and", "notad", "abcd"]);
// ["and","abcd"]
