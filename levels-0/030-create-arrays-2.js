// 배열 만들기 2

function createArrays2(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (/^[05]+$/.test(i)) {
      result.push(i);
    }
  }

  return result.length <= 0 ? [-1] : result;
}

// createArrays2(5, 5005);
// [5, 50, 55, 500, 505, 550, 555]
