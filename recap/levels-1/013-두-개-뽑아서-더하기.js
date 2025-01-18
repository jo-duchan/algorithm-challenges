// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (temp.length === 0) {
        temp.push(sum);
      } else if (!temp.includes(sum)) {
        temp.push(sum);
      }
    }
  }

  return temp.sort();
}

// solution([2, 1, 3, 4, 1]);
// [ 2, 3, 4, 5, 6, 7 ]
