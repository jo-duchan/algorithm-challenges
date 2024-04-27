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

// 숫자 변환하기

function calculationCount(x, y, n) {
  // 너비 우선 탐색 활용

  let result = -1;
  const queue = [{ num: y, count: 0 }];

  while (queue.length !== 0) {
    const { num, count } = queue.shift();

    if (num === x) {
      result = count;
      break;
    }

    if (num % 2 === 0) {
      queue.push({ num: num / 2, count: count + 1 });
    }

    if (num % 3 === 0) {
      queue.push({ num: num / 3, count: count + 1 });
    }

    if (num - n >= x) {
      queue.push({ num: num - n, count: count + 1 });
    }
  }

  return result;
}

// calculationCount(5, 1000000, 5);
// 18
