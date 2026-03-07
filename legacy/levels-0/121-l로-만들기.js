// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
  const answer = [...myString]
    .map((x) => (x.charCodeAt() < 108 ? "l" : x))
    .join("");

  return answer;
}

// solution("abcdevwxyz");
// lllllvwxyz
