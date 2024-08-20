// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  const answer = array.sort((a, b) => a - b)[Math.floor(array.length / 2)];

  return answer;
}

// solution([1, 2, 7, 10, 11]);
// 7
