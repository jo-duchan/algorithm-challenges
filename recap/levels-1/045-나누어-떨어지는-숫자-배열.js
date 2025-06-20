// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const divisible = arr.filter((num) => num % divisor === 0);
  return divisible.length > 0 ? divisible.sort((a, b) => a - b) : [-1];
}

// solution([5, 9, 7, 10], 5);
// [5, 10]
