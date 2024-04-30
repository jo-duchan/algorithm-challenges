// 콜라 문제

function cokeProblem(a, b, n) {
  function exchange(num) {
    if (num < a) return 0;

    const remainder = num % a;
    const giveBack = ((num - remainder) / a) * b;

    return giveBack + exchange(remainder + giveBack);
  }

  return exchange(n);
}

// cokeProblem(3, 1, 20);
// 9
