// https://school.programmers.co.kr/learn/courses/30/lessons/81301

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  const answer = numbers.reduce((acc, num, idx) => acc.replaceAll(num, idx), s);
  return parseInt(answer, 10);
}

// solution("one4seveneight");
// 1478
