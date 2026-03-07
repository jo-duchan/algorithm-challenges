// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  let answer = 0;

  if (n % 2 === 1) {
    for (let i = 1; i <= n; i += 2) {
      answer += i;
    }
  } else {
    for (let i = 2; i <= n; i += 2) {
      answer += i * i;
    }
  }

  return answer;
}

// solution(7);
// 16
