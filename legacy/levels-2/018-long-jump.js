// https://school.programmers.co.kr/learn/courses/30/lessons/12914
// 멀리 뛰기

// 피보나치 수열 활용
// 현재 n칸째의 경우의 수 = n-1 칸에서 1칸 뛰어서 온 경우 + n-2 칸에서 2칸 뛰어서 온 경우
// arr[n] = arr[n - 1] + arr[n - 2]
// 1234567을 나눈 나머지를 요구하는 이유는 오버플로를 방지하기 위해서임

function solution(n) {
  let arr = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }

  return arr[n];
}

// solution(5);
// 8
