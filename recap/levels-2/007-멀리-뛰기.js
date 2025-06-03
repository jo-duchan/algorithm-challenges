// https://school.programmers.co.kr/learn/courses/30/lessons/12914
// 피보나치 수열을 활용
// dp[n] = dp[n-1] + dp[n-2]

// 굳이 배열 전체를 만들 필요 없이 직전 두 값만 저장해도 됨.
// function solution(n) {
//   const dp = new Array(n + 1).fill(0);
//   dp[0] = 1;
//   dp[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
//   }

//   return dp[n];
// }

function solution(n) {
  let a = 1; // dp[0]
  let b = 1; // dp[1]

  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % 1234567;
    a = b;
    b = temp;
  }

  return b;
}

// solution(3);
// 3
