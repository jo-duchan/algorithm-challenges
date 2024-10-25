// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  const pice = 6;
  let pizz = 1;

  while ((pizz * pice) % n !== 0) {
    pizz++;
  }

  return pizz;
}

// solution(10);
// 5
