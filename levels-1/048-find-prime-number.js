// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기

// 일반적인 N개의 수의 소수 판단은 O(N^2)의 시간복잡도를 갖게 되므로
// 제곱근: N의 약수는 무조건 sqrt(N)의 범위에 존재함
// 에라토스테네스의 체 이용

function findPrimeNumber(n) {
  let count = 0;

  const isPrimeNumber = (x) => {
    if (x === 2) return true;
    for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= n; i++) {
    if (isPrimeNumber(i)) {
      count++;
    }
  }

  return count;
}

// findPrimeNumber(10);
// 4
