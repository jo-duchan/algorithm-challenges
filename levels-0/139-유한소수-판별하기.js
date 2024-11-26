// https://school.programmers.co.kr/learn/courses/30/lessons/120878

function getGcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution(a, b) {
  const gcdValue = getGcd(a, b);
  const molecule = a / gcdValue;
  let denominator = b / gcdValue;

  if (Number.isInteger(molecule / denominator)) return 1;

  // 분모의 소인수가 2와 5 외의 것이 있는지 확인
  for (let i = 2; i <= Math.sqrt(denominator); i++) {
    while (denominator % i === 0) {
      if (i !== 2 && i !== 5) {
        return 2;
      }
      denominator /= i;
    }
  }

  // 마지막 남은 분모가 1보다 크고 2와 5가 아닌 경우
  if (denominator > 1 && denominator !== 2 && denominator !== 5) {
    return 2;
  }

  return 1;
}

// solution(7, 20);
// 1
