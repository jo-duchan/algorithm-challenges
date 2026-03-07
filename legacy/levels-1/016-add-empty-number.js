// 없는 숫자 더하기
function addEmptyNumber(num) {
  // 등차수열의 합
  const arithmeticSeries = (9 * (9 + 1)) / 2;
  const result = num.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);

  return arithmeticSeries - result;
}

// addEmptyNumber([5, 8, 4, 0, 6, 7, 9])
// 6
