// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  const answer = sortedA.reduce(
    (acc, cur, idx) => (acc += cur * sortedB[idx]),
    0
  );

  return answer;
}

// solution([1, 2], [3, 4]);
// 10
