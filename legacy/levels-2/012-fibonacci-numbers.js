// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수

// https://school.programmers.co.kr/questions/11991
// 문제에서 1234567로 나눈 나머지를 정답으로 내놓으라는 것은 문제를 꼰 것이 아니라 int 자료형의 범위 내에 항상 값이 있을 수 있도록 한 배려이며,
// 자료형의 크기에 제한이 있는 언어를 쓸 경우(A + B) % C ≡ ((A % C) + (B % C)) % C라는 성질을 이용해서 매번 계산 결과에 1234567으로
// 나눈 나머지를 대신 넣는 것으로 int 범위 내에 항상 값이 존재함을 보장할 수 있다.

// https://javascript.info/recursion
// 보통 자바스크립트 엔진이 가능한 재귀호출의 깊이는 10000

function fibonacciNumbers(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result.push((result[i - 1] + result[i - 2]) % 1234567);
  }

  return result[n];
}

// fibonacciNumbers(5);
// 5
