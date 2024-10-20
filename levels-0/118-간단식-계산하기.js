// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");

  const calc = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  return calc[op](+a, +b);
}

// solution("0 - 7777");
// -7777
