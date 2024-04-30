// 조건에 맞게 수열 변환하기 1

function convertSequenceOfNumber1(arr) {
  const result = arr.map((x) => {
    if (50 <= x && x % 2 === 0) {
      return x / 2;
    }

    if (50 > x && x % 2 !== 0) {
      return x * 2;
    }
    return x;
  });
  return result;
}

// convertSequenceOfNumber1([1, 2, 3, 100, 99, 98]);
// [ 2, 2, 6, 50, 99, 49 ]
