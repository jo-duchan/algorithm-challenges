// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  const arr = ["수", "박"];
  let answer = "";

  for (let i = 0; i < n; i++) {
    answer += arr[i % 2];
  }

  return answer;
}

// solution(3);
// 수박수
