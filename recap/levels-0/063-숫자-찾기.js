// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  const numStr = String(num);
  const index = numStr.indexOf(String(k));

  return index === -1 ? -1 : index + 1;
}

// solution(29183, 1);
// 3
