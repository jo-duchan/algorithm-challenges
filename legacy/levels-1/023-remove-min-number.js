// 제일 작은 수 제거

function removeMinNumber(arr) {
  const smallest = Math.min(...arr);
  const result = arr.filter((num) => num > smallest);

  if (result.length === 0) {
    return [-1];
  }

  return result;
}
// removeMinNumber([4, 3, 2, 1]);
// [4, 3, 2]
// removeMinNumber([5]);
// [ -1 ]
