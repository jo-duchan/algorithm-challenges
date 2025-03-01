// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  let answer = [];
  let count = 0;

  while (answer.length !== k) {
    const index = count % numbers.length;
    answer.push(numbers[index]);
    count += 2;
  }

  return answer.ar(-1);
}

// solution([1, 2, 3, 4], 2);
// 3
