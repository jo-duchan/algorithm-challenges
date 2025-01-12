// https://school.programmers.co.kr/learn/courses/30/lessons/12969

function solution(n, m) {
  const arr = [];
  const starRepeat = "*".repeat(n);
  for (let i = 0; i < m; i++) {
    arr.push(starRepeat);
  }

  return arr.join("\n");
}

// solution(5, 3);
// *****
// *****
// *****
