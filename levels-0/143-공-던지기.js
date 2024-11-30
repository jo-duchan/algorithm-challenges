// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  let count = 0;
  let increment = 0;
  const pitchers = [];

  while (count < k) {
    if (increment % 2 === 0) {
      count++;
      pitchers.push(numbers[increment % numbers.length]);
    }

    increment++;
  }
  return pitchers.at(-1);
}

// solution([1, 2, 3, 4, 5, 6], 5);
// 3
