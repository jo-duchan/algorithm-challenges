// 콜라츠 수열 만들기

function collatzSequence(n, arr = []) {
  arr.push(n);

  if (n === 1) {
    return arr;
  }

  if (n % 2 === 0) {
    return collatzSequence(n / 2, arr);
  }

  return collatzSequence(3 * n + 1, arr);
}

// collatzSequence(10);
// [10, 5, 16, 8, 4, 2, 1]
