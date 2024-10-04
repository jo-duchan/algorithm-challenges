// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  const answer = [...`${order}`].filter((x) => +x !== 0 && +x % 3 === 0).length;

  return answer;
}

// solution(294623);
// 3
