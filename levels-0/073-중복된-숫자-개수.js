// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  const answer = array.reduce((acc, cur) => (acc += cur === n ? 1 : 0), 0);

  return answer;
}

// solution([1, 1, 2, 3, 4, 5], 1);
// 2
