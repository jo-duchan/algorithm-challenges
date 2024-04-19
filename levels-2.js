// 뒤에 있는 큰 수 찾기

function findLargerNumber(numbers) {
  const stack = [];
  const result = Array(numbers.length).fill(-1);

  for (let i = numbers.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && numbers[i] >= stack.at(-1)) {
      stack.pop();
    }

    if (stack.length !== 0) {
      result[i] = stack.at(-1);
    }

    stack.push(numbers[i]);
  }

  return result;
}

// findLargerNumber([2, 3, 3, 5]);
// [3, 5, 5, -1]
