// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  let temp = direction === "right" ? numbers.splice(-1) : numbers.splice(1);

  return [...temp, ...numbers];
}

// solution([4, 455, 6, 4, -1, 45, 6], "left")
// [455, 6, 4, -1, 45, 6, 4];
