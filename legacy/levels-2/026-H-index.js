// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  const answer = citations
    .sort((a, b) => b - a)
    .filter((x, i) => x >= i + 1).length;

  return answer;
}

solution([5, 5, 5, 5]);
// 4
// solution([3, 0, 6, 1, 5]);
// 3
