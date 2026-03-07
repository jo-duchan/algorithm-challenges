// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const temp = n / i;

    if (Number.isInteger(temp)) answer += temp;
  }

  return answer;
}

// solution(12);
// 28
