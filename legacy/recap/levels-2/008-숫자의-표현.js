// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// k개의 연속된 자연수의 합 = x + (x+1) + (x+2) + ... + (x+k-1)
//                           = kx + (1 + 2 + ... + (k-1))
//                           = kx + (k * (k - 1)) / 2     ← 등차수열 합 공식

// n = kx + k*(k-1)/2
// => n - k*(k-1)/2 = kx
// => (n - k*(k-1)/2) % k == 0

function solution(n) {
  let answer = 0;
  let k = 1;

  while (true) {
    let sum = (k * (k - 1)) / 2;
    if (sum >= n) break;

    let temp = n - sum;
    if (temp % k === 0) {
      answer++;
    }

    k++;
  }

  return answer;
}

// solution(15);
// 4
