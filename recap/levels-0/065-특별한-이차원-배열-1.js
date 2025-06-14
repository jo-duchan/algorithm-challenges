// https://school.programmers.co.kr/learn/courses/30/lessons/181833cd

function solution(n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    answer.push(row);
  }

  return answer;
}

// solution(3);
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
