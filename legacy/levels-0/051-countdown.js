// 카운트 다운

function countdown(start, end) {
  const result = [];

  for (let i = start; i >= end; i--) {
    result.push(i);
  }

  return result;
}

// countdown(10, 3);
// [3, 4, 5, 6, 7, 8, 9, 10];
