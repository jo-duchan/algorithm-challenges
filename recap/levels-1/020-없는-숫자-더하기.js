// https://school.programmers.co.kr/learn/courses/30/lessons/86051

// 가우스의 덧셈 공식 활용
/// 0-n까지 합 = n(n+1)/2

function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => (acc += cur), 0);
  return (9 * (9 + 1)) / 2 - sum;
}

// solution([1, 2, 3, 4, 6, 7, 8, 0]);
// 14
