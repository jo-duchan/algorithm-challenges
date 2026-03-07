// https://school.programmers.co.kr/learn/courses/30/lessons/77884
// Number.isInteger(Math.sqrt(i))
// 제곱근이 정수면 약수의 개수가 홀수인 방법을 이용할 수도 있다.

function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    let divisor = [];

    for (let j = 0; j <= i; j++) {
      if (i % j === 0) divisor.push(j);
    }

    if (divisor.length % 2 === 0) {
      sum += i;
    } else {
      sum -= i;
    }
  }

  return sum;
}

// solution(13, 17);
// 43
