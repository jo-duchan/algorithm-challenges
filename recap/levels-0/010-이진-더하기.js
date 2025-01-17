// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
  const decoding = (str) => parseInt(str, 2);
  const encoding = (num) => num.toString(2);
  const sum = decoding(bin1) + decoding(bin2);

  return encoding(sum);
}

// solution("10", "11");
// 101
