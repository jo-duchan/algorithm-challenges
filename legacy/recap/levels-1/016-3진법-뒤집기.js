// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const encoded = n.toString(3);
  const encodeReversed = [...encoded].reverse().join("");
  const decoded = parseInt(encodeReversed, 3);

  return decoded;
}

// solution(45);
// 7
