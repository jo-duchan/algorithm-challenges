// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  const answer = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
  return answer;
}

// solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// 5.5
