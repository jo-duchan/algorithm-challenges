// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const index = Math.round(s.length / 2) - 1;
  const answer = s.length % 2 === 0 ? s[index] + s[index + 1] : s[index];

  return answer;
}

// solution("qwer");
// we
