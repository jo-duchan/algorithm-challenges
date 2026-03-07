// https://school.programmers.co.kr/learn/courses/30/lessons/120833
// 배열 자르기

function slicedArray(numbers, num1, num2) {
  const result = numbers.slice(num1, num2 + 1);

  return result;
}

// slicedArray([1, 2, 3, 4, 5], 1, 3);
// [2, 3, 4]
