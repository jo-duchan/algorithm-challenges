// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

// solution([1, 2, 3, 4]);
// 2.5
