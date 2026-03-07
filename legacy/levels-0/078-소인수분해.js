// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  const answer = [];

  const isPrimeNumber = (x) => {
    if (x === 2) return true;
    for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrimeNumber(i)) {
      n = n / i;
      answer.push(i);
    }
  }

  return answer;
}

// solution(12);
// [ 2, 2, 3, 5, 7 ]
