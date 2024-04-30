// 홀짝에 따라 다른 값 반환하기

function oddOrEvenValue(n) {
  let result = 0;

  if (n <= 0) {
    return 0;
  }

  if (n % 2 === 0) {
    result += n * n + oddOrEvenValue(n - 2);
  } else {
    result += n + oddOrEvenValue(n - 2);
  }

  return result;
}

// oddOrEvenValue(10);
// 220
// oddOrEvenValue(7);
// 16
