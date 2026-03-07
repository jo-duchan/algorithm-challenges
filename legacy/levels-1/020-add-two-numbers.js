// 두 개 뽑아서 더하기

function addTwoNumbers(numbers) {
  const sumNums = [];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumNums.push(numbers[i] + numbers[j]);
    }
  }

  result = [...new Set(sumNums)].sort((a, b) => a - b);

  return result;
}

// addTwoNumbers([2, 1, 3, 4, 1]);
// [ 2, 3, 4, 5, 6, 7 ]
