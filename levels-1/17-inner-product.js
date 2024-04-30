// 내적

function innerProduct(a, b) {
  const result = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);

  return result;
}

// innerProduct([1, 2, 3, 4], [-3, -1, 0, 2]);
// 3
