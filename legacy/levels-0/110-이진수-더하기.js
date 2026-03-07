// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
  var answer = parseInt(bin1, 2) + parseInt(bin2, 2);

  return answer.toString(2);
}

// solution("10", "11");
// 101
