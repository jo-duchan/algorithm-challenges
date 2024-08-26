// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  const answer = [...cipher]
    .filter((_, index) => ++index % code === 0)
    .join("");

  return answer;
}

// solution("dfjardstddetckdaccccdegk", 4);
// attack
