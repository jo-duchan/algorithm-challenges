// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const col = (i % n) + 1;
    const row = Math.floor(i / n) + 1;

    answer.push(Math.max(col, row));
  }

  return answer;
}

// solution(3, 2, 5);
// [ 3, 2, 2, 3 ]
