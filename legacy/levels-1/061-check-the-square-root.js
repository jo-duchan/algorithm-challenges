// https://school.programmers.co.kr/learn/courses/30/lessons/12934
// 정수 제곱근 판별

function checkTheSquareRoot(n) {
  const squareRoot = Math.sqrt(n);

  if (Number.isInteger(squareRoot)) {
    return Math.pow(squareRoot + 1, 2);
  }

  return -1;
}

// checkTheSquareRoot(121);
// 144
