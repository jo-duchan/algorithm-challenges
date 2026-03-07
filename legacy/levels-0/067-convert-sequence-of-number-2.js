// 조건에 맞게 수열 변환하기 2

function convertSequenceOfNumber2(arr) {
  let count = 0;
  let repeat = true;
  let oldArr = arr;
  let newArr;

  const calculate = (x) => {
    if (50 <= x && x % 2 === 0) {
      return x / 2;
    }

    if (50 > x && x % 2 !== 0) {
      return x * 2 + 1;
    }
    return x;
  };

  while (repeat) {
    newArr = oldArr.map((x) => calculate(x));

    if (newArr.toString() === oldArr.toString()) {
      repeat = false;
    } else {
      oldArr = newArr;
      count++;
    }
  }

  return count;
}

// convertSequenceOfNumber2([1, 2, 3, 100, 99, 98]);
// 5
// convertSequenceOfNumber2([2]);
// 0
