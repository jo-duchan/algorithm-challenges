// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
  const answer = [];

  for (const str of intStrs) {
    const num = parseInt(str.slice(s, s + l));
    if (num > k) {
      answer.push(num);
    }
  }

  return answer;
}

// solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5);
// [56789, 99999]
