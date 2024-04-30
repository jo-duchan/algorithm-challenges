// 카운트 업

function countup(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

// countup(3, 10);
// [3, 4, 5, 6, 7, 8, 9, 10]
