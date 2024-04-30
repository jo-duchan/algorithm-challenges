// 길이에 따른 연산

function calculationByLength(arr) {
  let result = 0;

  if (arr.length >= 11) {
    arr.map((num) => (result += num));
    return result;
  }

  result = 1;
  arr.map((num) => (result *= num));
  return result;
}

// calculationByLength([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]);
// 51
// calculationByLength([2, 3, 4, 5]);
// 120
