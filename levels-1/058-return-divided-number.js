// https://school.programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열

function returnDividedNumber(arr, divisor) {
  const dividedArr = arr.filter((num) => num % divisor === 0);

  if (dividedArr.length === 0) return -1;

  const sortArr = dividedArr.sort((a, b) => a - b);

  return sortArr;
}

// returnDividedNumber([5, 9, 7, 10], 5);
// [ 5, 10 ]
