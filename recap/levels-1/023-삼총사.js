// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

// solution([-2, 3, 0, 2, -5]);
// 2
