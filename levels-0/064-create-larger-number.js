// n보다 커질 때까지 더하기

function createLargerNumber(numbers, n) {
  const result = numbers.reduce(
    (acc, cur) => (acc > n ? acc : (acc += cur)),
    0
  );
  return result;
}

// createLargerNumber([34, 5, 71, 29, 100, 34], 123);
// 139
