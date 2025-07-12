// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map((x) => sorted.indexOf(x) + 1);
  return answer;
}

// solution([3, 76, 24]);
// [3, 1, 2]
